# -*- coding: utf-8 -*-

file_path = r"c:\Users\Daniel\Projects\websites\website_készítés\index.html"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# --- 1. REPLACE SERVICES SECTION ---
services_start = "<!-- SERVICES SECTION -->"
services_end = "<!-- PORTFOLIO SECTION -->"

start_idx = content.find(services_start)
end_idx = content.find(services_end)

if start_idx == -1 or end_idx == -1:
    print(f"Error: Services section markers not found! Start: {start_idx}, End: {end_idx}")
    exit(1)

new_services_html = """<!-- SERVICES SECTION -->
        <section class="section-padding" id="szolgaltatasok">
            <div class="container">
                <div class="section-title-wrap">
                    <span class="badge">Szolgáltatások</span>
                    <h2 class="section-title">Mit kínál a <span>Borbás Webdesign</span>?</h2>
                    <p>Minden weboldal teljesen egyedi kóddal, a legújabb technológiákkal és reszponzív elrendezéssel készül.</p>
                </div>
                
                <div class="services-grid">
                    <!-- Service Card 1 -->
                    <div class="glass-card service-card">
                        <div class="service-card-image-wrap">
                            <img src="service-design.png?v=5" alt="Egyedi Webdesign" class="service-card-img">
                        </div>
                        <div class="service-card-content">
                            <div class="card-icon">
                                <!-- SVG Code for Pen/Ruler -->
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#neon-grad)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
                            </div>
                            <h3>Egyedi Webdesign</h3>
                            <p>Nincsenek unalmas sablonok. Minden elrendezés a márkád stílusára szabottan, prémium grafikával és vizuális elemekkel készül.</p>
                        </div>
                    </div>

                    <!-- Service Card 2 -->
                    <div class="glass-card service-card">
                        <div class="service-card-image-wrap">
                            <img src="service-coding.png?v=5" alt="Profi Programozás" class="service-card-img">
                        </div>
                        <div class="service-card-content">
                            <div class="card-icon">
                                <!-- SVG Code for Code -->
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#neon-grad)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                            </div>
                            <h3>Profi Programozás</h3>
                            <p>Egyedileg megírt kód sablonok nélkül. Gyors betöltődés, biztonságos működés és tökéletes megjelenés minden mobiltelefonon.</p>
                        </div>
                    </div>

                    <!-- Service Card 3 -->
                    <div class="glass-card service-card">
                        <div class="service-card-image-wrap">
                            <img src="service-seo.png?v=5" alt="Google Keresőbarát Kód" class="service-card-img">
                        </div>
                        <div class="service-card-content">
                            <div class="card-icon">
                                <!-- SVG Code for Search/Trend -->
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#neon-grad)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/><path d="M8 11h6"/></svg>
                            </div>
                            <h3>Google Keresőbarát Kód</h3>
                            <p>Úgy alakítom ki a weboldalad, hogy a Google kereső könnyen megtalálja (SEO), és a jövőbeli vendégeid azonnal elérjenek téged.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        """

content = content[:start_idx] + new_services_html + content[end_idx:]

# --- 2. REPLACE ABOUT SECTION ---
about_start = "<!-- ABOUT SECTION (RÓLAM) -->"
about_end = "<!-- CALCULATOR SECTION -->"

start_idx = content.find(about_start)
end_idx = content.find(about_end)

if start_idx == -1 or end_idx == -1:
    print(f"Error: About section markers not found! Start: {start_idx}, End: {end_idx}")
    exit(1)

new_about_html = """<!-- ABOUT SECTION (RÓLAM) -->
        <section class="section-padding" id="rolam">
            <div class="container rolam-container">
                <div class="rolam-image-wrap">
                    <img src="rolam-workspace.png?v=5" alt="Borbás Webdesign Workspace" class="rolam-img">
                </div>
                <div class="rolam-content">
                    <h2 class="section-title">Személyes figyelem, <span>sablonok nélkül</span></h2>
                    <p class="rolam-lead">Borbás Dániel vagyok, egyéni webfejlesztő. Azért hoztam létre a Borbás Webdesignt, mert látom, hogy a legtöbb kisvállalkozás tart a túlbonyolított szakszavaktól és a lassú ügynökségektől.</p>
                    <p>Én nem tömegsablonokkal dolgozom. Minden honlapot kézzel programozok le, így az pontosan olyan gyors, biztonságos és egyedi lesz, mint amilyen a szalonod vagy a szolgáltatásod.</p>
                    <p><strong>Nem hagylak magadra:</strong> az átadás után is elérsz telefonon, ha árakat szeretnél frissíteni, vagy új képeket töltenél fel a galériádba.</p>
                    
                    <div class="guarantees-list">
                        <div class="guarantee-item">
                            <span class="guarantee-icon">⚡</span>
                            <div>
                                <h4>48 órás expressz átadás</h4>
                                <p>Ha megvannak a szükséges szövegek és képek, 2 napon belül éles az oldalad.</p>
                            </div>
                        </div>
                        <div class="guarantee-item">
                            <span class="guarantee-icon">🛡️</span>
                            <div>
                                <h4>Fix, rejtett költségek nélkül</h4>
                                <p>Nincsenek meglepetések, csak a kalkulált fix árat fizeted.</p>
                            </div>
                        </div>
                        <div class="guarantee-item">
                            <span class="guarantee-icon">📞</span>
                            <div>
                                <h4>Folyamatos támogatás</h4>
                                <p>Az átadás után is bármikor elérhetsz, ha segítség kell.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        """

content = content[:start_idx] + new_about_html + content[end_idx:]

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("HTML file successfully modified with all section images using UTF-8!")
