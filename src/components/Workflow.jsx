import React from 'react';

export default function Workflow() {
    return (
        <section className="section-padding" id="folyamat">
            <div className="container">
                <div className="section-title-wrap">
                    <span className="badge">Munkafolyamat</span>
                    <h2 className="section-title">Hogyan készül a <span>weboldalad</span>?</h2>
                    <p>Lépésről lépésre kísérem végig a projektedet az első konzultációtól a sikeres élesítésig.</p>
                </div>
                
                <div className="workflow-timeline">
                    {/* Step 1 */}
                    <div className="timeline-item">
                        <div className="timeline-badge">1</div>
                        <div className="timeline-content">
                            <span className="step-no">01. lépés</span>
                            <h3>Közös Tervezés & Kezdés</h3>
                            <p>Átbeszéljük az üzleti céljaidat, és veled együtt, lépésről lépésre kezdjük el felépíteni a honlapot, hogy pontosan olyan legyen, amilyennek elképzelted.</p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="timeline-item">
                        <div className="timeline-badge">2</div>
                        <div className="timeline-content">
                            <span className="step-no">02. lépés</span>
                            <h3>Kódolás & Animációk</h3>
                            <p>Elkészítem az oldal egyedi szerkezetét és megjelenését. Beépítem a látványos interakciókat és a modern, elegáns dizájn elemeket.</p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="timeline-item">
                        <div className="timeline-badge">3</div>
                        <div className="timeline-content">
                            <span className="step-no">03. lépés</span>
                            <h3>Sebesség & Google Optimalizálás</h3>
                            <p>A honlapot tesztelem és felkészítem, hogy mobiltelefonon is azonnal betöltsön. Beállítom a Google keresőhöz szükséges alapvető leírásokat.</p>
                        </div>
                    </div>

                    {/* Step 4 */}
                    <div className="timeline-item">
                        <div className="timeline-badge">4</div>
                        <div className="timeline-content">
                            <span className="step-no">04. lépés</span>
                            <h3>Átadás & Támogatás</h3>
                            <p>Segítek a domain és a tárhely beállításokban, majd átadok neked minden hozzáférést. Nem hagylak magadra: ha igényed van rá, a jövőben is segítek a karbantartásban.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
