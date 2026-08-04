import React, { useState } from 'react';

const faqItems = [
    {
        q: "Kell havidíjat fizetnem a weboldal után?",
        a: "Nem, nálam nincs semmilyen kötelező havidíj. A weboldal 100%-ban a te tulajdonod lesz. Az egyetlen fix fenntartási költséged a tárhely és a domain éves díja, amit közvetlenül a tárhelyszolgáltatónak fizetsz."
    },
    {
        q: "Mennyi idő alatt készül el a honlapom?",
        a: "Maximum 2 nap alatt! A 48 órás határidő onnantól ketyeg, hogy átadtál nekem minden szükséges alapanyagot: a végleges szövegeket, képeket, a logódat, a dizájn elképzeléseidet/színpreferenciáidat és a tárhely/domain hozzáféréseket. Ha ezek megvannak, nincs hetekig tartó huzavona, 2 nap múlva éles a weboldalad!"
    },
    {
        q: "Segítesz a domain és a tárhely intézésében?",
        a: "Természetesen! Végigvezetlek a folyamaton, segítek kiválasztani a megfelelő tárhelyet, és a technikai beállításokat (domain összekötés, biztonsági SSL tanúsítvány és névszerverek beállítása) teljesen átvállalom helyetted."
    },
    {
        q: "Mi történik az átadás után? Tudom majd magam is szerkeszteni az árakat?",
        a: "Igen! Ha kéred a Saját Szerkesztőfelület opciót, kapsz egy egyszerű admin felületet, ahol programozói tudás nélkül, pár kattintással átírhatod az áraidat, a nyitvatartást, szerkeszthetsz szövegeket és feltölthetsz új képeket. Ha pedig nem akarsz ezzel bajlódni, az átadás után is bármikor elvégzem a módosításokat helyetted 15\u00A0000 Ft/órás díjon."
    },
    {
        q: "Mit tartalmaz a 3 hónapos VIP támogatás?",
        a: "A 3 hónapos VIP támogatás keretében az átadás után 3 hónapig teljesen díjmentesen elvégzem helyetted a kisebb szöveg- és képfrissítéseket, ármódosításokat vagy a nyitvatartás frissítését. Ez kiváló választás, ha nem akarsz magad bajlódni a tartalom frissítésével, vagy nincs időd rá. Egyébként az eseti módosításokat 15\u00A0000 Ft/órás díjon végzem."
    },
    {
        q: "Mobiltelefonon és táblagépen is jól fog kinézni a weboldal?",
        a: "Igen, minden általam készített weboldal 100% reszponzív, azaz tökéletesen és gyönyörűen igazodik a mobiltelefonok, tabletek és laptopok kijelzőjéhez is, így a vendégeid bárhonnan könnyen elérnek."
    },
    {
        q: "Hogyan történik a fizetés? Kérsz előleget?",
        a: "Igen. A munka megkezdése előtt 50% előleg fizetése szükséges (ez garantálja mindkét fél elköteleződését és biztosítja a fejlesztési időpontodat). A fennmaradó 50%-ot pedig csak a teljesen kész, tesztelt weboldal átadásakor kell kifizetned."
    },
    {
        q: "Van lehetőség személyes találkozóra és egyeztetésre?",
        a: "Természetesen! Az alapértelmezett online egyeztetés (Google Meet, telefon) teljesen ingyenes. Ha azonban személyes találkozót szeretnél, arra is van lehetőség: Szegeden +15\u00A0000 Ft kiszállási díjon (fedezi az útidőt és az üzemanyagot), Budapesten pedig +50\u00A0000 Ft díjon (fedezi a 5 órás oda-vissza utat és költségeket)."
    },
    {
        q: "Egyedi igényem vagy extra funkcióm lenne. Meg tudod valósítani?",
        a: (
            <>
                <p>Igen, a lehetőségek tárháza szinte végtelen! Bármilyen egyedi elképzelést meg tudok valósítani. Íme néhány példa a leggyakoribb egyedi kérésekre:</p>
                <ul style={{ margin: '12px 0 12px 20px', listStyle: 'disc', color: 'var(--text-gray-light)', lineHeight: '1.6' }}>
                    <li><strong>Marketing:</strong> Hírlevél-feliratkozás és automatikus kuponküldő rendszer (pl. MailerLite, Mailchimp).</li>
                    <li><strong>Közösségi média:</strong> Élő Instagram képfolyam automatikus beépítése a honlapba.</li>
                    <li><strong>Csapatoknak:</strong> Több munkatárs naptárának szinkronizálása az online időpontfoglalóban.</li>
                    <li><strong>SEO &amp; Blog:</strong> Keresőoptimalizált blog szekció a szakmai cikkeidnek, ami új vendégeket hoz.</li>
                    <li><strong>Statisztika:</strong> Google Analytics mérés beállítása, hogy lásd, honnan érkeznek a látogatóid.</li>
                    <li><strong>Arculat:</strong> Logó- és komplett arculattervezés a weboldal mellé.</li>
                </ul>
                <p>Ha ilyen vagy bármilyen más egyedi elképzelésed van, írd meg nekem az ajánlatkérő üzenetében, és küldök rá egy egyedi árat!</p>
            </>
        )
    }
];

export default function Faq() {
    const [openIndices, setOpenIndices] = useState([]);

    const toggleFaq = (idx) => {
        setOpenIndices(prev => 
            prev.includes(idx) 
                ? prev.filter(i => i !== idx) 
                : [...prev, idx]
        );
    };

    return (
        <section className="section-padding" id="gyik">
            <div className="container">
                <div className="section-title-wrap text-center">
                    <span className="badge">Kérdések &amp; Válaszok</span>
                    <h2 className="section-title">Gyakran Ismételt <span>Kérdések</span></h2>
                    <p>Minden fontos részlet, amit a közös munka megkezdése előtt érdemes tudnod.</p>
                </div>
                
                <div className="faq-accordion-wrap">
                    {faqItems.map((item, idx) => {
                        const isOpen = openIndices.includes(idx);
                        return (
                            <div className={`faq-item ${isOpen ? 'active' : ''}`} key={idx}>
                                <button className="faq-trigger" onClick={() => toggleFaq(idx)}>
                                    <span>{item.q}</span>
                                    <span className="faq-icon">{isOpen ? '−' : '+'}</span>
                                </button>
                                <div className="faq-content">
                                    {typeof item.a === 'string' ? <p>{item.a}</p> : item.a}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
