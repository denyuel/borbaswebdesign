# Borbás Webdesign - Projekt Specifikáció & Design Rendszer

Ez a dokumentum a Borbás Webdesign (https://www.borbaswebdesign.hu) hivatalos specifikációja, amely tartalmazza a weboldal felépítését, az alkalmazott design rendszert, a kalkulátor matematikai árazási képletét, valamint a vállalkozás üzleti irányelveit.

---

## 1. Arculati & Design Rendszer (Design Tokens)

A weboldal a **Nordic Light** stílusvilágot követi: tiszta, skandináv világos háttér, elegáns erdőzöld (teal) és égkék (sky blue) színekkel, prémium magazin-szerű tipográfiával.

### 1.1. Színpaletta (CSS Változók)
*   **Fő Háttér (`--bg-dark`):** `#f5f6f8` (Lágy világosszürke / off-white)
*   **Szekció Háttér (`--bg-slate`):** `#ffffff` (Tiszta fehér kártyák és navigáció)
*   **Elsődleges Szín (`--color-primary`):** `#0f766e` (Mély erdőzöld / Forest Teal)
*   **Másodlagos Szín (`--color-secondary`):** `#0ea5e9` (Égkék / Sky Blue)
*   **Hangsúlyos Szín (`--color-accent`):** `#f43f5e` (Rózsavörös eseti kiemelésekhez)
*   **Szöveg Színek:**
    *   Főcímek: `#0f172a` (Sötét pala)
    *   Törzsszöveg: `#334155` (Közép pala)
    *   Muted szöveg: `#475569` / `#94a3b8` (Világosabb pala)

### 1.2. Tipográfia (Betűtípusok)
*   **Főcímek & Fejlécek (`--font-heading`):** `'Playfair Display', serif` (Elegáns talpas betűtípus)
*   **Törzsszöveg & Felületek (`--font-body`):** `'Plus Jakarta Sans', sans-serif` (Modern, jól olvasható talpatlan betűtípus)
*   **Logó Kézírásos Rész (`.logo-script`):** `'Alex Brush', cursive` (Elegáns, vékony ecsetvonásos kalligráfia)

### 1.3. Strukturális Értékek
*   **Maximális szélesség (`--container-max`):** `1200px` (24px oldalsó margóval)
*   **Szekcióközök (`.section-padding`):**
    *   Asztali gépen: `70px 0` (Kompakt, feszes elrendezés)
    *   Mobilon: `50px 0`
*   **Lekerekítések (Borders):**
    *   Kártyák / Mezők: `16px` (`--radius-md`)
    *   Gombok: `9999px` (`--radius-full`)
    *   Nagy konténerek: `32px` (`--radius-xl`)

---

## 2. Árkalkulátor Képlet & Árszabás

A kalkulátor három szinten határozza meg az árat: **Csomag alapár + Kiválasztott kiegészítők + Találkozó helyszíne**. 

$$\text{Végösszeg} = \text{Csomag Alapár} + \sum(\text{Kiegészítő Funkciók}) + \text{Találkozási Díj}$$

### 2.1. Lépés: Weboldal Típusa (Alapár)
1.  **Landing Page:** `150 000 Ft` (Egyoldalas felépítés, beépített online időpontfoglalóval)
2.  **Bemutató Oldal:** `250 000 Ft` (Több aloldalas struktúra, 5-7 aloldal, képgaléria)
3.  **Webáruház (Webshop):** `450 000 Ft` (Termékkatalógus, Stripe/Barion fizetés, automata számlázás)

### 2.2. Lépés: Kiegészítő Funkciók (Checkboxes)
*   **Google Értékelések Beépítése (`reviews`):** `+20 000 Ft`
*   **Azonnali Ügyfélchat (`chat`):** `+15 000 Ft` (Lebegő Messenger & WhatsApp gomb)
*   **Google Helyezésjavítás (`seo`):** `+35 000 Ft` (Helyi SEO optimalizálás)
*   **Saját Szerkesztőfelület (`admin`):** `+70 000 Ft` (Egyszerű admin felület szövegekhez, árakhoz)
*   **3 hónap VIP támogatás (`support`):** `+25 000 Ft` (3 hónapig díjmentes apróbb javítások)

### 2.3. Lépés: Konzultáció / Találkozó (Radio buttons)
*   **Online konzultáció (`online`):** `+0 Ft` (Ingyenes – Google Meet / telefon)
*   **Személyes Szeged (`szeged`):** `+15 000 Ft` (Fedezi az útidőt és az üzemanyagot)
*   **Személyes Budapest (`budapest`):** `+50 000 Ft` (Fedezi az 5 órás utazást és a napkiesést)

---

## 3. Weboldal Felépítés (Szerkezeti felosztás)

A honlap egy egyoldalas (Single Page) struktúrára épül, amely horgonyokkal (`anchors`) vezeti a látogatót:

1.  **Header (Navigáció):** Logó (Borbás Webdesign - tiszta, minimalista aláírás logó aláhúzás swoosh-sal, ikon nélkül), menüpontok, és egy kiemelt Kapcsolat gomb. Mobilon hamburgermenüvé alakul.
2.  **Hero (Nyitó szekció):** Főcím kiemeléssel, meggyőző leírás, CTA gombok (kalkulátorhoz és kapcsolatfelvételhez), mellette a prémium multi-device (szalon-fókuszú) mockup kép.
3.  **Szolgáltatások (Services):** 3 db prémium kártya (Webdesign, Programozás, Foglalási rendszer) tetejükön fekvő formátumú, esztétikus eszköz-mockup képekkel.
4.  **Rólam (About):** Személyes bemutatkozás Dánielről, a jobb oldalon a generált téli stílusú, szürke zakós, hófehér inges profi portréval. Alatta a 3 fő ígéret (48 órás átadás, fix árak, support).
5.  **Kalkulátor (Configurator):** Lépésről-lépésre működő, harmonikaszerű (accordion) árazó panel. A jobb oldalon a kompakt, rögzített árazó kártya, alatta a közvetlen kapcsolatot nyitó CTA gombbal.
6.  **GYIK (FAQ):** 8 db lenyitható harmonika kérdés-felelet (beleértve a havidíj-mentességet, az 50% előleget, az eseti support díjat és az egyedi fejlesztési igényeket példákkal).
7.  **Footer (Lábléc):** Oldaltérkép linkekkel, adatvédelmi tájékoztató linkkel, logóval és szerzői jogi nyilatkozattal.

---

## 4. Üzleti & Együttműködési Feltételek

Ezeket az alapelveket a honlap szövegezése, a kalkulátor és a GYIK szigorúan követi és közvetíti az ügyfelek felé:

*   **Fizetési ütemezés (50-50 szabály):** A munka megkezdése előtt 50% előleg fizetése kötelező (ez rögzíti a fejlesztési időpontot). A fennmaradó 50% csak a teljes átadáskor esedékes.
*   **Expressz 48 órás szállítás feltétele:** A 2 napos határidő kizárólag onnantól ketyeg, hogy az ügyfél **minden szükséges anyagot** (kész szövegek, képek, logó, design elképzelések, tárhely-hozzáférés) hiánytalanul átadott.
*   **Átadás utáni eseti támogatás:** Nem kötelező a havidíj. Ha az ügyfél nem kéri az admin felületet vagy a VIP supportot, a későbbi eseti módosításokat **15 000 Ft / óra** díjon végezzük el.
