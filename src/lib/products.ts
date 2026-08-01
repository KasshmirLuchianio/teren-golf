/**
 * Mock catalogue. No backend at this stage — every value here is editable copy
 * meant to be replaced with real stock once the shop goes live.
 */

export type Category =
  | "Dresses"
  | "Blazers"
  | "Coats"
  | "Blouses and Shirts"
  | "Bags and Accessories"
  | "Vintage Selection";

export type Condition =
  | "As new"
  | "Excellent"
  | "Very good"
  | "Good, gently worn";

export type Tone = "parchment" | "olive" | "burgundy" | "charcoal" | "butter" | "warmgrey";

export type Measurement = { label: string; value: string };

export type Product = {
  slug: string;
  code: string;
  brand: string;
  name: string;
  category: Category;
  price: number;
  size: string;
  colour: string;
  material: string;
  condition: Condition;
  period: string;
  vintage: boolean;
  sold: boolean;
  favourite: boolean;
  /** Days since the piece was added — drives the "newest" sort and New label. */
  addedDaysAgo: number;
  tone: Tone;
  measurements: Measurement[];
  description: string;
  ileanaNote: string;
  /** Discreet captions for the styled gallery placeholders. */
  gallery: string[];
};

const standardGallery = [
  "Full length",
  "Front detail",
  "Fabric close-up",
  "Lining and label",
  "Back view",
  "Worn on the shoulder",
];

export const products: Product[] = [
  {
    slug: "max-mara-wool-blazer",
    code: "IG-0412",
    brand: "Max Mara",
    name: "Wool Blazer, Tobacco",
    category: "Blazers",
    price: 640,
    size: "M / 40",
    colour: "Tobacco",
    material: "92% virgin wool, 8% cashmere",
    condition: "Excellent",
    period: "Late 1990s",
    vintage: true,
    sold: false,
    favourite: true,
    addedDaysAgo: 1,
    tone: "olive",
    measurements: [
      { label: "Shoulder to shoulder", value: "41 cm" },
      { label: "Chest, flat", value: "50 cm" },
      { label: "Waist, flat", value: "45 cm" },
      { label: "Sleeve length", value: "60 cm" },
      { label: "Total length", value: "72 cm" },
    ],
    description:
      "A single-breasted blazer cut close through the waist and left open at the hip, the way Max Mara tailored in the years when the house still made its jackets in Italy with a full canvas front. The wool has a dry, dense hand and holds the shoulder line without padding it into stiffness.",
    ileanaNote:
      "A beautifully constructed blazer with a strong shoulder line and a dense, high-quality fabric. I would wear it over a crisp white shirt or a very simple dress.",
    gallery: standardGallery,
  },
  {
    slug: "escada-silk-blouse",
    code: "IG-0398",
    brand: "Escada",
    name: "Silk Blouse, Ivory",
    category: "Blouses and Shirts",
    price: 320,
    size: "S / 38",
    colour: "Ivory",
    material: "100% silk crêpe de Chine",
    condition: "Very good",
    period: "1990s",
    vintage: true,
    sold: false,
    favourite: false,
    addedDaysAgo: 2,
    tone: "butter",
    measurements: [
      { label: "Shoulder to shoulder", value: "39 cm" },
      { label: "Chest, flat", value: "48 cm" },
      { label: "Sleeve length", value: "58 cm" },
      { label: "Total length", value: "64 cm" },
    ],
    description:
      "Heavy crêpe de Chine in a warm ivory, with covered buttons and a soft camp collar that sits well under a jacket. The weight is the point here — it falls rather than floats, which is why it reads as a garment and not as a summer top.",
    ileanaNote:
      "Silk of this weight is rare now. Wear it tucked, with the top two buttons open, and let the collar fall naturally over a blazer.",
    gallery: standardGallery,
  },
  {
    slug: "vintage-burberry-trench",
    code: "IG-0377",
    brand: "Burberry",
    name: "Cotton Gabardine Trench Coat",
    category: "Coats",
    price: 890,
    size: "M / 40",
    colour: "Honey beige",
    material: "100% cotton gabardine, check lining",
    condition: "Very good",
    period: "1980s",
    vintage: true,
    sold: false,
    favourite: true,
    addedDaysAgo: 3,
    tone: "parchment",
    measurements: [
      { label: "Shoulder to shoulder", value: "43 cm" },
      { label: "Chest, flat", value: "54 cm" },
      { label: "Sleeve length", value: "61 cm" },
      { label: "Total length", value: "108 cm" },
    ],
    description:
      "The trench as it was originally built: dense cotton gabardine, storm flap, buckled cuff straps, and a check lining that has softened into a warmer tone with age. The belt is original and the horn buttons are all present.",
    ileanaNote:
      "Do not belt it tightly. Tie it loosely at the front, collar up, and it will do most of the work of an outfit on its own.",
    gallery: standardGallery,
  },
  {
    slug: "french-floral-midi-dress",
    code: "IG-0402",
    brand: "Georges Rech",
    name: "French Floral Midi Dress",
    category: "Dresses",
    price: 380,
    size: "M / 40",
    colour: "Deep burgundy, small print",
    material: "100% viscose",
    condition: "Excellent",
    period: "1980s",
    vintage: true,
    sold: false,
    favourite: false,
    addedDaysAgo: 2,
    tone: "burgundy",
    measurements: [
      { label: "Shoulder to shoulder", value: "38 cm" },
      { label: "Chest, flat", value: "47 cm" },
      { label: "Waist, flat", value: "38 cm" },
      { label: "Total length", value: "118 cm" },
    ],
    description:
      "A small scattered print on a burgundy ground, gathered at the waist and falling to mid-calf. The viscose has the fluid drape of the period and moves properly when you walk, which is something modern prints of this kind rarely do.",
    ileanaNote:
      "The print is small enough to read as a texture from a distance. With flat shoes and a cardigan it is daytime; with heels and bare arms it is dinner.",
    gallery: standardGallery,
  },
  {
    slug: "italian-leather-handbag",
    code: "IG-0389",
    brand: "Unlabelled, made in Italy",
    name: "Structured Leather Handbag",
    category: "Bags and Accessories",
    price: 450,
    size: "One size",
    colour: "Chestnut",
    material: "Full-grain calf leather, brass hardware",
    condition: "Very good",
    period: "1970s",
    vintage: true,
    sold: false,
    favourite: true,
    addedDaysAgo: 4,
    tone: "warmgrey",
    measurements: [
      { label: "Width", value: "28 cm" },
      { label: "Height", value: "20 cm" },
      { label: "Depth", value: "9 cm" },
      { label: "Handle drop", value: "16 cm" },
    ],
    description:
      "A short-handled bag with a flat base and a turn-lock closure, made in Italy without a maker's stamp — common for workshop pieces sold through small boutiques. The leather has taken on a deep patina at the corners.",
    ileanaNote:
      "Hold it in the hand rather than on the shoulder. The proportion was drawn for that, and it changes how the whole silhouette reads.",
    gallery: ["Front", "Turn-lock detail", "Leather grain", "Interior", "Base and corners", "Held in the hand"],
  },
  {
    slug: "cashmere-cardigan",
    code: "IG-0405",
    brand: "Ballantyne",
    name: "Cashmere Cardigan, Oat",
    category: "Blouses and Shirts",
    price: 410,
    size: "L / 42",
    colour: "Oat",
    material: "100% Scottish cashmere",
    condition: "Excellent",
    period: "1990s",
    vintage: true,
    sold: false,
    favourite: false,
    addedDaysAgo: 1,
    tone: "butter",
    measurements: [
      { label: "Shoulder to shoulder", value: "42 cm" },
      { label: "Chest, flat", value: "52 cm" },
      { label: "Sleeve length", value: "59 cm" },
      { label: "Total length", value: "62 cm" },
    ],
    description:
      "Fully fashioned Scottish cashmere with mother-of-pearl buttons and a rib that has kept its recovery. No thinning at the elbows, no pilling under the arms — it has been stored properly.",
    ileanaNote:
      "Buy the cardigan a size larger than you think. It should sit over a blouse without pulling at the button band.",
    gallery: standardGallery,
  },
  {
    slug: "pleated-wool-skirt",
    code: "IG-0393",
    brand: "Aquascutum",
    name: "Pleated Wool Skirt, Olive",
    category: "Vintage Selection",
    price: 260,
    size: "S / 38",
    colour: "Muted olive",
    material: "100% wool",
    condition: "Very good",
    period: "1980s",
    vintage: true,
    sold: false,
    favourite: false,
    addedDaysAgo: 5,
    tone: "olive",
    measurements: [
      { label: "Waist, flat", value: "34 cm" },
      { label: "Hip, flat", value: "48 cm" },
      { label: "Total length", value: "74 cm" },
    ],
    description:
      "Knife pleats set from a flat yoke, so the skirt is smooth over the hip and only opens below. The wool is midweight and the pleats are still sharp, which tells you it has been hung and not folded.",
    ileanaNote:
      "Olive is more forgiving than black with warm skin tones. Wear it with a heavier knit so the top half has some weight.",
    gallery: standardGallery,
  },
  {
    slug: "structured-evening-jacket",
    code: "IG-0410",
    brand: "Yves Saint Laurent Variation",
    name: "Structured Evening Jacket",
    category: "Blazers",
    price: 780,
    size: "M / 40",
    colour: "Black",
    material: "Wool and silk blend, satin lapel",
    condition: "Excellent",
    period: "1980s",
    vintage: true,
    sold: true,
    favourite: true,
    addedDaysAgo: 6,
    tone: "charcoal",
    measurements: [
      { label: "Shoulder to shoulder", value: "40 cm" },
      { label: "Chest, flat", value: "49 cm" },
      { label: "Sleeve length", value: "60 cm" },
      { label: "Total length", value: "68 cm" },
    ],
    description:
      "A short evening jacket with a satin shawl lapel and a nipped waist, from the diffusion line that carried the house's tailoring language into ready-to-wear. The shoulder is built but not exaggerated.",
    ileanaNote:
      "This is the jacket that makes a plain black dress look considered. It has found its owner, but pieces of this kind do come through.",
    gallery: standardGallery,
  },
  {
    slug: "camel-wool-coat",
    code: "IG-0361",
    brand: "Windsmoor",
    name: "Camel Wool Coat",
    category: "Coats",
    price: 560,
    size: "L / 42",
    colour: "Camel",
    material: "80% wool, 20% cashmere",
    condition: "Very good",
    period: "1980s",
    vintage: true,
    sold: false,
    favourite: false,
    addedDaysAgo: 9,
    tone: "butter",
    measurements: [
      { label: "Shoulder to shoulder", value: "44 cm" },
      { label: "Chest, flat", value: "56 cm" },
      { label: "Sleeve length", value: "60 cm" },
      { label: "Total length", value: "104 cm" },
    ],
    description:
      "A straight camel coat with patch pockets and a half belt at the back. The colour has stayed even, with no sun fading across the shoulders — the first thing to check on any pale wool coat.",
    ileanaNote:
      "Camel asks for very little around it. Grey, ivory, black, and nothing else in the outfit competing for attention.",
    gallery: standardGallery,
  },
  {
    slug: "silk-scarf-carre",
    code: "IG-0344",
    brand: "Unlabelled, Lyon silk",
    name: "Printed Silk Carré",
    category: "Bags and Accessories",
    price: 140,
    size: "88 × 88 cm",
    colour: "Olive and gold",
    material: "100% silk twill, hand-rolled hem",
    condition: "Excellent",
    period: "1970s",
    vintage: true,
    sold: false,
    favourite: false,
    addedDaysAgo: 11,
    tone: "olive",
    measurements: [
      { label: "Width", value: "88 cm" },
      { label: "Height", value: "88 cm" },
      { label: "Hem", value: "Hand-rolled" },
    ],
    description:
      "Silk twill with a hand-rolled hem, printed in an equestrian border pattern in olive, gold and ivory. The hand-rolled edge is the mark of a properly made scarf and is easy to feel between the fingers.",
    ileanaNote:
      "Tie it at the handle of a bag if the neck feels like too much. It is the cheapest way to make an old bag look deliberate.",
    gallery: ["Full square", "Border detail", "Hand-rolled hem", "Silk close-up", "Folded", "Tied at the neck"],
  },
  {
    slug: "black-crepe-cocktail-dress",
    code: "IG-0386",
    brand: "Jean Muir",
    name: "Black Crêpe Cocktail Dress",
    category: "Dresses",
    price: 720,
    size: "S / 38",
    colour: "Black",
    material: "100% wool crêpe",
    condition: "Excellent",
    period: "1980s",
    vintage: true,
    sold: false,
    favourite: true,
    addedDaysAgo: 7,
    tone: "charcoal",
    measurements: [
      { label: "Shoulder to shoulder", value: "37 cm" },
      { label: "Chest, flat", value: "45 cm" },
      { label: "Waist, flat", value: "37 cm" },
      { label: "Total length", value: "104 cm" },
    ],
    description:
      "Matte wool crêpe, cut on a soft bias through the skirt, with a plain round neck and long sleeves. Jean Muir built her reputation on exactly this: no decoration, and every line doing the work.",
    ileanaNote:
      "If you own one black dress, it should be this kind. Matte, covered, and cut so the fabric moves half a beat after you do.",
    gallery: standardGallery,
  },
  {
    slug: "houndstooth-wool-blazer",
    code: "IG-0371",
    brand: "Aquascutum",
    name: "Houndstooth Wool Blazer",
    category: "Blazers",
    price: 490,
    size: "L / 42",
    colour: "Charcoal and ivory",
    material: "100% pure new wool",
    condition: "Very good",
    period: "1990s",
    vintage: true,
    sold: false,
    favourite: false,
    addedDaysAgo: 12,
    tone: "charcoal",
    measurements: [
      { label: "Shoulder to shoulder", value: "43 cm" },
      { label: "Chest, flat", value: "53 cm" },
      { label: "Sleeve length", value: "59 cm" },
      { label: "Total length", value: "74 cm" },
    ],
    description:
      "A classic houndstooth in a scale small enough to read as grey from across a room. Two-button front, flap pockets, and a centre vent that still sits closed.",
    ileanaNote:
      "Check that a houndstooth matches across the pockets before you buy. On this one it does, which tells you how it was cut.",
    gallery: standardGallery,
  },
  {
    slug: "ivory-cotton-shirt",
    code: "IG-0358",
    brand: "Charvet",
    name: "Ivory Cotton Shirt",
    category: "Blouses and Shirts",
    price: 290,
    size: "M / 40",
    colour: "Ivory",
    material: "100% cotton poplin",
    condition: "Very good",
    period: "1990s",
    vintage: false,
    sold: true,
    favourite: false,
    addedDaysAgo: 14,
    tone: "parchment",
    measurements: [
      { label: "Shoulder to shoulder", value: "40 cm" },
      { label: "Chest, flat", value: "50 cm" },
      { label: "Sleeve length", value: "60 cm" },
      { label: "Total length", value: "70 cm" },
    ],
    description:
      "Fine cotton poplin with a soft collar and a French placket. Cut for a woman but with the collar height of a man's shirt, which is what gives it its particular composure.",
    ileanaNote:
      "A white shirt is not a basic. The collar has to stand on its own, otherwise the whole outfit slouches.",
    gallery: standardGallery,
  },
  {
    slug: "olive-gabardine-raincoat",
    code: "IG-0349",
    brand: "Jaeger",
    name: "Olive Gabardine Raincoat",
    category: "Coats",
    price: 470,
    size: "M / 40",
    colour: "Muted olive",
    material: "Cotton and polyester gabardine",
    condition: "Good, gently worn",
    period: "1980s",
    vintage: true,
    sold: false,
    favourite: false,
    addedDaysAgo: 16,
    tone: "olive",
    measurements: [
      { label: "Shoulder to shoulder", value: "42 cm" },
      { label: "Chest, flat", value: "54 cm" },
      { label: "Sleeve length", value: "60 cm" },
      { label: "Total length", value: "96 cm" },
    ],
    description:
      "A lighter raincoat in a muted olive, with raglan sleeves and a concealed button placket. Some softening at the cuff edge, noted honestly — it has been worn, and worn well.",
    ileanaNote:
      "Raglan sleeves suit a rounder shoulder better than a set-in sleeve. This is a useful thing to know when you are buying coats.",
    gallery: standardGallery,
  },
  {
    slug: "grey-flannel-trousers",
    code: "IG-0407",
    brand: "Cerruti 1881",
    name: "Grey Flannel Trousers",
    category: "Vintage Selection",
    price: 300,
    size: "S / 38",
    colour: "Warm grey",
    material: "100% wool flannel",
    condition: "Excellent",
    period: "1990s",
    vintage: true,
    sold: false,
    favourite: false,
    addedDaysAgo: 3,
    tone: "warmgrey",
    measurements: [
      { label: "Waist, flat", value: "35 cm" },
      { label: "Hip, flat", value: "50 cm" },
      { label: "Inseam", value: "78 cm" },
      { label: "Leg opening", value: "22 cm" },
    ],
    description:
      "High-waisted flannel with a single forward pleat and a wide, straight leg. The flannel is brushed but still crisp at the crease, which is the balance the mill was known for.",
    ileanaNote:
      "Wear them long enough to break once over the shoe. Flannel that is too short loses all of its authority.",
    gallery: standardGallery,
  },
  {
    slug: "velvet-evening-jacket",
    code: "IG-0338",
    brand: "Unlabelled, Parisian atelier",
    name: "Burgundy Velvet Evening Jacket",
    category: "Blazers",
    price: 520,
    size: "S / 38",
    colour: "Deep burgundy",
    material: "Silk-backed cotton velvet",
    condition: "Very good",
    period: "1960s",
    vintage: true,
    sold: false,
    favourite: true,
    addedDaysAgo: 18,
    tone: "burgundy",
    measurements: [
      { label: "Shoulder to shoulder", value: "38 cm" },
      { label: "Chest, flat", value: "46 cm" },
      { label: "Sleeve length", value: "57 cm" },
      { label: "Total length", value: "58 cm" },
    ],
    description:
      "A short velvet jacket with a rounded collar and hook closures, hand-finished at the hem. The pile has kept its depth and the burgundy shifts towards brown under warm light.",
    ileanaNote:
      "Velvet is a matter of light, not of season. This one is best in the evening, over something very plain.",
    gallery: standardGallery,
  },
  {
    slug: "wool-felt-hat",
    code: "IG-0415",
    brand: "Borsalino",
    name: "Wool Felt Hat, Charcoal",
    category: "Bags and Accessories",
    price: 380,
    size: "57 cm",
    colour: "Charcoal",
    material: "Wool felt, grosgrain band",
    condition: "Excellent",
    period: "1990s",
    vintage: true,
    sold: false,
    favourite: true,
    addedDaysAgo: 1,
    tone: "charcoal",
    measurements: [
      { label: "Inner circumference", value: "57 cm" },
      { label: "Brim width", value: "7 cm" },
      { label: "Crown height", value: "11 cm" },
    ],
    description:
      "A medium-brim felt hat with a grosgrain band and a clean pinch at the crown. The felt is firm enough to hold its shape after rain, which is what separates a hat from a costume.",
    ileanaNote:
      "A hat is only difficult for the first week. Choose one with a brim in proportion to your shoulders and it will stop feeling like a decision.",
    gallery: ["Profile", "Crown and pinch", "Grosgrain band", "Felt close-up", "Interior sizing band", "Worn"],
  },
  {
    slug: "silk-shirt-dress",
    code: "IG-0380",
    brand: "Nina Ricci",
    name: "Silk Shirt Dress, Bone",
    category: "Dresses",
    price: 590,
    size: "M / 40",
    colour: "Bone",
    material: "100% silk",
    condition: "Excellent",
    period: "1980s",
    vintage: true,
    sold: false,
    favourite: false,
    addedDaysAgo: 8,
    tone: "butter",
    measurements: [
      { label: "Shoulder to shoulder", value: "40 cm" },
      { label: "Chest, flat", value: "50 cm" },
      { label: "Waist, flat, tied", value: "36 cm" },
      { label: "Total length", value: "116 cm" },
    ],
    description:
      "A shirt dress in heavy bone silk with a self-tie belt and covered buttons to the hem. Cut generously through the body so it blouses slightly over the belt rather than pulling.",
    ileanaNote:
      "Tie the belt at your natural waist, not where the loops suggest. The dress was drawn for that, and the drape changes completely.",
    gallery: standardGallery,
  },
  {
    slug: "tweed-skirt-suit",
    code: "IG-0356",
    brand: "Unlabelled, French tailoring",
    name: "Tweed Skirt Suit",
    category: "Vintage Selection",
    price: 680,
    size: "S / 38",
    colour: "Olive and oat fleck",
    material: "Pure wool tweed, silk lining",
    condition: "Very good",
    period: "1960s",
    vintage: true,
    sold: false,
    favourite: false,
    addedDaysAgo: 20,
    tone: "olive",
    measurements: [
      { label: "Jacket shoulder", value: "38 cm" },
      { label: "Jacket chest, flat", value: "46 cm" },
      { label: "Skirt waist, flat", value: "34 cm" },
      { label: "Skirt length", value: "62 cm" },
    ],
    description:
      "A two-piece in a flecked wool tweed, with a collarless jacket and a straight skirt. The lining is silk and has been replaced once, neatly, by hand — a sign somebody thought it was worth keeping.",
    ileanaNote:
      "Suits like this are better split up. The jacket with jeans, the skirt with a black knit, and the set only when you want to be looked at.",
    gallery: standardGallery,
  },
  {
    slug: "navy-wool-cape",
    code: "IG-0334",
    brand: "Unlabelled",
    name: "Navy Wool Cape",
    category: "Coats",
    price: 430,
    size: "One size",
    colour: "Navy",
    material: "Heavy wool melton",
    condition: "Good, gently worn",
    period: "1970s",
    vintage: true,
    sold: true,
    favourite: false,
    addedDaysAgo: 22,
    tone: "charcoal",
    measurements: [
      { label: "Shoulder to shoulder", value: "42 cm" },
      { label: "Total length", value: "88 cm" },
      { label: "Hem circumference", value: "196 cm" },
    ],
    description:
      "Heavy melton with arm slits and a small stand collar. Some density loss at the hem from wear, described plainly — the cut and the cloth are both still excellent.",
    ileanaNote:
      "A cape needs a narrow silhouette underneath, otherwise you disappear into it. Slim trousers and a boot with a little heel.",
    gallery: standardGallery,
  },
  {
    slug: "pleated-georgette-blouse",
    code: "IG-0396",
    brand: "Louis Féraud",
    name: "Pleated Georgette Blouse",
    category: "Blouses and Shirts",
    price: 240,
    size: "M / 40",
    colour: "Butter cream",
    material: "100% silk georgette",
    condition: "Excellent",
    period: "1980s",
    vintage: true,
    sold: false,
    favourite: false,
    addedDaysAgo: 10,
    tone: "butter",
    measurements: [
      { label: "Shoulder to shoulder", value: "40 cm" },
      { label: "Chest, flat", value: "52 cm" },
      { label: "Sleeve length", value: "56 cm" },
      { label: "Total length", value: "62 cm" },
    ],
    description:
      "Fine pleating across the yoke, released into a full body and gathered again at the cuff. Georgette this fine is usually the first thing to go at the seams; here they are all intact.",
    ileanaNote:
      "Press it on the reverse, on low heat, or not at all. Pleats of this age do not forgive an iron.",
    gallery: standardGallery,
  },
  {
    slug: "leather-belt-gold-buckle",
    code: "IG-0341",
    brand: "Unlabelled, made in France",
    name: "Leather Belt, Antique Gold Buckle",
    category: "Bags and Accessories",
    price: 130,
    size: "80 cm",
    colour: "Black",
    material: "Calf leather, gilt brass buckle",
    condition: "Very good",
    period: "1980s",
    vintage: true,
    sold: false,
    favourite: false,
    addedDaysAgo: 13,
    tone: "warmgrey",
    measurements: [
      { label: "Total length", value: "95 cm" },
      { label: "Width", value: "3 cm" },
      { label: "Fits waist", value: "76 – 86 cm" },
    ],
    description:
      "A narrow black calf belt with a rectangular gilt buckle that has worn down to a soft antique tone. Five holes, all unstretched.",
    ileanaNote:
      "One good belt closes an outfit. Gold that has dulled slightly is far better than gold that still shines.",
    gallery: ["Full length", "Buckle detail", "Leather grain", "Keeper and stitching", "Reverse", "Worn at the waist"],
  },
  {
    slug: "wool-crepe-trouser-suit",
    code: "IG-0368",
    brand: "Mugler",
    name: "Wool Crêpe Trouser Suit",
    category: "Vintage Selection",
    price: 940,
    size: "S / 38",
    colour: "Charcoal",
    material: "100% wool crêpe",
    condition: "Excellent",
    period: "Late 1980s",
    vintage: true,
    sold: false,
    favourite: true,
    addedDaysAgo: 15,
    tone: "charcoal",
    measurements: [
      { label: "Jacket shoulder", value: "40 cm" },
      { label: "Jacket waist, flat", value: "36 cm" },
      { label: "Trouser waist, flat", value: "34 cm" },
      { label: "Inseam", value: "80 cm" },
    ],
    description:
      "A sharply waisted jacket over a high, narrow trouser. The shoulder is constructed and the waist is genuinely suppressed — this is cutting, not draping, and very little of it is being done now.",
    ileanaNote:
      "The most architectural piece in the selection. It needs nothing underneath but a plain shell and a flat shoe.",
    gallery: standardGallery,
  },
  {
    slug: "printed-silk-day-dress",
    code: "IG-0413",
    brand: "Cacharel",
    name: "Printed Silk Day Dress",
    category: "Dresses",
    price: 340,
    size: "L / 42",
    colour: "Olive and cream",
    material: "100% silk",
    condition: "Very good",
    period: "1970s",
    vintage: true,
    sold: false,
    favourite: false,
    addedDaysAgo: 5,
    tone: "olive",
    measurements: [
      { label: "Shoulder to shoulder", value: "41 cm" },
      { label: "Chest, flat", value: "53 cm" },
      { label: "Waist, flat", value: "44 cm" },
      { label: "Total length", value: "112 cm" },
    ],
    description:
      "A soft day dress in printed silk with a gathered yoke and a self belt, in the olive-and-cream range that Cacharel used throughout the decade. Light enough for summer, warm enough in tone for autumn.",
    ileanaNote:
      "The kind of dress you keep for fifteen years without thinking about it. Those are usually the ones worth buying.",
    gallery: standardGallery,
  },
];

/* ---------------------------------- helpers --------------------------------- */

export const categories: { name: Category; href: string; blurb: string; tone: Tone }[] = [
  {
    name: "Dresses",
    href: "/catalogue?category=Dresses",
    blurb: "Day dresses, silk shirt dresses and evening pieces cut from proper cloth.",
    tone: "burgundy",
  },
  {
    name: "Blazers",
    href: "/catalogue?category=Blazers",
    blurb: "Tailoring with a real shoulder line, from houses that still built jackets by hand.",
    tone: "olive",
  },
  {
    name: "Coats",
    href: "/catalogue?category=Coats",
    blurb: "Gabardine, melton and camel wool. The pieces that decide how a winter looks.",
    tone: "parchment",
  },
  {
    name: "Blouses and Shirts",
    href: "/catalogue?category=Blouses and Shirts",
    blurb: "Silk crêpe, cotton poplin and cashmere, chosen for weight before pattern.",
    tone: "butter",
  },
  {
    name: "Bags and Accessories",
    href: "/catalogue?category=Bags and Accessories",
    blurb: "Leather, felt and silk. Small things that finish an outfit rather than decorate it.",
    tone: "warmgrey",
  },
  {
    name: "Vintage Selection",
    href: "/catalogue?category=Vintage Selection",
    blurb: "Pieces kept aside for their period, their cut, or simply because they are rare.",
    tone: "charcoal",
  },
];

export const allSizes = ["XS / 36", "S / 38", "M / 40", "L / 42", "One size"];
export const allBrands = Array.from(new Set(products.map((p) => p.brand))).sort();
export const allColours = Array.from(new Set(products.map((p) => p.colour))).sort();
export const allConditions: Condition[] = ["As new", "Excellent", "Very good", "Good, gently worn"];
export const allMaterials = ["Wool", "Silk", "Cashmere", "Cotton", "Leather", "Viscose"];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function relatedProducts(product: Product, count = 8): Product[] {
  const sameCategory = products.filter(
    (p) => p.slug !== product.slug && p.category === product.category,
  );
  const rest = products.filter((p) => p.slug !== product.slug && p.category !== product.category);
  return [...sameCategory, ...rest].slice(0, count);
}

export function formatPrice(value: number): string {
  return `${value.toLocaleString("ro-RO")} RON`;
}

/** Loose material matching, since a piece can be a blend. */
export function matchesMaterial(product: Product, material: string): boolean {
  return product.material.toLowerCase().includes(material.toLowerCase());
}
