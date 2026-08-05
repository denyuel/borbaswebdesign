# Facebook Cover Mockup Generálási Útmutató és Prompt Referencia

Ez a dokumentum összefoglalja, hogyan sikerült sikeresen legenerálni a **Borbás Webdesign** hivatalos Facebook borítóképét, hogy ez a munkafolyamat és prompt-struktúra referenciaként szolgálhasson bármely jövőbeli projektben.

---

## 1. Főbb Tanulságok (Mi az, ami működik?)

### 1.1. Igazodás a Weboldal Vizuális Hangulatához (Light/Dark Mode)
Az első próbálkozások során elkövetett hiba az volt, hogy sötét, neonfényes hátteret generáltunk. Egy világos, minimalista arculatú weboldalhoz **mindig világos (light-mode), természetes fénnyel megvilágított** környezetet kell kérni.
*   **Kulcsszavak a fényekhez**: `bright, sunlit, soft natural sunlight streaming in, light-themed`.
*   **Kulcsszavak az asztalhoz**: `light natural oak wood` (világos natúr tölgyfa – illeszkedve a honlapon lévő mockup asztalához).
*   **Színpaletta**: `light grey, white, warm beige, and teal accent colors`.

### 1.2. Felesleges perifériák és duplikációk elkerülése
Ha a képen van egy laptop, az AI hajlamos mellé egy plusz billentyűzetet is tenni az asztalra, ami zavaró és felesleges. Ezt **explicit tiltással** kell kezelni a promptban.
*   **Tiltó kifejezés**: `NO external keyboard on the desk to avoid duplication with the laptop`.

### 1.3. Különböző tartalom a kijelzőkön (Non-Duplicated Content)
Többmonitoros felállásnál az AI hajlamos ugyanazt a képernyőt vagy kódot megismételni minden kijelzőn. Pontosan le kell írni, melyik monitor mit jelenít meg.
*   **Laptop képernyő**: A fő bemutatott weboldal képernyőképe.
*   **Bal monitor**: `displays the Figma design application interface with its dark grey UI panels, layers, and canvas` (konkrétan a Figma tervezőprogram felülete).
*   **Jobb monitor**: `displays a finished responsive website in a web browser with rich graphics`.

### 1.4. Kép-referencia (Image-to-Image) használata
Az AI modellek nem tudnak szöveget vagy egyedi logókat pixelpontosan legenerálni. Ha azt akarjuk, hogy a laptop képernyőjén a valódi weboldalunk és annak színei/logója jelenjen meg, **be kell adni a honlap képét referenciaként** (`ImagePaths` paraméterként). Ez drasztikusan javítja az illeszkedést és a hitelességet.

### 1.5. Konkrét hardvermodellek megnevezése
Általános „laptop” helyett érdemes pontos típust megadni, így az AI nem egy sablonos vékony gépet generál, hanem a kívánt formavilágot.
*   **Kifejezés**: `robust black Lenovo IdeaPad Gaming 3 laptop with angular edges and a blue backlit keyboard`.

---

## 2. A Végleges, Sikeres Prompt

```text
A premium, high-resolution desktop wallpaper for a web design studio, wide 16:9 aspect ratio. 
A bright, sunlit, minimalist light-themed workspace setup. 
In the center is a robust black Lenovo IdeaPad Gaming 3 laptop. The laptop screen displays a bright web design preview with the text "Borbás Webdesign". 
The laptop is flanked by two large monitors: the left monitor displays the Figma design application interface with its dark grey UI panels, layers, and canvas; the right monitor shows a clean website preview. 
The desk is made of light natural oak wood. 
There is NO external keyboard on the desk, only the laptop, an ergonomic mouse, a white ceramic mug featuring a black "Borbás Webdesign" logo, and a small elegant ceramic vase with light beige dried pampas grass. 
The background is a clean, bright, minimalist modern room with soft natural sunlight. 
Warm beige and teal accents on screens.
```

---

## 3. Workflow Sablon Új Projekt Indításához

Ha egy új projektben hasonló mockupot szeretnél generálni:
1.  **Készíts screenshotot** a készülő weboldalról (Hero szekcióról).
2.  **Határozd meg a színhangulatot**: Világos/minimalista (oak, beige, natural light) vagy sötét/fejlesztői (dark wood, LED, neon).
3.  **Tömd be a screenshotot** a generátor bemeneti képként (referenciaként).
4.  **Alkalmazd a fenti prompt-szerkezetet**, átírva a laptop típusát, a kijelzők szoftvereit (pl. Figma, VS Code, vagy Adobe Illustrator), és a bögrén lévő logó/szöveg nevét.
