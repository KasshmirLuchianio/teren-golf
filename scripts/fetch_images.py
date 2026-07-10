"""Descarcă imaginile generate (Higgsfield CDN) și le optimizează pentru web.

Rulat de workflow-ul .github/workflows/fetch-images.yml pe un runner GitHub
(politica de rețea a sandbox-ului local blochează CDN-ul). Necesită Pillow.
"""
import urllib.request
from io import BytesIO
from pathlib import Path

from PIL import Image

BASE = "https://d8j0ntlcm91z4.cloudfront.net/user_33Ej8t2gAxUeQ3elHCepqWYPaUg"

IMAGES = {
    "hero-golf": "hf_20260709_185452_5e37be82-00ea-456d-aa0b-bea64061e748.png",
    "course-overview": "hf_20260709_185453_f7cac3df-6e92-4240-922a-6bc95fbe88c6.png",
    "fairway": "hf_20260709_185454_a6bd1e0d-a114-47e3-b9a0-d2f095a05468.png",
    "putting-green": "hf_20260709_185455_8897c4d4-c5e9-4525-a0a0-7d1cc491b3ff.png",
    "bunker": "hf_20260709_185457_1494ccf9-80cb-4045-a3e8-8027fefb4518.png",
    "clubhouse": "hf_20260709_185459_cdb0d24d-e22f-4381-8e27-97b817f0cefc.png",
    "aerial": "hf_20260709_185500_98aa9cfa-7b41-4102-8487-32af2461d128.png",
    "guesthouse": "hf_20260709_185509_f3ca9d53-d15b-43e5-84c3-68d0df268571.png",
    "breakfast": "hf_20260709_185516_a303661c-cdee-4066-a725-009d4f842399.png",
    "room-standard": "hf_20260709_185611_7f592882-06ae-4167-b212-13a473c2bbdc.png",
    "room-deluxe": "hf_20260709_185619_fe91aa5b-ce14-4070-aa31-cf38c2bfdb39.png",
    "tournament": "hf_20260709_190652_e9963c10-e136-43a3-acfb-e561a7f79331.png",
    "room-family": "hf_20260709_191121_722253d8-3f5a-4f99-aff6-ee3ea802ef50.png",
}

MAX_WIDTH = 1600

out_dir = Path("assets/img")
out_dir.mkdir(parents=True, exist_ok=True)

for name, filename in IMAGES.items():
    url = f"{BASE}/{filename}"
    print(f"Fetching {name}...")
    with urllib.request.urlopen(url, timeout=60) as resp:
        im = Image.open(BytesIO(resp.read())).convert("RGB")
    if im.width > MAX_WIDTH:
        im = im.resize((MAX_WIDTH, round(im.height * MAX_WIDTH / im.width)), Image.LANCZOS)
    dest = out_dir / f"{name}.jpg"
    im.save(dest, quality=82, optimize=True)
    print(f"  -> {dest} ({dest.stat().st_size // 1024} KB, {im.width}x{im.height})")

print("Done.")
