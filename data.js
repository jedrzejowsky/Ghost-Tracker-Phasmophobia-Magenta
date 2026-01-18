const EVIDENCES = [
    "EMF 5",
    "Spirit Box",
    "Fingerprints",
    "Ghost Orb",
    "Ghost Writing",
    "Freezing Temperatures",
    "D.O.T.S Projector"
];

const GHOSTS = [
    {
        name: "Banshee",
        evidences: ["D.O.T.S Projector", "Ghost Orb", "Fingerprints"],
        guaranteed: null,
        huntSanity: { en: "50% (Target)", pl: "50% (Celu)" },
        speed: { en: "1.7 m/s", pl: "1.7 m/s" },
        shortDesc: {
            en: "Targets ONE player. Wails on Parabolic Mic.",
            pl: "Poluje na JEDNEGO gracza. Krzyczy na mikrofonie parabolicznym."
        },
        longDesc: {
            en: `<ul><li><strong>Targeting:</strong> Chooses one player (the 'Obsession'). Ignores others during hunts unless the target is outside.</li><li><strong>Hunt Threshold:</strong> Checks the <strong>Target's Sanity</strong> only (>50%). Team average irrelevant.</li><li><strong>Ability:</strong> Frequently roams directly to the target's location.</li><li><strong>Unique:</strong> Has a 33% chance to produce a unique screaming sound on the Parabolic Microphone.</li><li><strong>Name:</strong> Cannot have a <strong>male name</strong> (Must be female).</li></ul>`,
            pl: `<ul><li><strong>Obsesja:</strong> Wybiera jednego gracza. Ignoruje innych podczas polowania (chyba że cel jest poza domem).</li><li><strong>Polowanie:</strong> Liczy się tylko Sanity CELU (50%). Średnia drużyny nie ma znaczenia.</li><li><strong>Zdolność:</strong> Często wędruje bezpośrednio do pozycji swojego celu.</li><li><strong>Unikalne:</strong> Ma 33% szans na wydanie unikalnego krzyku na mikrofonie parabolicznym.</li><li><strong>Imię:</strong> Nie może mieć <strong>męskiego imienia</strong> (musi być kobiece).</li></ul>`
        }
    },
    {
        name: "Demon",
        evidences: ["Ghost Writing", "Freezing Temperatures", "Fingerprints"],
        guaranteed: null,
        huntSanity: { en: "70% / 100%", pl: "70% / 100%" },
        speed: "1.7 m/s",
        shortDesc: {
            en: "Aggressive. Hunts very often. Crucifix ineffective.",
            pl: "Agresywny. Poluje bardzo często. Krucyfiks działa słabiej."
        },
        longDesc: {
            en: `<ul><li><strong>Aggression:</strong> Cooldown between hunts is only <strong>20 seconds</strong> (vs 25s).</li><li><strong>Ability:</strong> Rare ability to hunt at <strong>100% Sanity</strong>.</li><li><strong>Weakness:</strong> Crucifixes work at <strong>5 meters</strong> (vs 3m). Smudge sticks block hunting for only <strong>60s</strong> (vs 90s).</li></ul>`,
            pl: `<ul><li><strong>Agresja:</strong> Cooldown między polowaniami to tylko <strong>20 sekund</strong> (norma 25s).</li><li><strong>Zdolność:</strong> Może użyć zdolności do polowania przy <strong>100% Sanity</strong>.</li><li><strong>Słabość:</strong> Krucyfiksy działają na <strong>5 metrów</strong> (zamiast 3m). Kadzidło blokuje go tylko na <strong>60s</strong> (zamiast 90s).</li></ul>`
        }
    },
    {
        name: "Deogen",
        evidences: ["Spirit Box", "Ghost Writing", "D.O.T.S Projector"],
        guaranteed: "Spirit Box",
        huntSanity: "40%",
        speed: { en: "3.0 <-> 0.4 m/s", pl: "3.0 <-> 0.4 m/s" },
        shortDesc: {
            en: "Always knows where you are. Fast far, slow close. Heavy breathing Box.",
            pl: "Zawsze wie gdzie jesteś. Szybki daleko, wolny blisko. Sapie do Spirit Boxa."
        },
        longDesc: {
            en: `<ul><li><strong>No Hiding:</strong> You CANNOT hide. It constantly pathfinds to the nearest player.</li><li><strong>Speed:</strong> Sprints at <strong>3.0 m/s</strong> when far (>6m), slows to <strong>0.4 m/s</strong> (snail pace) when close (<2.5m).</li><li><strong>Spirit Box:</strong> 33% chance for a unique 'heavy breathing' response if standing within 1m of the ghost.</li><li><strong>Strategy:</strong> Loop it around a table. Do not corner yourself.</li></ul>`,
            pl: `<ul><li><strong>Brak Kryjówek:</strong> NIE MOŻESZ się schować. Zawsze zna twoją pozycję.</li><li><strong>Prędkość:</strong> Biegnie <strong>3.0 m/s</strong> gdy daleko (>6m), zwalnia do <strong>0.4 m/s</strong> (żółw) gdy blisko (<2.5m).</li><li><strong>Spirit Box:</strong> 33% szans na unikalne 'ciężkie sapanie' jeśli stoisz przy nim (1m).</li><li><strong>Strategia:</strong> Loopuj go (kręć kółka) wokół stołu/wyspy. Nie daj się zapędzić w kozi róg.</li></ul>`
        }
    },
    {
        name: "Goryo",
        evidences: ["EMF 5", "D.O.T.S Projector", "Fingerprints"],
        guaranteed: "D.O.T.S Projector",
        huntSanity: "50%",
        speed: "1.7 m/s",
        shortDesc: {
            en: "DOTS only on Camera + No people. Does not roam.",
            pl: "DOTS tylko na Kamerze + Pusty pokój. Nie wędruje."
        },
        longDesc: {
            en: `<ul><li><strong>D.O.T.S.:</strong> ONLY visible through a <strong>Video Camera</strong>, and ONLY when <strong>nobody is in the room</strong>.</li><li><strong>Roaming:</strong> Cannot wander more than 5 meters from its favorite room. Changes favorite room very rarely.</li><li><strong>Strategy:</strong> If you see DOTS with your naked eye, it is NOT a Goryo.</li></ul>`,
            pl: `<ul><li><strong>D.O.T.S.:</strong> Widoczne TYLKO przez <strong>Kamerę Video</strong> i TYLKO gdy <strong>nikogo nie ma w pokoju</strong>.</li><li><strong>Wędrówki:</strong> Nie oddala się bardziej niż 5m od swojego pokoju. Prawie nigdy nie zmienia pokoju.</li><li><strong>Uwaga:</strong> Jeśli widzisz DOTS gołym okiem, to NIE JEST Goryo.</li></ul>`
        }
    },
    {
        name: "Hantu",
        evidences: ["Freezing Temperatures", "Ghost Orb", "Fingerprints"],
        guaranteed: "Freezing Temperatures",
        huntSanity: "50%",
        speed: { en: "1.4 - 2.7 m/s", pl: "1.4 - 2.7 m/s" },
        shortDesc: {
            en: "Fast in cold, slow in warm. Freezing breath during hunt.",
            pl: "Szybki w zimnie, wolny w cieple. Mroźny oddech podczas polowania."
        },
        longDesc: {
            en: `<ul><li><strong>Temperature Speed:</strong> 1.4 m/s in warm rooms (>15°C) up to 2.7 m/s in freezing rooms. DOES NOT accelerate from Line-of-Sight.</li><li><strong>Breath:</strong> Emits visible freezing breath in any room while hunting if the breaker is off.</li><li><strong>Weakness:</strong> Cannot turn ON the fuse box. Keeping the breaker ON slows it down.</li></ul>`,
            pl: `<ul><li><strong>Prędkość:</strong> Zależy od temperatury. 1.4 m/s w cieple (>15°C) do 2.7 m/s w mrozie. NIE przyspiesza gdy cię widzi (brak LOS boost).</li><li><strong>Oddech:</strong> Podczas polowania widać jego mroźny oddech (jeśli prąd wyłączony).</li><li><strong>Słabość:</strong> Nie może włączyć korków. Trzymaj prąd WŁĄCZONY, aby go spowolnić.</li></ul>`
        }
    },
    {
        name: "Jinn",
        evidences: ["EMF 5", "Freezing Temperatures", "Fingerprints"],
        guaranteed: null,
        huntSanity: "50%",
        speed: { en: "1.7 / 2.5 m/s", pl: "1.7 / 2.5 m/s" },
        shortDesc: {
            en: "Territorial. Fast if breaker is ON and seeing you.",
            pl: "Terytorialny. Szybki jeśli prąd jest ON i cię widzi."
        },
        longDesc: {
            en: `<ul><li><strong>Chase Speed:</strong> Instantly accelerates to <strong>2.5 m/s</strong> if it has Line-of-Sight and is >2m away (requires Fuse Box ON). Slows down when close.</li><li><strong>Ability:</strong> Can zap 25% sanity from players within 3m, leaving an EMF 2 reading at the Fuse Box.</li><li><strong>Weakness:</strong> The Jinn <strong>cannot turn off the fuse box</strong>. If the breaker turns off, it wasn't a Jinn (or too many lights were on).</li></ul>`,
            pl: `<ul><li><strong>Prędkość:</strong> Natychmiast przyspiesza do <strong>2.5 m/s</strong> jeśli cię widzi i jest >2m od ciebie (wymaga Włączonego Prądu).</li><li><strong>Zdolność:</strong> Może zabrać 25% sanity graczom w pobliżu.</li><li><strong>Słabość:</strong> Jinn <strong>nie może wyłączyć korków</strong>. Jeśli prąd wysadziło (nie przez nadmiar świateł), to nie Jinn.</li></ul>`
        }
    },
    {
        name: "Mare",
        evidences: ["Spirit Box", "Ghost Orb", "Ghost Writing"],
        guaranteed: null,
        huntSanity: { en: "60% (Dark) / 40% (Light)", pl: "60% (Ciemno) / 40% (Jasno)" },
        speed: "1.7 m/s",
        shortDesc: {
            en: "Loves darkness. Hunts earlier in dark. Explodes lights.",
            pl: "Kocha ciemność. Poluje wcześniej w ciemności. Wysadza żarówki."
        },
        longDesc: {
            en: `<ul><li><strong>Hunt Threshold:</strong> <strong>60%</strong> if room is dark, <strong>40%</strong> if room is lit.</li><li><strong>Lights:</strong> Cannot turn ON lights. Has a high chance to immediately turn a light OFF after you turn it ON.</li><li><strong>Event:</strong> Can interact with a light switch to explode the bulb (permanent break).</li></ul>`,
            pl: `<ul><li><strong>Próg Polowania:</strong> <strong>60%</strong> w ciemnym pokoju, <strong>40%</strong> w oświetlonym.</li><li><strong>Światło:</strong> Nie potrafi włączyć światła. Często wyłącza światło tuż po tym jak je włączysz.</li><li><strong>Zdarzenie:</strong> Może sprawić, że żarówka eksploduje (trwale zniszczona).</li></ul>`
        }
    },
    {
        name: "The Mimic",
        evidences: ["Spirit Box", "Freezing Temperatures", "Fingerprints", "Ghost Orb"],
        guaranteed: "Ghost Orb",
        huntSanity: { en: "Variable", pl: "Zmienne" },
        speed: { en: "Variable", pl: "Zmienna" },
        shortDesc: {
            en: "Copies ANY ghost. Always has 'fake' Orb evidence.",
            pl: "Kopiuje KAŻDEGO ducha. Zawsze ma fałszywe Orby."
        },
        longDesc: {
            en: `<ul><li><strong>Copycat:</strong> Mimics the traits, abilities, and stats of any other ghost. Switches ghost type every few minutes.</li><li><strong>Delay:</strong> It takes <strong>1 minute</strong> after opening the van door before it starts mimicking abilities.</li><li><strong>Fake Evidence:</strong> ALWAYS shows <strong>Ghost Orbs</strong> as a 4th evidence.</li></ul>`,
            pl: `<ul><li><strong>Kopiowanie:</strong> Naśladuje cechy i statystyki innego ducha. Zmienia naśladowanego ducha co kilka minut.</li><li><strong>Opóźnienie:</strong> Zaczyna naśladować zdolności dopiero <strong>minutę po otwarciu drzwi ciężarówki</strong>.</li><li><strong>Fałszywy Dowód:</strong> ZAWSZE pokazuje <strong>Orby</strong> jako 4-ty, dodatkowy dowód.</li></ul>`
        }
    },
    {
        name: "Moroi",
        evidences: ["Spirit Box", "Ghost Writing", "Freezing Temperatures"],
        guaranteed: "Spirit Box",
        huntSanity: "50%",
        speed: { en: "1.5 - 2.25 m/s", pl: "1.5 - 2.25 m/s" },
        shortDesc: {
            en: "Curses you (2x sanity drain). Faster at low sanity.",
            pl: "Rzuca klątwę (2x utrata sanity). Szybszy przy niskim sanity."
        },
        longDesc: {
            en: `<ul><li><strong>The Curse:</strong> Spirit Box response or Paramc whisper causes the player to lose sanity 2x faster. Cured by Pills.</li><li><strong>Speed:</strong> Inversely proportional to average sanity. 1.5 m/s at high sanity, <strong>2.25 m/s</strong> at 0% sanity (plus LOS boost up to 3.71 m/s!).</li><li><strong>Blindness:</strong> Smudge sticks blind it for <strong>12 seconds</strong> during a hunt (vs 6s).</li></ul>`,
            pl: `<ul><li><strong>Klątwa:</strong> Odpowiedź na Spirit Box lub szept na mikrofonie rzuca klątwę (tracisz sanity 2x szybciej). Pigułki leczą klątwę.</li><li><strong>Prędkość:</strong> Im mniej sanity, tym jest szybszy. 1.5 m/s (dużo sanity) -> <strong>2.25 m/s</strong> (0% sanity).</li><li><strong>Ślepota:</strong> Kadzidło oślepia go na <strong>12 sekund</strong> podczas polowania (norma 6s).</li></ul>`
        }
    },
    {
        name: "Myling",
        evidences: ["EMF 5", "Ghost Writing", "Fingerprints"],
        guaranteed: null,
        huntSanity: "50%",
        speed: "1.7 m/s",
        shortDesc: {
            en: "Quiet footsteps during hunt. Noisy on Paramc.",
            pl: "Ciche kroki podczas polowania. Głośny na mikrofonie."
        },
        longDesc: {
            en: `<ul><li><strong>Stealth Hunt:</strong> Footsteps are completely silent beyond <strong>12 meters</strong>. Flashlight flickering is still visible.</li><li><strong>Activity:</strong> Makes paranormal sounds on the Parabolic Mic frequently (every <strong>64-127 seconds</strong>).</li><li><strong>Test:</strong> If you hear footsteps only when the ghost is basically on top of you, it's a Myling.</li></ul>`,
            pl: `<ul><li><strong>Ciche Kroki:</strong> Podczas polowania nie słychać jego kroków z odległości większej niż <strong>12 metrów</strong>.</li><li><strong>Aktywność:</strong> Wydaje dźwięki na mikrofonie parabolicznym bardzo często (co <strong>64-127 sekund</strong>).</li><li><strong>Test:</strong> Jeśli słyszysz kroki tylko gdy duch jest bardzo blisko, to Myling.</li></ul>`
        }
    },
    {
        name: "Obake",
        evidences: ["EMF 5", "Ghost Orb", "Fingerprints"],
        guaranteed: "Fingerprints",
        huntSanity: "50%",
        speed: "1.7 m/s",
        shortDesc: {
            en: "Shapeshifter. 6-Finger prints. Flashes different model.",
            pl: "Zmiennokształtny. 6 palców. Zmienia model podczas polowania."
        },
        longDesc: {
            en: `<ul><li><strong>Fingerprints:</strong> 16.7% chance to leave <strong>6-finger handprints</strong> (unique). 25% chance to leave NO fingerprints at all.</li><li><strong>Shapeshift:</strong> During a hunt, has a 6.66% chance per flicker to change into a different ghost model for one frame.</li><li><strong>Ability:</strong> Can decrease timer of existing fingerprints by half.</li></ul>`,
            pl: `<ul><li><strong>Odciski:</strong> 16.7% szans na odcisk z <strong>6 palcami</strong> (unikalne). 25% szans na BRAK odcisku.</li><li><strong>Zmiana Formy:</strong> Podczas polowania ma 6.66% szans przy każdym mrugnięciu na zmianę modelu ducha na inny (na ułamek sekundy).</li><li><strong>Zdolność:</strong> Może skrócić czas trwania odcisków o połowę.</li></ul>`
        }
    },
    {
        name: "Oni",
        evidences: ["EMF 5", "Freezing Temperatures", "D.O.T.S Projector"],
        guaranteed: null,
        huntSanity: "50%",
        speed: "1.7 m/s",
        shortDesc: {
            en: "Very active. Visible longer during hunts. Drains sanity.",
            pl: "Bardzo aktywny. Widoczny dłużej. Zabiera sanity."
        },
        longDesc: {
            en: `<ul><li><strong>Visibility:</strong> Visible for much longer durations during hunt flickers. Very easy to track visually.</li><li><strong>Sanity Drain:</strong> Physical ghost events drain <strong>20% Sanity</strong> (double normal).</li><li><strong>Activity:</strong> Extremely active. Cannot do the 'airball' ghost event (hissing mist).</li></ul>`,
            pl: `<ul><li><strong>Widoczność:</strong> Podczas polowania jest widoczny znacznie dłużej (mniej mruga). Łatwo zrobić mu zdjęcie.</li><li><strong>Sanity:</strong> Fizyczne objawienia zabierają <strong>20% Sanity</strong> (zamiast 10%).</li><li><strong>Aktywność:</strong> Bardzo aktywny. Nie może zrobić eventu "mglistej kulki" (airball).</li></ul>`
        }
    },
    {
        name: "Onryo",
        evidences: ["Spirit Box", "Ghost Orb", "Freezing Temperatures"],
        guaranteed: null,
        huntSanity: { en: "60% / Any%", pl: "60% / Każde%" },
        speed: "1.7 m/s",
        shortDesc: {
            en: "Fears fire. Candles act like Crucifixes. Hunts if fire goes out.",
            pl: "Boi się ognia. Świece to krucyfiksy. Poluje gdy ogień zgaśnie."
        },
        longDesc: {
            en: `<ul><li><strong>Fire Safety:</strong> A flame acts as a Crucifix with 4m range. Ghost blows out flame instead of hunting.</li><li><strong>Aggression:</strong> Every <strong>3rd flame</strong> blown out will instantly trigger a hunt (unless another flame is nearby).</li><li><strong>Threshold:</strong> Can hunt at any sanity if triggered by fire loss. Standard threshold 60%.</li></ul>`,
            pl: `<ul><li><strong>Ogień:</strong> Zapalona świeca działa jak Krucyfiks (zasięg 4m). Duch zdmuchuje świecę zamiast atakować.</li><li><strong>Agresja:</strong> Każda <strong>3 zdmuchnięta świeca</strong> wywołuje natychmiastowe polowanie (chyba że obok jest inna świeca).</li><li><strong>Próg:</strong> Standardowo 60%, ale może zaatakować przy 100% jeśli zdmuchnie 3 świece.</li></ul>`
        }
    },
    {
        name: "Phantom",
        evidences: ["Spirit Box", "D.O.T.S Projector", "Fingerprints"],
        guaranteed: null,
        huntSanity: "50%",
        speed: "1.7 m/s",
        shortDesc: {
            en: "Drains sanity if looked at. Photos make it vanish. Slow blink.",
            pl: "Zabiera sanity jak na niego patrzysz. Znika po zdjęciu. Wolne mruganie."
        },
        longDesc: {
            en: `<ul><li><strong>Sanity:</strong> Looking at the Phantom drains 0.5% sanity per second.</li><li><strong>Photo:</strong> Taking a photo makes it <strong>disappear instantly</strong> (event or hunt). Photo contains no ghost glitch (crystal clear).</li><li><strong>Blinking:</strong> During hunts, stays invisible for very long periods (1-2s). Hard to loop visually.</li></ul>`,
            pl: `<ul><li><strong>Sanity:</strong> Patrzenie na Phantoma zabiera sanity (0.5%/s).</li><li><strong>Zdjęcie:</strong> Zrobienie mu zdjęcia sprawia, że <strong>znika natychmiast</strong> (podczas eventu i polowania, choć polowanie trwa dalej). Zdjęcie nie ma zakłóceń (glitchy).</li><li><strong>Mruganie:</strong> Podczas polowania bardzo rzadko jest widoczny (długie przerwy w widocznosci).</li></ul>`
        }
    },
    {
        name: "Poltergeist",
        evidences: ["Spirit Box", "Ghost Writing", "Fingerprints"],
        guaranteed: null,
        huntSanity: "50%",
        speed: "1.7 m/s",
        shortDesc: {
            en: "Throws multiple objects. Explosion of items.",
            pl: "Rzuca wieloma przedmiotami. Eksplozja itemów."
        },
        longDesc: {
            en: `<ul><li><strong>Multi-Throw:</strong> Can throw multiple items at once. Throws are powerful and long-distance.</li><li><strong>Sanity:</strong> Watching it throw items drains <strong>2% sanity</strong> per item.</li><li><strong>Hunt:</strong> 100% chance to throw a nearby object every 0.5s during a hunt. Creates a chaotic mess.</li></ul>`,
            pl: `<ul><li><strong>Multi-Rzut:</strong> Może rzucić wieloma przedmiotami naraz (tzw. Polty Bomb). Rzuty są bardzo silne.</li><li><strong>Sanity:</strong> Patrzenie jak rzuca zabiera <strong>2% sanity</strong> za każdy przedmiot.</li><li><strong>Polowanie:</strong> Podczas polowania rzuca wszystkim co ma pod ręką (co 0.5s), robiąc bałagan.</li></ul>`
        }
    },
    {
        name: "Raiju",
        evidences: ["EMF 5", "D.O.T.S Projector", "Ghost Orb"],
        guaranteed: null,
        huntSanity: "50% / 65%",
        speed: { en: "1.7 / 2.5 m/s", pl: "1.7 / 2.5 m/s" },
        shortDesc: {
            en: "Feeds on electronics. Very fast near equipment.",
            pl: "Żywi się prądem. Bardzo szybki przy elektronice."
        },
        longDesc: {
            en: `<ul><li><strong>Electronics Boost:</strong> Hunts at <strong>65% Sanity</strong> and moves at <strong>2.5 m/s</strong> if near active electronics (Watch, Camera, DOTS, etc.).</li><li><strong>Interference:</strong> Disrupts electronic equipment from **15 meters** away (vs 10m).</li><li><strong>Strategy:</strong> Turn off equipment when hiding / breaking line of sight!</li></ul>`,
            pl: `<ul><li><strong>Elektronika:</strong> Poluje od <strong>65% Sanity</strong> i biega z prędkością <strong>2.5 m/s</strong> jeśli jest w pobliżu włączonej elektroniki.</li><li><strong>Zakłócenia:</strong> Zakłóca sprzęt z odległości <strong>15 metrów</strong> (norma 10m).</li><li><strong>Strategia:</strong> Wyłącz latarkę i sprzęt gdy się chowasz!</li></ul>`
        }
    },
    {
        name: "Revenant",
        evidences: ["Ghost Writing", "Ghost Orb", "Freezing Temperatures"],
        guaranteed: null,
        huntSanity: "50%",
        speed: { en: "1.0 / 3.0 m/s", pl: "1.0 / 3.0 m/s" },
        shortDesc: {
            en: "Slow when hidden, incredibly fast when chasing.",
            pl: "Wolny gdy nikogo nie widzi, niesamowicie szybki w pościgu."
        },
        longDesc: {
            en: `<ul><li><strong>Speed:</strong> Moves at <strong>3.0 m/s</strong> (extremely fast) if it detects a player/electronics.</li><li><strong>Sluggish:</strong> Moves at <strong>1.0 m/s</strong> (extremely slow) if it has no target.</li><li><strong>Strategy:</strong> Breaking line of sight makes it slow down INSTANTLY to 1.0 m/s until it reaches your last known pos.</li></ul>`,
            pl: `<ul><li><strong>Prędkość:</strong> Biegnie <strong>3.0 m/s</strong> (pocisk) jeśli wie gdzie jesteś.</li><li><strong>Wolny:</strong> Pełza <strong>1.0 m/s</strong> jeśli nikogo nie wykrył.</li><li><strong>Strategia:</strong> Jak tylko znikniesz mu z oczu, natychmiast zwalnia. Nie uciekaj prostą drogą – skręć i schowaj się.</li></ul>`
        }
    },
    {
        name: "Shade",
        evidences: ["EMF 5", "Ghost Writing", "Freezing Temperatures"],
        guaranteed: null,
        huntSanity: "35%",
        speed: "1.7 m/s",
        shortDesc: {
            en: "Shy. Won't hunt if people are together. Hard to find.",
            pl: "Nieśmiały. Nie poluje jeśli ktoś jest w pokoju."
        },
        longDesc: {
            en: `<ul><li><strong>Shyness:</strong> Cannot hunt if a player is in the same room.</li><li><strong>Threshold:</strong> Hunts at <strong>35% Sanity</strong>.</li><li><strong>Activity:</strong> Very boring. Interactions are rare. EMF 5 is hard to get.</li><li><strong>Events:</strong> Preferentially does 'Shadow' events (hissing shadow) rather than full manifestations.</li></ul>`,
            pl: `<ul><li><strong>Nieśmiałość:</strong> Nie rozpocznie polowania, jeśli w pokoju z nim jest gracz.</li><li><strong>Próg:</strong> Poluje dopiero od <strong>35% Sanity</strong>.</li><li><strong>Aktywność:</strong> Bardzo niska. Trudno o EMF 5.</li><li><strong>Eventy:</strong> Częściej robi ciche "cieniowe" eventy niż pełne objawienia.</li></ul>`
        }
    },
    {
        name: "Spirit",
        evidences: ["EMF 5", "Ghost Writing", "Spirit Box"],
        guaranteed: null,
        huntSanity: "50%",
        speed: "1.7 m/s",
        shortDesc: {
            en: "Generic ghost. Long smudge cooldown.",
            pl: "Zwyczajny duch. Długi cooldown po kadzidle."
        },
        longDesc: {
            en: `<ul><li><strong>Smudge Strength:</strong> Smudging a Spirit prevents it from hunting for <strong>180 seconds</strong> (3 minutes). Normal is 90s.</li><li><strong>No Traits:</strong> Has no other defining strengths or weaknesses. The "default" ghost.</li></ul>`,
            pl: `<ul><li><strong>Kadzidło:</strong> Użycie kadzidła blokuje polowanie spirita na <strong>180 sekund</strong> (3 minuty). Norma to 90s.</li><li><strong>Cechy:</strong> Nie ma innych unikalnych cech. To "domyślny" duch.</li></ul>`
        }
    },
    {
        name: "Thaye",
        evidences: ["Ghost Writing", "Ghost Orb", "D.O.T.S Projector"],
        guaranteed: null,
        huntSanity: "75% -> 15%",
        speed: { en: "2.75 -> 1.0 m/s", pl: "2.75 -> 1.0 m/s" },
        shortDesc: {
            en: "Ages over time. Starts fast/aggressive, becomes slow/calm.",
            pl: "Starzeje się. Na początku szybki i agresywny, potem wolny."
        },
        longDesc: {
            en: `<ul><li><strong>Aging:</strong> Ages every 1-2 minutes if a player is near. Stats degrade with age (10 stages).</li><li><strong>Young (Age 0):</strong> 2.75 m/s speed, 75% hunt threshold. Extremely dangerous early game.</li><li><strong>Old (Age 10):</strong> 1.0 m/s speed, 15% hunt threshold. Very slow and passive.</li></ul>`,
            pl: `<ul><li><strong>Starzenie:</strong> Starzeje się co 1-2 minuty, jeśli gracz jest w pobliżu.</li><li><strong>Młody:</strong> Bardzo szybki (2.75 m/s), poluje od 75% sanity.</li><li><strong>Stary:</strong> Bardzo wolny (1.0 m/s), poluje dopiero od 15% sanity.</li><li><strong>Brak LOS:</strong> W przeciwieństwie do Moroi/Hantu, Thaye NIE przyspiesza gdy Cię widzi.</li></ul>`
        }
    },
    {
        name: "The Twins",
        evidences: ["EMF 5", "Spirit Box", "Freezing Temperatures"],
        guaranteed: null,
        huntSanity: "50%",
        speed: { en: "1.5 / 1.9 m/s", pl: "1.5 / 1.9 m/s" },
        shortDesc: {
            en: "Two interaction ranges. Decoy and Main ghost.",
            pl: "Bliźniaki. Dwa zasięgi interakcji. Główny i Przynęta."
        },
        longDesc: {
            en: `<ul><li><strong>Decoy:</strong> Interactions can happen at a "Decoy" location far from the ghost itself.</li><li><strong>Hunt:</strong> 50% chance to hunt from Main (1.53 m/s - slightly slow) or Decoy (1.87 m/s - fast).</li><li><strong>Evidence:</strong> Main ghost gives all evidence. Decoy gives EMF but NO Spirit Box.</li></ul>`,
            pl: `<ul><li><strong>Przynęta:</strong> Interakcje mogą dziać się w dwóch różnych miejscach naraz.</li><li><strong>Polowanie:</strong> 50% szans, że zaatakuje Główny (wolniejszy 1.5 m/s) lub Przynęta (szybsza 1.9 m/s).</li><li><strong>Dowody:</strong> Tylko Główny daje wszystkie dowody. Przynęta daje EMF, ale nie daje Spirit Boxa.</li></ul>`
        }
    },
    {
        name: "Wraith",
        evidences: ["EMF 5", "Spirit Box", "D.O.T.S Projector"],
        guaranteed: null,
        huntSanity: "50%",
        speed: "1.7 m/s",
        shortDesc: {
            en: "Floats. No footprints in salt. Teleports to players.",
            pl: "Lata. Brak kroków w soli. Teleportuje się do graczy."
        },
        longDesc: {
            en: `<ul><li><strong>Salt:</strong> Will never leave UV footprints in salt. Stepping in salt generates activity but no prints.</li><li><strong>Teleport:</strong> Can teleport instantly to a random player (generating EMF 2 or 5).</li><li><strong>Flight:</strong> Cannot be tracked by footsteps in salt (it hovers).</li></ul>`,
            pl: `<ul><li><strong>Sól:</strong> NIGDY nie zostawia śladów stóp w soli (UV).</li><li><strong>Teleport:</strong> Może się teleportować do losowego gracza (daje wtedy EMF 2/5).</li><li><strong>Latanie:</strong> Unosi się nad ziemią, więc nie tupie w soli.</li></ul>`
        }
    },
    {
        name: "Yokai",
        evidences: ["Spirit Box", "Ghost Orb", "D.O.T.S Projector"],
        guaranteed: null,
        huntSanity: { en: "50% / 80%", pl: "50% / 80%" },
        speed: "1.7 m/s",
        shortDesc: {
            en: "Sensitive to voice. Hard of hearing during hunt.",
            pl: "Reaguje na głos. Głuchy podczas polowania."
        },
        longDesc: {
            en: `<ul><li><strong>Voice Trigger:</strong> Talking near a Yokai can trigger a hunt as early as <strong>80% Sanity</strong>.</li><li><strong>Deafness:</strong> During hunts, it can only hear voice/electronics from <strong>2.5 meters</strong> away.</li><li><strong>Strategy:</strong> You can often sprint away while shouting and it won't react unless very close.</li></ul>`,
            pl: `<ul><li><strong>Głos:</strong> Rozmowa przy duchu może wywołać atak już przy <strong>80% Sanity</strong>.</li><li><strong>Głuchota:</strong> Podczas polowania słyszy twój głos/sprzęt tylko z odległości <strong>2.5 metra</strong>.</li><li><strong>Strategia:</strong> Możesz uciekać krzycząc, a on cię nie usłyszy (chyba że wpadniesz na niego).</li></ul>`
        }
    },
    {
        name: "Yurei",
        evidences: ["Ghost Orb", "Freezing Temperatures", "D.O.T.S Projector"],
        guaranteed: null,
        huntSanity: "50%",
        speed: "1.7 m/s",
        shortDesc: {
            en: "Drains sanity heavily. Can slam doors shut.",
            pl: "Mocno zabiera sanity. Trzaska drzwiami."
        },
        longDesc: {
            en: `<ul><li><strong>Door Slam:</strong> Can fully close a door, draining <strong>12.5% Sanity</strong> instantly from players in the room.</li><li><strong>Weakness:</strong> Smudge sticks trap it in its room for 90 seconds (stops roaming).</li><li><strong>Exit:</strong> Only ghost that can interact with the front door (without hunting/event).</li></ul>`,
            pl: `<ul><li><strong>Trzaśnięcie:</strong> Może z hukiem zamknąć drzwi, zabierając <strong>12.5% Sanity</strong> wszystkim w pokoju.</li><li><strong>Słabość:</strong> Kadzidło uwięzi go w pokoju na 90 sekund (przestaje wędrować).</li><li><strong>Drzwi wejściowe:</strong> Jako jedyny potrafi dotknąć drzwi wejściowych poza polowaniem.</li></ul>`
        }
    },
    {
        name: "Dayan",
        evidences: ["EMF 5", "Ghost Orb", "Spirit Box"],
        guaranteed: null,
        huntSanity: { en: "45% / 60%", pl: "45% / 60%" },
        speed: { en: "1.2 - 2.25 m/s", pl: "1.2 - 2.25 m/s" },
        shortDesc: {
            en: "Reacts to player movement. Speeds up when you move.",
            pl: "Reaguje na ruch gracza. Przyspiesza gdy chodzisz."
        },
        longDesc: {
            en: `<ul><li><strong>Mechanic:</strong> Senses player movement within a radius.</li><li><strong>Speed:</strong> Slow (1.2 m/s) if nearby players are STANDING STILL. Fast (2.25 m/s) if players are MOVING.</li><li><strong>Hunt:</strong> Hunts at 45% sanity (if you stand still) or 60% sanity (if you are moving).</li><li><strong>Strategy:</strong> Don't panic run. Stand still to slow it down.</li><li><strong>Name:</strong> Cannot have a <strong>male name</strong> (Must be female).</li></ul>`,
            pl: `<ul><li><strong>Mechanika:</strong> Wyczuwa ruch graczy w pobliżu.</li><li><strong>Prędkość:</strong> Wolny (1.2 m/s) gdy stoisz w miejscu. Szybki (2.25 m/s) gdy się ruszasz.</li><li><strong>Polowanie:</strong> Próg 45% (stojąc) lub 60% (ruszając się).</li><li><strong>Strategia:</strong> W bezruchu jest słaby. Nie biegaj panicznie.</li><li><strong>Imię:</strong> Nie może mieć <strong>męskiego imienia</strong> (musi być kobiece).</li></ul>`
        }
    },
    {
        name: "Gallu",
        evidences: ["Fingerprints", "Ghost Writing", "Freezing Temperatures"],
        guaranteed: null,
        huntSanity: { en: "40% / 60%", pl: "40% / 60%" },
        speed: { en: "1.36 / 2.0 m/s", pl: "1.36 / 2.0 m/s" },
        shortDesc: {
            en: "Enraged by protection items. Fast after smudging.",
            pl: "Wścieka się na kadzidła i sól. Szybki po obronie."
        },
        longDesc: {
            en: `<ul><li><strong>Enraged Mode:</strong> Using a Smudge Stick, Crucifix, or Salt ENRAGES it.</li><li><strong>Stats:</strong> Enraged: 2.0 m/s speed, 60% hunt threshold. Weakened: 1.36 m/s speed, 40% hunt threshold.</li><li><strong>Salt:</strong> While Enraged, it CANNOT step in salt (floats like Wraith).</li><li><strong>Test:</strong> If it speeds up AFTER you smudge it, it's a Gallu.</li></ul>`,
            pl: `<ul><li><strong>Szał:</strong> Użycie Kadzidła, Krucyfiksu lub Soli wprowadza go w tryb SZAŁU.</li><li><strong>Statystyki:</strong> W Szale: bieg 2.0 m/s, poluje od 60%. Osłabiony: 1.36 m/s, poluje od 40%.</li><li><strong>Sól:</strong> W Szale NIE DEPCZE po soli (lata jak Wraith).</li><li><strong>Test:</strong> Jeśli przyspiesza PO użyciu kadzidła, to Gallu.</li></ul>`
        }
    },
    {
        name: "Obambo",
        evidences: ["Ghost Writing", "Fingerprints", "D.O.T.S Projector"],
        guaranteed: null,
        huntSanity: { en: "10% / 65%", pl: "10% / 65%" },
        speed: { en: "1.45 / 1.96 m/s", pl: "1.45 / 1.96 m/s" },
        shortDesc: {
            en: "Cycles between Aggressive and Calm states.",
            pl: "Cyklicznie zmienia stan z Agresywnego na Spokojny."
        },
        longDesc: {
            en: `<ul><li><strong>Cycle:</strong> Switches mode every ~2 minutes.</li><li><strong>Aggressive:</strong> Fast (1.96 m/s), hunts at 65% sanity, very active.</li><li><strong>Calm:</strong> Slow (1.45 m/s), hunts at 10% sanity (like a Shade).</li><li><strong>Duration:</strong> Has the <strong>shortest hunt duration</strong> in the game.</li><li><strong>Strategy:</strong> Track its activity. If it goes from crazy to sleepy, it's Obambo.</li></ul>`,
            pl: `<ul><li><strong>Cykl:</strong> Zmienia tryb co ~2 minuty.</li><li><strong>Agresywny:</strong> Szybki (1.96 m/s), poluje od 65%, bardzo aktywny.</li><li><strong>Spokojny:</strong> Wolny (1.45 m/s), poluje dopiero od 10% (jak Shade).</li><li><strong>Czas:</strong> Posiada <strong>najkrótszy czas polowania</strong> w grze.</li><li><strong>Strategia:</strong> Jeśli duch zmienia się z demona w leniwca, to Obambo.</li></ul>`
        }
    }
];
