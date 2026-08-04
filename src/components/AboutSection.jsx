import React from 'react';

export default function AboutSection() {
    return (
        <section className="section-padding" id="rolam">
            <div className="container rolam-container">
                <div className="rolam-content">
                    <span className="badge">Rólam</span>
                    <h2 className="section-title">Személyes figyelem, <span>sablonok nélkül</span></h2>
                    <p className="rolam-lead">Borbás Dániel vagyok. Azért indítottam el a Borbás Webdesignt, hogy a kisvállalkozásoknak egyedi, villámgyors és azonnal működő honlapokat adjak a kezébe – közvetlen, egyenes kommunikációval és személyes figyelemmel.</p>
                    <p>Minden honlapot kézzel programozok, így az pontosan olyan gyors, biztonságos és egyedi lesz, mint amilyen a szalonod vagy a szolgáltatásod.</p>
                    
                    <div className="support-highlight-box">
                        <div className="support-highlight-icon">✨</div>
                        <div className="support-highlight-text">
                            <strong>Átadás után sem engedem el a kezed:</strong> Nem tűnök el a közös munka végeztével. Bármikor közvetlenül elérsz telefonon vagy e-mailben, ha frissíteni szeretnéd az áraidat, új képeket töltenél fel, vagy bővítenéd a honlapod.
                        </div>
                    </div>
                    
                    <div className="guarantees-list">
                        <div className="guarantee-item">
                            <span className="guarantee-icon"></span>
                            <div>
                                <h4>48 órás expressz átadás</h4>
                                <p>Amint átadod a végleges szövegeket, képeket, a logódat és a dizájn elképzeléseidet, 2 napon (48 órán) belül élesítem a weboldalad.</p>
                            </div>
                        </div>
                        <div className="guarantee-item">
                            <span className="guarantee-icon"></span>
                            <div>
                                <h4>Fix, rejtett költségek nélkül</h4>
                                <p>Nincsenek meglepetések, csak a kalkulált fix árat fizeted.</p>
                            </div>
                        </div>
                        <div className="guarantee-item">
                            <span className="guarantee-icon"></span>
                            <div>
                                <h4>Folyamatos támogatás</h4>
                                <p>Az átadás után is bármikor elérhetsz, ha segítség kell.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rolam-image-wrap">
                    <img src="/daniel-portrait.jpg?v=79" alt="Borbás Dániel - Borbás Webdesign" className="rolam-img" />
                </div>
            </div>
        </section>
    );
}
