const CURSED_ITEMS_DATA = [
    {
        name: { en: "Music Box", pl: "Pozytywka" },
        image: "https://static.wikia.nocookie.net/phasmophobia/images/5/5f/Music_box_display.jpg",
        icon: "🎶",
        description: {
            en: `
            <div class="cursed-details">
                <p><strong>Effect:</strong> Forces the ghost to sing, revealing its current position. Useful for locating the ghost and taking a ghost photo without a full manifestation.</p>
                <div class="stats-grid">
                    <div class="stat-box"><span class="label">Sanity Drain</span><span class="value">2.5% / sec (Total ~75%)</span></div>
                    <div class="stat-box"><span class="label">Detection</span><span class="value">20m Radius</span></div>
                </div>
                <p><strong>Mechanics:</strong> If the ghost is within 5m, it will fully manifest and walk towards the box. If it touches the box or the player holding it, a <strong>Cursed Hunt</strong> begins.</p>
                <p class="danger"><strong>Hunt Trigger:</strong><br>• Ghost touches the box or active player.<br>• Playing for >30 seconds.<br>• Throwing the box while it's playing (dropping is safe).<br>• Using at 0% sanity.</p>
            </div>`,
            pl: `
            <div class="cursed-details">
                <p><strong>Efekt:</strong> Zmusza ducha do śpiewania, ujawniając jego pozycję. Pozwala łatwo zlokalizować ducha i zrobić mu zdjęcie bez pełnego ataku.</p>
                <div class="stats-grid">
                    <div class="stat-box"><span class="label">Koszt Sanity</span><span class="value">2.5% / sek (Suma ~75%)</span></div>
                    <div class="stat-box"><span class="label">Wykrywanie</span><span class="value">Promień 20m</span></div>
                </div>
                <p><strong>Mechanika:</strong> Jeśli duch jest bliżej niż 5m, zmaterializuje się i zacznie iść w stronę pozytywki. Jeśli jej dotknie, odpala <strong>Przeklęte Polowanie</strong>.</p>
                <p class="danger"><strong>Wywołuje Polowanie:</strong><br>• Duch dotknie pozytywki lub gracza.<br>• Gra przez pełne 30 sekund.<br>• Rzucenie grającej pozytywki (położenie klawiszem 'F' jest bezpieczne).<br>• Użycie przy 0% sanity.</p>
            </div>`
        }
    },
    {
        name: { en: "Ouija Board", pl: "Tabliczka Ouija" },
        image: "https://static.wikia.nocookie.net/phasmophobia/images/2/2f/Ouija_Board_New.png",
        icon: "👻",
        description: {
            en: `
            <div class="cursed-details">
                <p><strong>Effect:</strong> Direct communication with the ghost. Ask about its location, bone position, age, or cause of death.</p>
                <div class="stats-grid">
                    <div class="stat-box"><span class="label">Sanity Cost</span><span class="value">5% - 50%</span></div>
                    <div class="stat-box"><span class="label">Response</span><span class="value">100% Guaranteed</span></div>
                </div>
                <p><strong>Usage:</strong> Right-click to activate, then use your microphone or UI to ask. You <strong>MUST</strong> say "Goodbye" to end the session, or it will break.</p>
                <p class="danger"><strong>Hunt Trigger:</strong><br>• Leaving without saying "Goodbye".<br>• Asking with insufficient sanity (Board shatters).<br>• Saying "Hide and Seek" (5s countdown to hunt).<br>• Playing "Knock Knock".</p>
            </div>`,
            pl: `
            <div class="cursed-details">
                <p><strong>Efekt:</strong> Bezpośrednia komunikacja. Pytaj o lokalizację, kość, wiek lub przyczynę śmierci.</p>
                <div class="stats-grid">
                    <div class="stat-box"><span class="label">Koszt Sanity</span><span class="value">5% - 50%</span></div>
                    <div class="stat-box"><span class="label">Odpowiedź</span><span class="value">100% Gwarantowana</span></div>
                </div>
                <p><strong>Użycie:</strong> Kliknij PPM by aktywować. Musisz <strong>ZAWSZE</strong> pożegnać się ("Goodbye"), inaczej tablica pęknie i wywoła atak.</p>
                <p class="danger"><strong>Wywołuje Polowanie:</strong><br>• Odejście bez "Goodbye".<br>• Brak wymaganego sanity (Tablica pęka).<br>• Powiedzenie "Hide and Seek" (5s na ucieczkę).<br>• Pytanie o "Knock Knock".</p>
            </div>`
        }
    },
    {
        name: { en: "Voodoo Doll", pl: "Laleczka Voodoo" },
        image: "https://static.wikia.nocookie.net/phasmophobia/images/e/e2/Voodoo_Doll_New.jpg",
        icon: "🧶",
        description: {
            en: `
            <div class="cursed-details">
                <p><strong>Effect:</strong> Forces various ghost interactions. Each use pushes one of 10 pins into the doll.</p>
                <div class="stats-grid">
                    <div class="stat-box"><span class="label">Sanity Drain</span><span class="value">5% / Pin</span></div>
                    <div class="stat-box"><span class="label">Total Pins</span><span class="value">10</span></div>
                </div>
                <p><strong>Mechanics:</strong> Standard pins cause interactions. The heart pin causes a full manifestation, but also an immediate <strong>Cursed Hunt</strong>.</p>
                <p class="danger"><strong>Hunt Trigger:</strong><br>• Pushing the heart (chest) pin.<br>• Using with <5% sanity (all pins push at once).<br>• Each pin has ~9% chance to be the heart.</p>
            </div>`,
            pl: `
            <div class="cursed-details">
                <p><strong>Efekt:</strong> Wymusza interakcje ducha. Każde użycie wbija jedną z 10 szpilek w lalkę.</p>
                <div class="stats-grid">
                    <div class="stat-box"><span class="label">Koszt Sanity</span><span class="value">5% / Szpilka</span></div>
                    <div class="stat-box"><span class="label">Ilość Szpilek</span><span class="value">10</span></div>
                </div>
                <p><strong>Mechanika:</strong> Zwykłe szpilki dają interakcje. Szpilka w sercu daje manifestację, ale natychmiast odpala <strong>Przeklęte Polowanie</strong>.</p>
                <p class="danger"><strong>Wywołuje Polowanie:</strong><br>• Szpilka w sercu (klatka piersiowa).<br>• Użycie mając <5% sanity (wszystkie szpilki wbijają się naraz).<br>• Każda szpilka ma ~9% szans na bycie "sercem".</p>
            </div>`
        }
    },
    {
        name: { en: "Haunted Mirror", pl: "Nawiedzone Lustro" },
        image: "https://static.wikia.nocookie.net/phasmophobia/images/7/7b/Cursed_Mirror.jpg",
        icon: "🪞",
        description: {
            en: `
            <div class="cursed-details">
                <p><strong>Effect:</strong> Peering into the mirror displays a real-time view of the ghost's current favorite room.</p>
                <div class="stats-grid">
                    <div class="stat-box"><span class="label">Usage Drain</span><span class="value">20% Minimum</span></div>
                    <div class="stat-box"><span class="label">Over-time Drain</span><span class="value">7.5% / sec</span></div>
                </div>
                <p><strong>Strategy:</strong> Quickly glance to identify the room and then stop. The sanity drain is extremely aggressive.</p>
                <p class="danger"><strong>Hunt Trigger:</strong><br>• Sanity reaches 0% while looking.<br>• Glass shatters and hunt begins from the ghost's location.</p>
            </div>`,
            pl: `
            <div class="cursed-details">
                <p><strong>Efekt:</strong> Patrzenie w lustro pokazuje obraz z ulubionego pokoju ducha w czasie rzeczywistym.</p>
                <div class="stats-grid">
                    <div class="stat-box"><span class="label">Koszt Startowy</span><span class="value">Minimum 20%</span></div>
                    <div class="stat-box"><span class="label">Utrata ciągła</span><span class="value">7.5% / sek</span></div>
                </div>
                <p><strong>Strategia:</strong> Rzuć szybkie spojrzenie, aby rozpoznać meble/ściany i od razu przestań. Sanity spada bardzo szybko.</p>
                <p class="danger"><strong>Wywołuje Polowanie:</strong><br>• Spadek sanity do 0% podczas sesji.<br>• Szkło pęka i zaczyna się atak z pokoju ducha.</p>
            </div>`
        }
    },
    {
        name: { en: "Tarot Cards", pl: "Karty Tarota" },
        image: "https://static.wikia.nocookie.net/phasmophobia/images/a/a7/Tarot_Cards.png",
        icon: "🃏",
        description: {
            en: `
            <div class="cursed-details">
                <p><strong>Effect:</strong> 10 random cards with unique effects. Drawing all 10 extends future hunts by 20 seconds. Cards burn in different colors.</p>
                <ul class="tarot-list">
                    <li><span class="t-red">The Hanged Man</span>: Instant Death (very rare)</li>
                    <li><span class="t-red">Death</span>: Cursed Hunt (60s)</li>
                    <li><span class="t-pink">The Devil</span>: Ghost Event</li>
                    <li><span class="t-green">The Sun</span>: +100% Sanity</li>
                    <li><span class="t-blue">The Moon</span>: -100% Sanity (0%)</li>
                    <li><span class="t-blue">The Tower</span>: Interaction + 2x Activity (20s)</li>
                    <li><span class="t-gold">The Hermit</span>: Traps Ghost (1 min)</li>
                    <li><span class="t-yellow">The High Priestess</span>: Revives Dead Player</li>
                    <li><span class="t-white">Wheel of Fortune</span>: ±25% Sanity (random)</li>
                    <li><span class="t-purple">The Fool</span>: No Effect (always during hunt)</li>
                </ul>
                <p class="info"><strong>Tip:</strong> Cards drawn during a hunt always become The Fool. Green burn = good, Red burn = bad.</p>
            </div>`,
            pl: `
            <div class="cursed-details">
                <p><strong>Efekt:</strong> 10 losowych kart z unikalnymi efektami. Wyciągnięcie wszystkich 10 wydłuża przyszłe polowania o 20 sekund. Karty płoną różnymi kolorami.</p>
                <ul class="tarot-list">
                    <li><span class="t-red">The Hanged Man</span>: Natychmiastowa Śmierć (bardzo rzadka)</li>
                    <li><span class="t-red">Death</span>: Przeklęte Polowanie (60s)</li>
                    <li><span class="t-pink">The Devil</span>: Ghost Event</li>
                    <li><span class="t-green">The Sun</span>: +100% Sanity</li>
                    <li><span class="t-blue">The Moon</span>: -100% Sanity (0%)</li>
                    <li><span class="t-blue">The Tower</span>: Interakcja + 2x Aktywność (20s)</li>
                    <li><span class="t-gold">The Hermit</span>: Więzi Ducha (1 min)</li>
                    <li><span class="t-yellow">The High Priestess</span>: Wskrzesza Martwego Gracza</li>
                    <li><span class="t-white">Wheel of Fortune</span>: ±25% Sanity (losowo)</li>
                    <li><span class="t-purple">The Fool</span>: Brak Efektu (zawsze podczas polowania)</li>
                </ul>
                <p class="info"><strong>Wskazówka:</strong> Karty ciągnięte podczas polowania zawsze stają się The Fool. Zielony płomień = dobre, Czerwony = złe.</p>
            </div>`

        }
    },
    {
        name: { en: "Summoning Circle", pl: "Krąg Przywołań" },
        image: "https://static.wikia.nocookie.net/phasmophobia/images/d/de/Sc_new1.jpg",
        icon: "🔯",
        description: {
            en: `
            <div class="cursed-details">
                <p><strong>Effect:</strong> Lights 5 candles to summon the ghost. It manifests inside for 5 seconds, paralyzed, then hunts.</p>
                <div class="stats-grid">
                    <div class="stat-box"><span class="label">Cost / Candle</span><span class="value">16% Sanity</span></div>
                    <div class="stat-box"><span class="label">Total Cost</span><span class="value">80% Total</span></div>
                </div>
                <p><strong>Usage:</strong> Lights candles using a lighter. Manifestation ends with a <strong>grace period of 0s</strong> for the hunt!</p>
                <p class="danger"><strong>Hunt Trigger:</strong><br>• Fully lighting the circle (after 5s).<br>• Insufficient sanity to light a candle (starts hunt instantly).</p>
            </div>`,
            pl: `
            <div class="cursed-details">
                <p><strong>Efekt:</strong> Zapal 5 świec, by przywołać ducha. Pojawi się w środku na 5s (zamrożony), po czym zaatakuje.</p>
                <div class="stats-grid">
                    <div class="stat-box"><span class="label">Koszt / Świeca</span><span class="value">16% Sanity</span></div>
                    <div class="stat-box"><span class="label">Koszt Suma</span><span class="value">80% Suma</span></div>
                </div>
                <p><strong>Użycie:</strong> Zapal świece zapalniczką. Po manifestacji atak zaczyna się z <strong>0s czasem przygotowania</strong>!</p>
                <p class="danger"><strong>Wywołuje Polowanie:</strong><br>• Pełne zapalenie kręgu (po 5s).<br>• Zbyt niskie sanity, by zapalić świecę (natychmiastowy atak).</p>
            </div>`

        }
    },
    {
        name: { en: "Monkey Paw", pl: "Małpia Łapka" },
        image: "https://static.wikia.nocookie.net/phasmophobia/images/c/cc/Monkey_Paw.png",
        icon: "🐒",
        description: {
            en: `
            <div class="cursed-details">
                <p><strong>Effect:</strong> Powerful wishes that manipulate the ghost, sanity, or world, but with dark side effects.</p>
                <div class="stats-grid">
                    <div class="stat-box"><span class="label">Wishes Limit</span><span class="value">3 - 5 (By Multiplier)</span></div>
                </div>
                <p><strong>Key Wishes:</strong><br>• <strong>'I wish for knowledge'</strong>: Removes evidences but blinds/deafens you.<br>• <strong>'I wish for sanity'</strong>: Sets group Sanity to 50% but drains faster.<br>• <strong>'I wish to see ghost'</strong>: Spawns event, then kills your vision.</p>
                <p class="danger"><strong>Penalty:</strong> Every wish has a permanent negative effect for that game (reduced vision, permanent hunt range increase, etc).</p>
            </div>`,
            pl: `
            <div class="cursed-details">
                <p><strong>Efekt:</strong> Potężne życzenia manipulujące duchem, sanity lub światem, ale z mrocznymi karami.</p>
                <div class="stats-grid">
                    <div class="stat-box"><span class="label">Limit Życzeń</span><span class="value">3 - 5 (Zależnie od mnożnika)</span></div>
                </div>
                <p><strong>Główne Życzenia:</strong><br>• <strong>'Chcę wiedzy'</strong>: Usuwa dowody, ale oślepia/ogłusza Cię.<br>• <strong>'Chcę sanity'</strong>: Daje 50%, ale przyspiesza utratę.<br>• <strong>'Chcę zobaczyć ducha'</strong>: Event, po czym oślepisz.</p>
                <p class="danger"><strong>Kary:</strong> Każde życzenie ma stały negatywny efekt (gorsza wizja, dłuższy atak, brak światła itp).</p>
            </div>`
        }
    }
];

function initCursedItems() {
    const container = document.querySelector('.cursed-list');
    if (!container) return;

    container.innerHTML = '';
    const t = TRANSLATIONS[currentLang];

    CURSED_ITEMS_DATA.forEach(item => {
        const card = document.createElement('div');
        card.className = 'cursed-item';

        const name = item.name[currentLang] || item.name.en;
        const desc = item.description[currentLang] || item.description.en;

        card.innerHTML = `
            <div class="cursed-header">
                <div class="cursed-icon-wrapper">
                    <div class="cursed-emoji">${item.icon}</div>
                    <img src="${item.image}" alt="${name}" class="cursed-img" loading="lazy">
                </div>
                <div class="cursed-info">
                    <h2>${name}</h2>
                </div>
                <span class="arrow">▼</span>
            </div>
            
            <div class="cursed-content">
                ${desc}
            </div>
        `;

        const header = card.querySelector('.cursed-header');
        header.addEventListener('click', () => {
            const isOpen = card.classList.toggle('open');
            // We could also add a 'Read More' button inside, but existing CSS uses .open on .cursed-item
        });

        const img = card.querySelector('.cursed-img');
        const emoji = card.querySelector('.cursed-emoji');

        img.onload = () => {
            img.style.opacity = '1';
            if (emoji) emoji.style.opacity = '0';
        };
        img.onerror = () => {
            img.style.display = 'none';
            if (emoji) emoji.style.opacity = '1';
        };

        container.appendChild(card);
    });
}
