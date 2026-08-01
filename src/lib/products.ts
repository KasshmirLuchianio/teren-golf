/**
 * Catalog demonstrativ. Fără backend în această etapă — toate valorile de aici
 * sunt text editabil, de înlocuit cu stocul real la lansare.
 */

export type Category =
  | "Rochii"
  | "Sacouri"
  | "Paltoane"
  | "Bluze și cămăși"
  | "Genți și accesorii"
  | "Selecție vintage";

export type Condition = "Ca nouă" | "Excelentă" | "Foarte bună" | "Bună, purtată cu grijă";

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
  /** Zile de la adăugare — stă la baza sortării „cele mai noi" și a etichetei. */
  addedDaysAgo: number;
  tone: Tone;
  measurements: Measurement[];
  description: string;
  ileanaNote: string;
  /** Legende discrete pentru machetele de imagine. */
  gallery: string[];
};

const standardGallery = [
  "Piesa întreagă",
  "Detaliu față",
  "Prim-plan material",
  "Căptușeală și etichetă",
  "Spate",
  "Purtată pe umăr",
];

export const products: Product[] = [
  {
    slug: "sacou-lana-max-mara",
    code: "IG-0412",
    brand: "Max Mara",
    name: "Sacou din lână, tutun",
    category: "Sacouri",
    price: 640,
    size: "M / 40",
    colour: "Tutun",
    material: "92% lână virgină, 8% cașmir",
    condition: "Excelentă",
    period: "Sfârșitul anilor '90",
    vintage: true,
    sold: false,
    favourite: true,
    addedDaysAgo: 1,
    tone: "olive",
    measurements: [
      { label: "Umăr la umăr", value: "41 cm" },
      { label: "Bust, pe plat", value: "50 cm" },
      { label: "Talie, pe plat", value: "45 cm" },
      { label: "Lungime mânecă", value: "60 cm" },
      { label: "Lungime totală", value: "72 cm" },
    ],
    description:
      "Sacou la un rând, strâns pe talie și lăsat deschis pe șold, așa cum croia Max Mara în anii în care casa își făcea încă sacourile în Italia, cu față întărită integral. Lâna are o textură uscată și densă și ține linia umărului fără să o încarce.",
    ileanaNote:
      "Un sacou construit frumos, cu o linie fermă a umărului și un material dens, de calitate. Eu l-aș purta peste o cămașă albă apretată sau peste o rochie foarte simplă.",
    gallery: standardGallery,
  },
  {
    slug: "bluza-matase-escada",
    code: "IG-0398",
    brand: "Escada",
    name: "Bluză din mătase, fildeș",
    category: "Bluze și cămăși",
    price: 320,
    size: "S / 38",
    colour: "Fildeș",
    material: "100% crep de Chine din mătase",
    condition: "Foarte bună",
    period: "Anii '90",
    vintage: true,
    sold: false,
    favourite: false,
    addedDaysAgo: 2,
    tone: "butter",
    measurements: [
      { label: "Umăr la umăr", value: "39 cm" },
      { label: "Bust, pe plat", value: "48 cm" },
      { label: "Lungime mânecă", value: "58 cm" },
      { label: "Lungime totală", value: "64 cm" },
    ],
    description:
      "Crep de Chine greu, într-un fildeș cald, cu nasturi îmbrăcați și un guler moale care stă bine sub sacou. Greutatea materialului face diferența: cade, nu plutește, și de aceea se citește ca o piesă de garderobă, nu ca un top de vară.",
    ileanaNote:
      "Mătase de greutatea asta se mai găsește rar. Poart-o băgată în talie, cu primii doi nasturi desfăcuți, și lasă gulerul să cadă natural peste sacou.",
    gallery: standardGallery,
  },
  {
    slug: "trenci-burberry-vintage",
    code: "IG-0377",
    brand: "Burberry",
    name: "Trenci din gabardină de bumbac",
    category: "Paltoane",
    price: 890,
    size: "M / 40",
    colour: "Bej miere",
    material: "100% gabardină de bumbac, căptușeală în carouri",
    condition: "Foarte bună",
    period: "Anii '80",
    vintage: true,
    sold: false,
    favourite: true,
    addedDaysAgo: 3,
    tone: "parchment",
    measurements: [
      { label: "Umăr la umăr", value: "43 cm" },
      { label: "Bust, pe plat", value: "54 cm" },
      { label: "Lungime mânecă", value: "61 cm" },
      { label: "Lungime totală", value: "108 cm" },
    ],
    description:
      "Trenciul așa cum era construit la început: gabardină densă de bumbac, clapă de ploaie, curele la manșete și o căptușeală în carouri care s-a așezat cu anii într-un ton mai cald. Cordonul este original, iar nasturii din corn sunt toți la locul lor.",
    ileanaNote:
      "Nu-l strânge tare în talie. Leagă-l lejer în față, cu gulerul ridicat, și va face singur mai toată treaba unei ținute.",
    gallery: standardGallery,
  },
  {
    slug: "rochie-midi-flori-frantuzesti",
    code: "IG-0402",
    brand: "Georges Rech",
    name: "Rochie midi cu imprimeu floral",
    category: "Rochii",
    price: 380,
    size: "M / 40",
    colour: "Bordo intens, imprimeu mărunt",
    material: "100% vâscoză",
    condition: "Excelentă",
    period: "Anii '80",
    vintage: true,
    sold: false,
    favourite: false,
    addedDaysAgo: 2,
    tone: "burgundy",
    measurements: [
      { label: "Umăr la umăr", value: "38 cm" },
      { label: "Bust, pe plat", value: "47 cm" },
      { label: "Talie, pe plat", value: "38 cm" },
      { label: "Lungime totală", value: "118 cm" },
    ],
    description:
      "Un imprimeu mărunt, împrăștiat, pe fond bordo, încrețit în talie și lăsat până la jumătatea gambei. Vâscoza are căderea fluidă a perioadei și se mișcă cum trebuie când mergi — lucru pe care imprimeurile de azi de genul acesta rareori îl fac.",
    ileanaNote:
      "Imprimeul e destul de mărunt cât să se citească de la distanță ca o textură. Cu pantofi fără toc și un cardigan e ținută de zi; cu toc și brațele libere, e cină.",
    gallery: standardGallery,
  },
  {
    slug: "geanta-piele-italiana",
    code: "IG-0389",
    brand: "Fără etichetă, fabricată în Italia",
    name: "Geantă structurată din piele",
    category: "Genți și accesorii",
    price: 450,
    size: "Mărime unică",
    colour: "Castaniu",
    material: "Piele de vițel integrală, feronerie din alamă",
    condition: "Foarte bună",
    period: "Anii '70",
    vintage: true,
    sold: false,
    favourite: true,
    addedDaysAgo: 4,
    tone: "warmgrey",
    measurements: [
      { label: "Lățime", value: "28 cm" },
      { label: "Înălțime", value: "20 cm" },
      { label: "Adâncime", value: "9 cm" },
      { label: "Cădere toartă", value: "16 cm" },
    ],
    description:
      "Geantă cu toartă scurtă, bază plată și închidere cu răsucitor, făcută în Italia fără ștampila producătorului — obișnuit pentru piesele de atelier vândute prin buticuri mici. Pielea a prins o patină adâncă la colțuri.",
    ileanaNote:
      "Ține-o în mână, nu pe umăr. Proporția a fost desenată pentru asta și schimbă felul în care se citește toată silueta.",
    gallery: [
      "Față",
      "Detaliu închizătoare",
      "Textura pielii",
      "Interior",
      "Bază și colțuri",
      "Ținută în mână",
    ],
  },
  {
    slug: "cardigan-casmir",
    code: "IG-0405",
    brand: "Ballantyne",
    name: "Cardigan din cașmir, ovăz",
    category: "Bluze și cămăși",
    price: 410,
    size: "L / 42",
    colour: "Ovăz",
    material: "100% cașmir scoțian",
    condition: "Excelentă",
    period: "Anii '90",
    vintage: true,
    sold: false,
    favourite: false,
    addedDaysAgo: 1,
    tone: "butter",
    measurements: [
      { label: "Umăr la umăr", value: "42 cm" },
      { label: "Bust, pe plat", value: "52 cm" },
      { label: "Lungime mânecă", value: "59 cm" },
      { label: "Lungime totală", value: "62 cm" },
    ],
    description:
      "Cașmir scoțian tricotat pe formă, cu nasturi din sidef și o rezervă care și-a păstrat elasticitatea. Fără subțieri la coate, fără scămoșare la subraț — a fost păstrat cum trebuie.",
    ileanaNote:
      "Cardiganul ia-l cu o măsură mai mare decât crezi. Trebuie să stea peste bluză fără să tragă de bandă cu nasturi.",
    gallery: standardGallery,
  },
  {
    slug: "fusta-plisata-lana",
    code: "IG-0393",
    brand: "Aquascutum",
    name: "Fustă plisată din lână, oliv",
    category: "Selecție vintage",
    price: 260,
    size: "S / 38",
    colour: "Verde oliv stins",
    material: "100% lână",
    condition: "Foarte bună",
    period: "Anii '80",
    vintage: true,
    sold: false,
    favourite: false,
    addedDaysAgo: 5,
    tone: "olive",
    measurements: [
      { label: "Talie, pe plat", value: "34 cm" },
      { label: "Șold, pe plat", value: "48 cm" },
      { label: "Lungime totală", value: "74 cm" },
    ],
    description:
      "Pliuri drepte pornite dintr-un cos plat, astfel încât fusta stă netedă pe șold și se deschide abia mai jos. Lâna e de greutate medie, iar pliurile sunt încă tăioase — semn că a fost ținută pe umeraș, nu împăturită.",
    ileanaNote:
      "Olivul e mai iertător decât negrul pe tenurile calde. Poart-o cu un tricotaj mai greu, ca partea de sus să aibă și ea consistență.",
    gallery: standardGallery,
  },
  {
    slug: "sacou-seara-structurat",
    code: "IG-0410",
    brand: "Yves Saint Laurent Variation",
    name: "Sacou de seară structurat",
    category: "Sacouri",
    price: 780,
    size: "M / 40",
    colour: "Negru",
    material: "Amestec de lână și mătase, rever din satin",
    condition: "Excelentă",
    period: "Anii '80",
    vintage: true,
    sold: true,
    favourite: true,
    addedDaysAgo: 6,
    tone: "charcoal",
    measurements: [
      { label: "Umăr la umăr", value: "40 cm" },
      { label: "Bust, pe plat", value: "49 cm" },
      { label: "Lungime mânecă", value: "60 cm" },
      { label: "Lungime totală", value: "68 cm" },
    ],
    description:
      "Sacou scurt de seară, cu rever șal din satin și talie strânsă, din linia care a dus limbajul de croitorie al casei către prêt-à-porter. Umărul este construit, dar fără exagerare.",
    ileanaNote:
      "Ăsta e sacoul care face ca o rochie neagră simplă să pară gândită. Și-a găsit deja stăpâna, dar piese de felul lui mai trec pe aici.",
    gallery: standardGallery,
  },
  {
    slug: "palton-lana-camel",
    code: "IG-0361",
    brand: "Windsmoor",
    name: "Palton din lână, camel",
    category: "Paltoane",
    price: 560,
    size: "L / 42",
    colour: "Camel",
    material: "80% lână, 20% cașmir",
    condition: "Foarte bună",
    period: "Anii '80",
    vintage: true,
    sold: false,
    favourite: false,
    addedDaysAgo: 9,
    tone: "butter",
    measurements: [
      { label: "Umăr la umăr", value: "44 cm" },
      { label: "Bust, pe plat", value: "56 cm" },
      { label: "Lungime mânecă", value: "60 cm" },
      { label: "Lungime totală", value: "104 cm" },
    ],
    description:
      "Palton drept, camel, cu buzunare aplicate și o jumătate de cordon la spate. Culoarea a rămas uniformă, fără decolorare de soare pe umeri — primul lucru de verificat la orice palton din lână deschisă la culoare.",
    ileanaNote:
      "Camelul cere foarte puțin în jurul lui. Gri, fildeș, negru, și nimic altceva în ținută care să ceară atenție.",
    gallery: standardGallery,
  },
  {
    slug: "esarfa-matase-carre",
    code: "IG-0344",
    brand: "Fără etichetă, mătase de Lyon",
    name: "Eșarfă pătrată din mătase imprimată",
    category: "Genți și accesorii",
    price: 140,
    size: "88 × 88 cm",
    colour: "Oliv și auriu",
    material: "100% twill de mătase, tiv rulat manual",
    condition: "Excelentă",
    period: "Anii '70",
    vintage: true,
    sold: false,
    favourite: false,
    addedDaysAgo: 11,
    tone: "olive",
    measurements: [
      { label: "Lățime", value: "88 cm" },
      { label: "Înălțime", value: "88 cm" },
      { label: "Tiv", value: "Rulat manual" },
    ],
    description:
      "Twill de mătase cu tiv rulat manual, imprimat cu un chenar în registru ecvestru, în oliv, auriu și fildeș. Tivul rulat de mână este semnul unei eșarfe făcute cum trebuie și se simte ușor între degete.",
    ileanaNote:
      "Leag-o de toarta unei genți dacă la gât ți se pare prea mult. E cel mai ieftin fel de a face ca o geantă veche să pară o alegere, nu o întâmplare.",
    gallery: [
      "Pătratul întreg",
      "Detaliu chenar",
      "Tiv rulat manual",
      "Prim-plan mătase",
      "Împăturită",
      "Legată la gât",
    ],
  },
  {
    slug: "rochie-crep-negru",
    code: "IG-0386",
    brand: "Jean Muir",
    name: "Rochie de seară din crep negru",
    category: "Rochii",
    price: 720,
    size: "S / 38",
    colour: "Negru",
    material: "100% crep de lână",
    condition: "Excelentă",
    period: "Anii '80",
    vintage: true,
    sold: false,
    favourite: true,
    addedDaysAgo: 7,
    tone: "charcoal",
    measurements: [
      { label: "Umăr la umăr", value: "37 cm" },
      { label: "Bust, pe plat", value: "45 cm" },
      { label: "Talie, pe plat", value: "37 cm" },
      { label: "Lungime totală", value: "104 cm" },
    ],
    description:
      "Crep de lână mat, croit ușor pe diagonală în partea de jos, cu decolteu rotund simplu și mâneci lungi. Jean Muir și-a construit reputația exact pe atât: nicio podoabă, și fiecare linie făcând ceva.",
    ileanaNote:
      "Dacă ai o singură rochie neagră, asta ar trebui să fie. Mată, acoperită și croită astfel încât materialul să se miște la o jumătate de pas după tine.",
    gallery: standardGallery,
  },
  {
    slug: "sacou-lana-pied-de-poule",
    code: "IG-0371",
    brand: "Aquascutum",
    name: "Sacou din lână, pied-de-poule",
    category: "Sacouri",
    price: 490,
    size: "L / 42",
    colour: "Antracit și fildeș",
    material: "100% lână nouă pură",
    condition: "Foarte bună",
    period: "Anii '90",
    vintage: true,
    sold: false,
    favourite: false,
    addedDaysAgo: 12,
    tone: "charcoal",
    measurements: [
      { label: "Umăr la umăr", value: "43 cm" },
      { label: "Bust, pe plat", value: "53 cm" },
      { label: "Lungime mânecă", value: "59 cm" },
      { label: "Lungime totală", value: "74 cm" },
    ],
    description:
      "Un pied-de-poule clasic, la o scară destul de mică încât să se citească gri dintr-un capăt în altul al camerei. Doi nasturi în față, buzunare cu clapă și o șliță la spate care încă stă închisă.",
    ileanaNote:
      "Verifică întotdeauna dacă modelul se continuă peste buzunare înainte să cumperi. La acesta se continuă, iar asta îți spune totul despre cum a fost croit.",
    gallery: standardGallery,
  },
  {
    slug: "camasa-bumbac-fildes",
    code: "IG-0358",
    brand: "Charvet",
    name: "Cămașă din bumbac, fildeș",
    category: "Bluze și cămăși",
    price: 290,
    size: "M / 40",
    colour: "Fildeș",
    material: "100% popelină de bumbac",
    condition: "Foarte bună",
    period: "Anii '90",
    vintage: false,
    sold: true,
    favourite: false,
    addedDaysAgo: 14,
    tone: "parchment",
    measurements: [
      { label: "Umăr la umăr", value: "40 cm" },
      { label: "Bust, pe plat", value: "50 cm" },
      { label: "Lungime mânecă", value: "60 cm" },
      { label: "Lungime totală", value: "70 cm" },
    ],
    description:
      "Popelină fină de bumbac, cu guler moale și bandă franceză. Croită pentru o femeie, dar cu înălțimea de guler a unei cămăși bărbătești — de acolo îi vine ținuta.",
    ileanaNote:
      "O cămașă albă nu e o piesă banală. Gulerul trebuie să stea singur, altfel se lasă toată ținuta.",
    gallery: standardGallery,
  },
  {
    slug: "trenci-gabardina-oliv",
    code: "IG-0349",
    brand: "Jaeger",
    name: "Trenci din gabardină, oliv",
    category: "Paltoane",
    price: 470,
    size: "M / 40",
    colour: "Verde oliv stins",
    material: "Gabardină din bumbac și poliester",
    condition: "Bună, purtată cu grijă",
    period: "Anii '80",
    vintage: true,
    sold: false,
    favourite: false,
    addedDaysAgo: 16,
    tone: "olive",
    measurements: [
      { label: "Umăr la umăr", value: "42 cm" },
      { label: "Bust, pe plat", value: "54 cm" },
      { label: "Lungime mânecă", value: "60 cm" },
      { label: "Lungime totală", value: "96 cm" },
    ],
    description:
      "Un trenci mai ușor, într-un oliv stins, cu mâneci raglan și bandă de nasturi ascunsă. Materialul s-a înmuiat puțin la marginea manșetei — spus cinstit: a fost purtat, și purtat bine.",
    ileanaNote:
      "Mâneca raglan stă mai bine pe un umăr rotunjit decât mâneca montată. E un lucru util de știut când cumperi paltoane.",
    gallery: standardGallery,
  },
  {
    slug: "pantaloni-flanel-gri",
    code: "IG-0407",
    brand: "Cerruti 1881",
    name: "Pantaloni din flanel gri",
    category: "Selecție vintage",
    price: 300,
    size: "S / 38",
    colour: "Gri cald",
    material: "100% flanel de lână",
    condition: "Excelentă",
    period: "Anii '90",
    vintage: true,
    sold: false,
    favourite: false,
    addedDaysAgo: 3,
    tone: "warmgrey",
    measurements: [
      { label: "Talie, pe plat", value: "35 cm" },
      { label: "Șold, pe plat", value: "50 cm" },
      { label: "Lungime interioară picior", value: "78 cm" },
      { label: "Lățime tiv", value: "22 cm" },
    ],
    description:
      "Flanel cu talie înaltă, un singur pliu în față și picior larg, drept. Materialul e scămoșat, dar rămâne tăios pe dungă — echilibrul pentru care era cunoscută filatura.",
    ileanaNote:
      "Poartă-i suficient de lungi cât să se frângă o dată peste pantof. Flanelul prea scurt își pierde toată autoritatea.",
    gallery: standardGallery,
  },
  {
    slug: "sacou-catifea-bordo",
    code: "IG-0338",
    brand: "Fără etichetă, atelier parizian",
    name: "Sacou de seară din catifea bordo",
    category: "Sacouri",
    price: 520,
    size: "S / 38",
    colour: "Bordo intens",
    material: "Catifea de bumbac pe suport de mătase",
    condition: "Foarte bună",
    period: "Anii '60",
    vintage: true,
    sold: false,
    favourite: true,
    addedDaysAgo: 18,
    tone: "burgundy",
    measurements: [
      { label: "Umăr la umăr", value: "38 cm" },
      { label: "Bust, pe plat", value: "46 cm" },
      { label: "Lungime mânecă", value: "57 cm" },
      { label: "Lungime totală", value: "58 cm" },
    ],
    description:
      "Sacou scurt din catifea, cu guler rotunjit și închidere în copci, finisat manual la tiv. Firul și-a păstrat adâncimea, iar bordoul virează spre maro la lumină caldă.",
    ileanaNote:
      "Catifeaua ține de lumină, nu de sezon. Pe acesta l-aș purta seara, peste ceva foarte simplu.",
    gallery: standardGallery,
  },
  {
    slug: "palarie-fetru-lana",
    code: "IG-0415",
    brand: "Borsalino",
    name: "Pălărie din fetru de lână, antracit",
    category: "Genți și accesorii",
    price: 380,
    size: "57 cm",
    colour: "Antracit",
    material: "Fetru de lână, panglică grosgrain",
    condition: "Excelentă",
    period: "Anii '90",
    vintage: true,
    sold: false,
    favourite: true,
    addedDaysAgo: 1,
    tone: "charcoal",
    measurements: [
      { label: "Circumferință interioară", value: "57 cm" },
      { label: "Lățime bor", value: "7 cm" },
      { label: "Înălțime calotă", value: "11 cm" },
    ],
    description:
      "Pălărie cu bor mediu, panglică grosgrain și o îndoitură curată a calotei. Fetrul e destul de ferm cât să-și țină forma după ploaie — asta desparte o pălărie de un accesoriu de costum.",
    ileanaNote:
      "O pălărie e grea doar în prima săptămână. Alege una cu borul pe măsura umerilor tăi și nu va mai părea o decizie.",
    gallery: [
      "Profil",
      "Calotă și îndoitură",
      "Panglică grosgrain",
      "Prim-plan fetru",
      "Bandă interioară",
      "Purtată",
    ],
  },
  {
    slug: "rochie-camasa-matase",
    code: "IG-0380",
    brand: "Nina Ricci",
    name: "Rochie-cămașă din mătase, bej os",
    category: "Rochii",
    price: 590,
    size: "M / 40",
    colour: "Bej os",
    material: "100% mătase",
    condition: "Excelentă",
    period: "Anii '80",
    vintage: true,
    sold: false,
    favourite: false,
    addedDaysAgo: 8,
    tone: "butter",
    measurements: [
      { label: "Umăr la umăr", value: "40 cm" },
      { label: "Bust, pe plat", value: "50 cm" },
      { label: "Talie, pe plat, legată", value: "36 cm" },
      { label: "Lungime totală", value: "116 cm" },
    ],
    description:
      "Rochie-cămașă din mătase grea, bej os, cu cordon din același material și nasturi îmbrăcați până la tiv. Croită generos pe corp, ca să se bufeze ușor peste cordon, nu să tragă.",
    ileanaNote:
      "Leagă cordonul pe talia ta naturală, nu unde îți sugerează găicile. Rochia a fost desenată pentru asta și căderea se schimbă complet.",
    gallery: standardGallery,
  },
  {
    slug: "compleu-tweed",
    code: "IG-0356",
    brand: "Fără etichetă, croitorie franceză",
    name: "Compleu din tweed, sacou și fustă",
    category: "Selecție vintage",
    price: 680,
    size: "S / 38",
    colour: "Oliv cu fir de ovăz",
    material: "Tweed din lână pură, căptușeală de mătase",
    condition: "Foarte bună",
    period: "Anii '60",
    vintage: true,
    sold: false,
    favourite: false,
    addedDaysAgo: 20,
    tone: "olive",
    measurements: [
      { label: "Umăr sacou", value: "38 cm" },
      { label: "Bust sacou, pe plat", value: "46 cm" },
      { label: "Talie fustă, pe plat", value: "34 cm" },
      { label: "Lungime fustă", value: "62 cm" },
    ],
    description:
      "Compleu din două piese, în tweed cu fir contrastant, cu sacou fără guler și fustă dreaptă. Căptușeala e din mătase și a fost schimbată o dată, curat, manual — semn că cineva a considerat că merită păstrat.",
    ileanaNote:
      "Compleurile de felul acesta stau mai bine desperecheate. Sacoul cu blugi, fusta cu un tricotaj negru, și setul întreg doar când vrei să fii privită.",
    gallery: standardGallery,
  },
  {
    slug: "pelerina-lana-bleumarin",
    code: "IG-0334",
    brand: "Fără etichetă",
    name: "Pelerină din lână, bleumarin",
    category: "Paltoane",
    price: 430,
    size: "Mărime unică",
    colour: "Bleumarin",
    material: "Lână melton groasă",
    condition: "Bună, purtată cu grijă",
    period: "Anii '70",
    vintage: true,
    sold: true,
    favourite: false,
    addedDaysAgo: 22,
    tone: "charcoal",
    measurements: [
      { label: "Umăr la umăr", value: "42 cm" },
      { label: "Lungime totală", value: "88 cm" },
      { label: "Circumferință tiv", value: "196 cm" },
    ],
    description:
      "Melton greu, cu deschideri pentru brațe și guler mic drept. Materialul și-a pierdut puțin din densitate la tiv, din purtare — spus limpede; croiala și lâna sunt în continuare excelente.",
    ileanaNote:
      "O pelerină cere o siluetă îngustă dedesubt, altfel dispari în ea. Pantaloni strâmți și o cizmă cu puțin toc.",
    gallery: standardGallery,
  },
  {
    slug: "bluza-georgette-plisata",
    code: "IG-0396",
    brand: "Louis Féraud",
    name: "Bluză plisată din georgette",
    category: "Bluze și cămăși",
    price: 240,
    size: "M / 40",
    colour: "Crem unt",
    material: "100% georgette de mătase",
    condition: "Excelentă",
    period: "Anii '80",
    vintage: true,
    sold: false,
    favourite: false,
    addedDaysAgo: 10,
    tone: "butter",
    measurements: [
      { label: "Umăr la umăr", value: "40 cm" },
      { label: "Bust, pe plat", value: "52 cm" },
      { label: "Lungime mânecă", value: "56 cm" },
      { label: "Lungime totală", value: "62 cm" },
    ],
    description:
      "Plisuri fine pe cos, eliberate într-un corp amplu și strânse din nou la manșetă. Georgette-ul atât de fin cedează de obicei primul la cusături; aici sunt toate întregi.",
    ileanaNote:
      "Calc-o pe dos, la temperatură mică, sau deloc. Plisurile de vârsta asta nu iartă fierul de călcat.",
    gallery: standardGallery,
  },
  {
    slug: "curea-piele-catarama-aurie",
    code: "IG-0341",
    brand: "Fără etichetă, fabricată în Franța",
    name: "Curea din piele cu cataramă aurie",
    category: "Genți și accesorii",
    price: 130,
    size: "80 cm",
    colour: "Negru",
    material: "Piele de vițel, cataramă din alamă aurită",
    condition: "Foarte bună",
    period: "Anii '80",
    vintage: true,
    sold: false,
    favourite: false,
    addedDaysAgo: 13,
    tone: "warmgrey",
    measurements: [
      { label: "Lungime totală", value: "95 cm" },
      { label: "Lățime", value: "3 cm" },
      { label: "Se potrivește pe talie", value: "76 – 86 cm" },
    ],
    description:
      "Curea îngustă din piele de vițel neagră, cu cataramă dreptunghiulară aurită care s-a tocit până la un ton cald, vechi. Cinci găuri, niciuna lărgită.",
    ileanaNote:
      "O curea bună închide o ținută. Un auriu care s-a stins puțin e mult mai frumos decât unul care încă strălucește.",
    gallery: [
      "Cureaua întreagă",
      "Detaliu cataramă",
      "Textura pielii",
      "Găică și cusătură",
      "Verso",
      "Purtată în talie",
    ],
  },
  {
    slug: "compleu-pantalon-crep",
    code: "IG-0368",
    brand: "Mugler",
    name: "Compleu cu pantalon din crep de lână",
    category: "Selecție vintage",
    price: 940,
    size: "S / 38",
    colour: "Antracit",
    material: "100% crep de lână",
    condition: "Excelentă",
    period: "Sfârșitul anilor '80",
    vintage: true,
    sold: false,
    favourite: true,
    addedDaysAgo: 15,
    tone: "charcoal",
    measurements: [
      { label: "Umăr sacou", value: "40 cm" },
      { label: "Talie sacou, pe plat", value: "36 cm" },
      { label: "Talie pantalon, pe plat", value: "34 cm" },
      { label: "Lungime interioară picior", value: "80 cm" },
    ],
    description:
      "Un sacou strâns decis pe talie, peste un pantalon înalt și îngust. Umărul e construit, iar talia e cu adevărat suprimată — asta înseamnă croit, nu drapat, și foarte puțini mai fac așa ceva.",
    ileanaNote:
      "Cea mai arhitecturală piesă din selecție. Nu-i trebuie nimic dedesubt în afară de un maiou simplu și un pantof fără toc.",
    gallery: standardGallery,
  },
  {
    slug: "rochie-zi-matase-imprimata",
    code: "IG-0413",
    brand: "Cacharel",
    name: "Rochie de zi din mătase imprimată",
    category: "Rochii",
    price: 340,
    size: "L / 42",
    colour: "Oliv și crem",
    material: "100% mătase",
    condition: "Foarte bună",
    period: "Anii '70",
    vintage: true,
    sold: false,
    favourite: false,
    addedDaysAgo: 5,
    tone: "olive",
    measurements: [
      { label: "Umăr la umăr", value: "41 cm" },
      { label: "Bust, pe plat", value: "53 cm" },
      { label: "Talie, pe plat", value: "44 cm" },
      { label: "Lungime totală", value: "112 cm" },
    ],
    description:
      "O rochie de zi lejeră, din mătase imprimată, cu cos încrețit și cordon din același material, în gama de oliv și crem pe care Cacharel a folosit-o tot deceniul. Suficient de ușoară pentru vară, suficient de caldă la culoare pentru toamnă.",
    ileanaNote:
      "Genul de rochie pe care o ții cincisprezece ani fără să te gândești la ea. De obicei alea sunt cele care merită cumpărate.",
    gallery: standardGallery,
  },
];

/* ---------------------------------- ajutoare -------------------------------- */

export const categories: { name: Category; href: string; blurb: string; tone: Tone }[] = [
  {
    name: "Rochii",
    href: "/catalog?category=Rochii",
    blurb: "Rochii de zi, rochii-cămașă din mătase și piese de seară, croite din materiale adevărate.",
    tone: "burgundy",
  },
  {
    name: "Sacouri",
    href: "/catalog?category=Sacouri",
    blurb: "Croitorie cu o linie fermă a umărului, din case care încă își făceau sacourile manual.",
    tone: "olive",
  },
  {
    name: "Paltoane",
    href: "/catalog?category=Paltoane",
    blurb: "Gabardină, melton și lână camel. Piesele care hotărăsc cum arată o iarnă.",
    tone: "parchment",
  },
  {
    name: "Bluze și cămăși",
    href: "/catalog?category=Bluze+și+cămăși",
    blurb: "Crep de mătase, popelină de bumbac și cașmir, alese întâi după greutate, apoi după model.",
    tone: "butter",
  },
  {
    name: "Genți și accesorii",
    href: "/catalog?category=Genți+și+accesorii",
    blurb: "Piele, fetru și mătase. Lucruri mici care termină o ținută, nu care o împodobesc.",
    tone: "warmgrey",
  },
  {
    name: "Selecție vintage",
    href: "/catalog?category=Selecție+vintage",
    blurb: "Piese păstrate deoparte pentru perioada lor, pentru croială sau pur și simplu fiindcă sunt rare.",
    tone: "charcoal",
  },
];

export const allSizes = ["XS / 36", "S / 38", "M / 40", "L / 42", "Mărime unică"];
export const allBrands = Array.from(new Set(products.map((p) => p.brand))).sort();
export const allColours = Array.from(new Set(products.map((p) => p.colour))).sort();
export const allConditions: Condition[] = [
  "Ca nouă",
  "Excelentă",
  "Foarte bună",
  "Bună, purtată cu grijă",
];
export const allMaterials = ["Lână", "Mătase", "Cașmir", "Bumbac", "Piele", "Vâscoză"];

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
  return `${value.toLocaleString("ro-RO")} lei`;
}

/** Potrivire permisivă pe material, fiindcă o piesă poate fi un amestec. */
export function matchesMaterial(product: Product, material: string): boolean {
  return product.material.toLowerCase().includes(material.toLowerCase());
}
