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
        speed: "1.7 m/s",
        shortDesc: {
            en: "Targets ONE player. Unique wails on Parabolic Mic. Female only.",
            pl: "Poluje na JEDNEGO gracza. Unikalne zawodzenie. Tylko kobieta.",
        },
        longDesc: {
            en: `<ul><li><strong>Target Obsession:</strong> Chooses one player as target. Ignores others unless target is outside the building.</li><li><strong>Unique Sound:</strong> 33% chance for distinctive shriek/wail on Parabolic Microphone.</li><li><strong>Roaming:</strong> Frequently roams directly to target's location. Never changes favorite room.</li><li><strong>Ghost Events:</strong> Increased chance of singing ghost events.</li><li><strong>Gender:</strong> Always female (can eliminate if male name/model).</li></ul>`,
            pl: `<ul><li><strong>Obsesja na Celu:</strong> Wybiera jednego gracza. Ignoruje innych chyba że cel jest poza budynkiem.</li><li><strong>Unikalne Dźwięki:</strong> 33% szans na charakterystyczny krzyk na mikrofonie parabolicznym.</li><li><strong>Wędrówki:</strong> Często wędruje bezpośrednio do celu. Nigdy nie zmienia ulubionego pokoju.</li><li><strong>Eventy:</strong> Zwiększona szansa na eventy śpiewania.</li><li><strong>Płeć:</strong> Zawsze kobieta (wyklucz jeśli męskie imię/model).</li></ul>`,
        }
    },
    {
        name: "Dayan",
        evidences: ["EMF 5", "Ghost Orb", "Spirit Box"],
        guaranteed: null,
        huntSanity: "45% / 60%",
        speed: "1.2 - 2.25 m/s",
        shortDesc: {
            en: "Fast when moving (2.25 m/s), slow when still (1.2 m/s). 60% if moving. Female only.",
            pl: "Szybka gdy się ruszasz (2.25 m/s), wolna gdy stoisz (1.2 m/s). 60% przy ruchu. Tylko kobieta.",
        },
        longDesc: {
            en: `<ul><li><strong>Movement Detection:</strong> Senses player movement within ~10 meter radius.</li><li><strong>Speed:</strong> 1.2 m/s when nearby players standing STILL. 2.25 m/s when players MOVING within detection range.</li><li><strong>Strategy:</strong> Stand STILL when within 10m to dramatically slow it down. Move only when necessary.</li><li><strong>Gender:</strong> Always female (can eliminate if male name/model).</li></ul>`,
            pl: `<ul><li><strong>Wykrywanie Ruchu:</strong> Wyczuwa ruch gracza w promieniu ~10 metrów.</li><li><strong>Prędkość:</strong> 1.2 m/s gdy gracze w pobliżu STOJĄ. 2.25 m/s gdy gracze się RUSZAJĄ w zasięgu detekcji.</li><li><strong>Strategia:</strong> STÓJ w miejscu gdy w promieniu 10m aby drastycznie spowolnić. Ruszaj tylko gdy konieczne.</li><li><strong>Płeć:</strong> Zawsze kobieta (wyklucz jeśli męskie imię/model).</li></ul>`,
        }


    },
    {
        name: "Deogen",
        evidences: ["Spirit Box", "Ghost Writing", "D.O.T.S Projector"],
        guaranteed: "Spirit Box",
        huntSanity: "40%",
        speed: "3.0 <-> 0.4 m/s",
        shortDesc: {
            en: "Always knows your location. 3.0 m/s far, 0.4 m/s close. Heavy breathing.",
            pl: "Zawsze zna twoją pozycję. 3.0 m/s daleko, 0.4 m/s blisko. Ciężkie sapanie.",
        },
        longDesc: {
            en: `<ul><li><strong>Omniscient:</strong> Always knows all players' locations. Cannot hide.</li><li><strong>Speed:</strong> 3.0 m/s when >6m away, slows to 0.4 m/s when <2.5m from target.</li><li><strong>Spirit Box:</strong> 33% chance for unique heavy breathing response within 1 meter.</li><li><strong>Strategy:</strong> Loop around furniture. Extreme speed change makes it predictable.</li></ul>`,
            pl: `<ul><li><strong>Wszechwiedzący:</strong> Zawsze zna pozycję wszystkich graczy. Nie da się ukryć.</li><li><strong>Prędkość:</strong> 3.0 m/s gdy >6m, spada do 0.4 m/s gdy <2.5m od celu.</li><li><strong>Spirit Box:</strong> 33% szans na unikalne ciężkie sapanie w obrębie 1 metra.</li><li><strong>Strategia:</strong> Loopuj wokół mebli. Ekstremalna zmiana prędkości czyni go przewidywalnym.</li></ul>`,
        }

    },
    {
        name: "Demon",
        evidences: ["Ghost Writing", "Freezing Temperatures", "Fingerprints"],
        guaranteed: null,
        huntSanity: "70% / 100%",
        speed: "1.7 m/s",
        shortDesc: {
            en: "Hunts every 20s. Can hunt at 100% sanity. Crucifix 5m range.",
            pl: "Poluje co 20s. Może polować przy 100% sanity. Krucyfiks 5m.",
        },
        longDesc: {
            en: `<ul><li><strong>Hunt Cooldown:</strong> Only 20 seconds between hunts (vs 25s normal).</li><li><strong>Ability Hunt:</strong> Rare ability to initiate hunt at ANY sanity level (100%).</li><li><strong>Crucifix Range:</strong> 5 meters effectiveness (vs 3m normal, 50% larger).</li><li><strong>Smudge Weakness:</strong> Incense prevents hunts for only 60 seconds (vs 90s normal).</li><li><strong>Hunt Threshold:</strong> Standard threshold 70%.</li></ul>`,
            pl: `<ul><li><strong>Cooldown:</strong> Tylko 20 sekund między polowaniami (zamiast 25s).</li><li><strong>Zdolność:</strong> Rzadka zdolność ataku przy DOWOLNYM sanity (100%).</li><li><strong>Krucyfiks:</strong> Zasięg 5 metrów (zamiast 3m, o 50% większy).</li><li><strong>Słabość Kadzidła:</strong> Blokuje polowania tylko na 60s (zamiast 90s).</li><li><strong>Próg:</strong> Standardowy próg 70%.</li></ul>`,
        }
    },
    {
        name: "Gallu",
        evidences: ["EMF 5", "Fingerprints", "Spirit Box"],
        guaranteed: null,
        huntSanity: "40% / 60%",
        speed: "1.36 / 2.0 m/s",
        shortDesc: {
            en: "Enraged by smudge/crucifix/salt. Enraged: 2.0 m/s + 60%. Won't step in salt when enraged.",
            pl: "Wściekły po kadzidle/krucyfiksie/soli. Wściekły: 2.0 m/s + 60%. Nie depcze po soli gdy wściekły.",
        },
        longDesc: {
            en: `<ul><li><strong>Enraged Trigger:</strong> Using Smudge/Crucifix/Salt ENRAGES it (becomes more aggressive).</li><li><strong>Enraged Stats:</strong> 2.0 m/s speed, 60% hunt threshold. Cannot step in salt (floats like Wraith).</li><li><strong>Weakened Stats:</strong> 1.36 m/s speed, 40% hunt threshold. Normal salt interaction.</li><li><strong>Exhaustion:</strong> Being enraged exhausts it, protective equipment becomes MORE effective over time.</li><li><strong>Test:</strong> If it steps in salt before becoming enraged but then avoids salt until hunt starts, it's Gallu.</li></ul>`,
            pl: `<ul><li><strong>Wyzwalacz Wściekłości:</strong> Użycie Kadzidła/Krucyfiksu/Soli WŚCIEKA go (staje się bardziej agresywny).</li><li><strong>Statystyki Wściekłości:</strong> 2.0 m/s, próg 60%. Nie może deptać po soli (lata jak Wraith).</li><li><strong>Statystyki Osłabienia:</strong> 1.36 m/s, próg 40%. Normalna interakcja z solą.</li><li><strong>Wyczerpanie:</strong> Wściekłość go męczy, ochrona staje się BARDZIEJ skuteczna z czasem.</li><li><strong>Test:</strong> Jeśli wdepnie w sól przed wściekłością, ale potem unika soli aż do rozpoczęcia polowania, to Gallu.</li></ul>`,
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
            pl: "DOTS tylko na Kamerze + Pusty pokój. Nie wędruje.",
        },
        longDesc: {
            en: `<ul><li><strong>D.O.T.S.:</strong> ONLY visible through a <strong>Video Camera</strong>, and ONLY when <strong>nobody is in the room</strong>.</li><li><strong>Roaming:</strong> Cannot wander more than 5 meters from its favorite room. Changes favorite room very rarely.</li><li><strong>Strategy:</strong> If you see DOTS with your naked eye, it is NOT a Goryo.</li></ul>`,
            pl: `<ul><li><strong>D.O.T.S.:</strong> Widoczne TYLKO przez <strong>Kamerę Video</strong> i TYLKO gdy <strong>nikogo nie ma w pokoju</strong>.</li><li><strong>Wędrówki:</strong> Nie oddala się bardziej niż 5m od swojego pokoju. Prawie nigdy nie zmienia pokoju.</li><li><strong>Uwaga:</strong> Jeśli widzisz DOTS gołym okiem, to NIE JEST Goryo.</li></ul>`,
        }
    },
    {
        name: "Hantu",
        evidences: ["Freezing Temperatures", "Ghost Orb", "Fingerprints"],
        guaranteed: "Freezing Temperatures",
        huntSanity: "50%",
        speed: { en: "1.4 - 2.7 m/s", pl: "1.4 - 2.7 m/s", ru: "1.4 - 2.7 м/с" },
        shortDesc: {
            en: "Fast in cold (2.7 m/s), slow in warm (1.4 m/s). Freezing breath. Never turns fuse ON.",
            pl: "Szybki w zimnie (2.7 m/s), wolny w cieple (1.4 m/s). Mroźny oddech. Nie włącza prądu.",
        },
        longDesc: {
            en: `<ul><li><strong>Temperature Speed:</strong> 1.4 m/s in warm rooms (>15°C), up to 2.7 m/s in freezing (<0°C). NO line-of-sight acceleration.</li><li><strong>Freezing Breath:</strong> Emits visible freezing breath during hunt if fuse box OFF.</li><li><strong>Fuse Box:</strong> Never turns fuse box ON. Will turn it OFF 2x more often.</li><li><strong>Test:</strong> If ghost turns breaker ON, eliminate Hantu.</li></ul>`,
            pl: `<ul><li><strong>Prędkość od Temp:</strong> 1.4 m/s w cieple (>15°C), do 2.7 m/s w mrozie (<0°C). BRAK przyspieszenia LOS.</li><li><strong>Mroźny Oddech:</strong> Widoczny mroźny oddech podczas polowania gdy prąd WYŁĄCZONY.</li><li><strong>Korki:</strong> Nigdy NIE włącza korków. Wyłącza je 2x częściej.</li><li><strong>Test:</strong> Jeśli duch włączy korki, wyklucz Hantu.</li></ul>`,
        }
    },
    {
        name: "Jinn",
        evidences: ["EMF 5", "Freezing Temperatures", "Fingerprints"],
        guaranteed: null,
        huntSanity: "50%",
        speed: { en: "1.7 / 2.5 m/s", pl: "1.7 / 2.5 m/s", ru: "1.7 / 2.5 м/с" },
        shortDesc: {
            en: "2.5 m/s speed boost with LOS if fuse ON. Sanity zap at fuse box. Never turns fuse OFF.",
            pl: "Boost prędkości 2.5 m/s z LOS gdy prąd ON. Zabiera sanity przy korkach. Nie wyłącza prądu.",
        },
        longDesc: {
            en: `<ul><li><strong>Speed Boost:</strong> Instantly accelerates to 2.5 m/s with line-of-sight if >3m away AND fuse box ON.</li><li><strong>Sanity Drain:</strong> Can drain 25% sanity from players within 3m, leaving EMF 2 reading at fuse box.</li><li><strong>Fuse Box:</strong> Cannot turn OFF fuse box directly (can overload with lights). Never turns it OFF.</li><li><strong>Test:</strong> If breaker turns OFF (not from overload), eliminate Jinn.</li></ul>`,
            pl: `<ul><li><strong>Boost Prędkości:</strong> Natychmiastowe przyspieszenie do 2.5 m/s z LOS gdy >3m I prąd WŁĄCZONY.</li><li><strong>Zabieranie Sanity:</strong> Może zabrać 25% sanity graczom w obrębie 3m, zostawiając EMF 2 przy korkach.</li><li><strong>Korki:</strong> Nie może wyłączyć korków bezpośrednio (może przepalić światłami). Nigdy ich nie wyłącza.</li><li><strong>Test:</strong> Jeśli korki się wyłączą (nie od przeciążenia), wyklucz Jinn.</li></ul>`,
        }
    },
    {
        name: "Mare",
        evidences: ["Spirit Box", "Ghost Orb", "Ghost Writing"],
        guaranteed: null,
        huntSanity: { en: "60% (Dark) / 40% (Light)", pl: "60% (Ciemno) / 40% (Jasno)", ru: "60% (Тьма) / 40% (Свет)" },
        speed: "1.7 m/s",
        shortDesc: {
            en: "Hunts at 60% in dark, 40% in light. Never turns lights ON. Explodes bulbs.",
            pl: "Poluje przy 60% w ciemności, 40% w świetle. Nie włącza świateł. Wysadza żarówki.",
        },
        longDesc: {
            en: `<ul><li><strong>Hunt Threshold:</strong> 60% if lights OFF, 40% if lights ON (applies even if fuse broken).</li><li><strong>Light Interaction:</strong> Never turns lights ON. High chance to immediately turn OFF lights after player turns them ON.</li><li><strong>Light Shatter:</strong> Can shatter bulbs permanently during events.</li><li><strong>Roaming:</strong> More likely to roam when lights are ON.</li></ul>`,
            pl: `<ul><li><strong>Próg Polowania:</strong> 60% gdy światła WYŁĄCZONE, 40% gdy WŁĄCZONE (działa nawet przy zepsutych korkach).</li><li><strong>Interakcje ze Światłem:</strong> Nigdy NIE włącza świateł. Wysoka szansa natychmiastowego wyłączenia po włączeniu przez gracza.</li><li><strong>Wysadzanie Żarówek:</strong> Może trwale zniszczyć żarówki podczas eventów.</li><li><strong>Wędrówki:</strong> Zwiększona szansa wędrówek gdy światła WŁĄCZONE.</li></ul>`,
        }
    },
    {
        name: "The Mimic",
        evidences: ["Spirit Box", "Freezing Temperatures", "Fingerprints", "Ghost Orb"],
        guaranteed: "Ghost Orb",
        huntSanity: { en: "Variable", pl: "Zmienne" },
        speed: { en: "Variable", pl: "Zmienna" },
        shortDesc: {
            en: "Mimics any ghost every 30s-2min. ALWAYS shows Ghost Orbs (4th evidence).",
            pl: "Naśladuje każdego ducha co 30s-2min. ZAWSZE pokazuje Orby (4-ty dowód).",
        },
        longDesc: {
            en: `<ul><li><strong>Mimicry:</strong> Copies abilities and traits of random ghost. Changes every 30 seconds to 2 minutes.</li><li><strong>Delay:</strong> Waits 1 minute after exit door opened before mimicking abilities.</li><li><strong>Fake Evidence:</strong> ALWAYS shows Ghost Orbs as guaranteed 4th evidence (even on 0-evidence).</li><li><strong>Test:</strong> If you get EMF 5, Writing, or DOTS, eliminate Mimic (cannot mimic evidence).</li><li><strong>Identification:</strong> Look for dramatically changing behavior between hunts.</li></ul>`,
            pl: `<ul><li><strong>Naśladowanie:</strong> Kopiuje zdolności i cechy losowego ducha. Zmienia co 30 sekund do 2 minut.</li><li><strong>Opóźnienie:</strong> Czeka 1 minutę po otwarciu drzwi wejściowych zanim zacznie naśladować.</li><li><strong>Fałszywy Dowód:</strong> ZAWSZE pokazuje Orby jako gwarantowany 4-ty dowód (nawet przy 0-dowodach).</li><li><strong>Test:</strong> Jeśli dostajesz EMF 5, Writing lub DOTS, wyklucz Mimic (nie kopiuje dowodów).</li><li><strong>Identyfikacja:</strong> Szukaj dramatycznych zmian zachowania między polowaniami.</li></ul>`,
        }

    },
    {
        name: "Moroi",
        evidences: ["Spirit Box", "Ghost Writing", "Freezing Temperatures"],
        guaranteed: "Spirit Box",
        huntSanity: "50%",
        speed: "1.5 - 2.25 m/s",
        shortDesc: {
            en: "Curses via Spirit Box (2x sanity drain). 1.5-2.25 m/s based on sanity. Blind 12s.",
            pl: "Klnie przez Spirit Box (2x utrata sanity). 1.5-2.25 m/s od sanity. Oślepienie 12s.",
        },
        longDesc: {
            en: `<ul><li><strong>Curse:</strong> Spirit Box response or Parabolic whisper curses player (2x sanity drain). Cured by Sanity Pills.</li><li><strong>Speed:</strong> 1.5 m/s at high sanity, scales to 2.25 m/s at 0% average sanity. With LOS boost: up to 3.71 m/s!</li><li><strong>Smudge Blind:</strong> Incense blinds for 12 seconds during hunt (vs 6s normal, 2x duration).</li><li><strong>Danger:</strong> Extremely lethal at low sanity due to speed.</li></ul>`,
            pl: `<ul><li><strong>Klątwa:</strong> Odpowiedź Spirit Box lub szept z Paramic rzuca klątwę (2x utrata sanity). Leczą pigułki.</li><li><strong>Prędkość:</strong> 1.5 m/s przy wysokim sanity, skaluje do 2.25 m/s przy 0% średniej. Z LOS: do 3.71 m/s!</li><li><strong>Oślepienie:</strong> Kadzidło oślepia na 12 sekund podczas polowania (zamiast 6s, 2x dłużej).</li><li><strong>Niebezpieczeństwo:</strong> Ekstremalnie śmiertelny przy niskim sanity przez prędkość.</li></ul>`,
        }

    },
    {
        name: "Myling",
        evidences: ["EMF 5", "Ghost Writing", "Fingerprints"],
        guaranteed: null,
        huntSanity: "50%",
        speed: "1.7 m/s",
        shortDesc: {
            en: "Footsteps silent beyond 12m. Frequent parabolic sounds (64-127s).",
            pl: "Kroki ciche poza 12m. Częste dźwięki na mikrofonie (64-127s).",
        },
        longDesc: {
            en: `<ul><li><strong>Silent Footsteps:</strong> Footsteps and vocalizations only audible within 12 meters (vs 20m normal).</li><li><strong>Parabolic Activity:</strong> Paranormal sounds every 64-127 seconds (vs 80-127s normal).</li><li><strong>Test:</strong> If footsteps only heard when electronics flicker (10m), likely Myling.</li></ul>`,
            pl: `<ul><li><strong>Ciche Kroki:</strong> Kroki i wokalizacje słyszalne tylko w obrębie 12 metrów (zamiast 20m).</li><li><strong>Aktywność Parabol:</strong> Paranormalne dźwięki co 64-127 sekund (zamiast 80-127s).</li><li><strong>Test:</strong> Jeśli kroki słyszalne tylko gdy elektronika miga (10m), prawdopodobnie Myling.</li></ul>`,
        }

    },
    {
        name: "Obake",
        evidences: ["EMF 5", "Ghost Orb", "Fingerprints"],
        guaranteed: "Fingerprints",
        huntSanity: "50%",
        speed: "1.7 m/s",
        shortDesc: {
            en: "6-finger prints (16.7%). 25% no prints. Shapeshifts during hunt.",
            pl: "Odciski 6-palcowe (16.7%). 25% brak odcisków. Zmienia formę podczas polowania.",
        },
        longDesc: {
            en: `<ul><li><strong>Six Fingers:</strong> 16.7% chance for unique 6-fingered handprints (instant confirmation).</li><li><strong>No Prints:</strong> 25% chance to leave NO fingerprints on interactions despite having UV evidence.</li><li><strong>Shapeshift:</strong> 6.66% chance per hunt flicker to appear as different ghost model for one frame.</li><li><strong>Print Decay:</strong> Can halve existing fingerprint duration (disappear faster).</li><li><strong>Test:</strong> 6 fingers = confirmed Obake. Missing prints despite interactions = possible Obake.</li></ul>`,
            pl: `<ul><li><strong>Sześć Palców:</strong> 16.7% szans na unikalne 6-palczaste odciski (natychmiastowe potwierdzenie).</li><li><strong>Brak Odcisków:</strong> 25% szans na BRAK odcisków mimo interakcji i posiadania UV.</li><li><strong>Zmiana Formy:</strong> 6.66% szans przy każdym mrugnięciu na zmianę modelu ducha na jeden frame.</li><li><strong>Zanikanie Odcisków:</strong> Może skrócić czas trwania odcisków o połowę.</li><li><strong>Test:</strong> 6 palców = potwierdzony Obake. Brak odcisków mimo interakcji = możliwy Obake.</li></ul>`,
        }
    },
    {
        name: "Obambo",
        evidences: ["Ghost Writing", "Fingerprints", "D.O.T.S Projector"],
        guaranteed: null,
        huntSanity: "10% / 65%",
        speed: "1.45 / 1.96 m/s",
        shortDesc: {
            en: "Cycles Aggressive/Calm every ~2min. Aggressive: 1.96 m/s + 65%. Calm: 1.45 m/s + 10%. Shortest hunt.",
            pl: "Cykl Agresywny/Spokojny co ~2min. Agresywny: 1.96 m/s + 65%. Spokojny: 1.45 m/s + 10%. Najkrótsze polowanie.",
        },
        longDesc: {
            en: `<ul><li><strong>Cycle:</strong> Switches Aggressive ↔ Calm every ~2 minutes. Can change MID-HUNT!</li><li><strong>Aggressive State:</strong> 1.96 m/s, 65% hunt threshold, very active with frequent interactions.</li><li><strong>Calm State:</strong> 1.45 m/s, 10% hunt threshold (like Shade), minimal activity, almost invisible.</li><li><strong>Hunt Duration:</strong> SHORTEST hunt duration in the entire game.</li><li><strong>Test:</strong> If activity goes from hyperactive to lazy over time, likely Obambo.</li></ul>`,
            pl: `<ul><li><strong>Cykl:</strong> Zmienia się Agresywny ↔ Spokojny co ~2 minuty. Może się zmienić W TRAKCIE POLOWANIA!</li><li><strong>Stan Agresywny:</strong> 1.96 m/s, próg 65%, bardzo aktywny z częstymi interakcjami.</li><li><strong>Stan Spokojny:</strong> 1.45 m/s, próg 10% (jak Shade), minimalna aktywność, prawie niewidoczny.</li><li><strong>Czas Polowania:</strong> NAJKRÓTSZY czas polowania w całej grze.</li><li><strong>Test:</strong> Jeśli aktywność zmienia się z hiperaktywnej na leniwą, prawdopodobnie Obambo.</li></ul>`,
        }

    },
    {
        name: "Oni",
        evidences: ["EMF 5", "Freezing Temperatures", "D.O.T.S Projector"],
        guaranteed: null,
        huntSanity: "50%",
        speed: "1.7 m/s",
        shortDesc: {
            en: "Visible much longer during hunts. 20% sanity drain events. No airball.",
            pl: "Dużo dłużej widoczny podczas polowań. 20% sanity z eventów. Brak airball.",
        },
        longDesc: {
            en: `<ul><li><strong>Visibility:</strong> Flickers visible for much longer durations during hunts (easier photos).</li><li><strong>Sanity Drain:</strong> Physical contact during ghost events drains 20% sanity (vs 10% normal).</li><li><strong>Activity:</strong> Very active when players nearby. More likely to use full model during events.</li><li><strong>No Airball:</strong> Cannot perform airball/mist ghost event (eliminates Oni if seen).</li></ul>`,
            pl: `<ul><li><strong>Widoczność:</strong> Mruga widocznie dużo dłużej podczas polowań (łatwiejsze zdjęcia).</li><li><strong>Zabieranie Sanity:</strong> Fizyczny kontakt podczas eventów zabiera 20% sanity (zamiast 10%).</li><li><strong>Aktywność:</strong> Bardzo aktywny gdy gracze w pobliżu. Częściej używa pełnego modelu podczas eventów.</li><li><strong>Brak Airball:</strong> Nie może zrobić eventu airball/mgły (wyklucza Oni jeśli widziany).</li></ul>`,
        }
    },
    {
        name: "Onryo",
        evidences: ["Spirit Box", "Ghost Orb", "Freezing Temperatures"],
        guaranteed: null,
        huntSanity: { en: "60% / Any%", pl: "60% / Każde%" },
        speed: "1.7 m/s",
        shortDesc: {
            en: "Flame = crucifix (4m). Every 3rd flame blown = hunt. Won't light fires.",
            pl: "Płomień = krucyfiks (4m). Każdy 3-ci płomień = polowanie. Nie zapala ogni.",
        },
        longDesc: {
            en: `<ul><li><strong>Flame Protection:</strong> Lit flame acts as crucifix with 4m range. Ghost blows flame instead of hunting.</li><li><strong>Third Flame Rule:</strong> Every 3rd flame blown triggers instant hunt (unless another flame nearby).</li><li><strong>Hunt Threshold:</strong> 60% standard, but can hunt at ANY sanity via flame mechanic.</li><li><strong>Never Lights:</strong> Cannot light candles/firelights.</li><li><strong>Test:</strong> Place crucifix + lit firelight on top. Let it blow out 3 times; hunts on 3rd = likely Onryo.</li></ul>`,
            pl: `<ul><li><strong>Ochrona Płomieni:</strong> Zapalony płomień działa jak krucyfiks z zasięgiem 4m. Duch zdmuchuje zamiast polować.</li><li><strong>Zasada 3 Płomieni:</strong> Każdy 3-ci zdmuchnięty płomień wywołuje natychmiastowe polowanie (chyba że inny płomień obok).</li><li><strong>Próg:</strong> 60% standardowo, ale może polować przy DOWOLNYM sanity przez mechanikę płomieni.</li><li><strong>Nie Zapala:</strong> Nie może zapalić świec/ogni.</li><li><strong>Test:</strong> Połóż krucyfiks + zapalony ogień na sobie. Pozwól zdmuchnąć 3 razy; polowanie przy 3-cim = prawdopodobnie Onryo.</li></ul>`,
        }
    },
    {
        name: "Phantom",
        evidences: ["Spirit Box", "D.O.T.S Projector", "Fingerprints"],
        guaranteed: null,
        huntSanity: "50%",
        speed: "1.7 m/s",
        shortDesc: {
            en: "2x sanity drain when looked at. Photo makes it vanish. Long invisibility (1-2s).",
            pl: "2x utrata sanity gdy patrzysz. Zdjęcie = znika. Długa niewidoczność (1-2s).",
        },
        longDesc: {
            en: `<ul><li><strong>Sanity Drain:</strong> 0.5% sanity per second while in heartbeat range during hunts and events (2x normal rate).</li><li><strong>Photo/Video Vanish:</strong> Taking photo or video makes it disappear instantly (including DOTS state). Hunt continues but ghost invisible.</li><li><strong>Photo Evidence:</strong> Will NOT appear in "Ghost" photos/videos. Still appears in "Translucent Ghost", "Shadow Ghost", "DOTS Ghost", and "Hunting Ghost" videos.</li><li><strong>Hunt Visibility:</strong> Less visible during hunts. Flashes visible every 1-2 seconds (vs 0.3-1s normal). Very hard to track visually.</li><li><strong>Roaming:</strong> Frequently roams toward players' locations.</li></ul>`,
            pl: `<ul><li><strong>Zabieranie Sanity:</strong> 0.5% sanity na sekundę w zasięgu bicia serca podczas polowań i eventów (2x norma).</li><li><strong>Zniknięcie po Zdjęciu:</strong> Zrobienie zdjęcia lub wideo sprawia że znika natychmiast (włącznie ze stanem DOTS). Polowanie trwa ale duch niewidoczny.</li><li><strong>Dowód Fotograficzny:</strong> NIE pojawi się w zdjęciach/filmach "Ghost". Nadal pojawia się w "Translucent Ghost", "Shadow Ghost", "DOTS Ghost" i "Hunting Ghost".</li><li><strong>Widoczność Polowania:</strong> Mniej widoczny podczas polowań. Mruga co 1-2 sekundy (zamiast 0.3-1s). Bardzo trudny do śledzenia wzrokiem.</li><li><strong>Wędrówki:</strong> Często wędruje w kierunku lokalizacji graczy.</li></ul>`,
        }

    },
    {
        name: "Poltergeist",
        evidences: ["Spirit Box", "Ghost Writing", "Fingerprints"],
        guaranteed: null,
        huntSanity: "50%",
        speed: "1.7 m/s",
        shortDesc: {
            en: "Throws multiple objects at once. 2% sanity per thrown item. 100% throw rate hunt.",
            pl: "Rzuca wieloma przedmiotami naraz. 2% sanity za przedmiot. 100% rzutów podczas polowania.",
        },
        longDesc: {
            en: `<ul><li><strong>Multi-Throw:</strong> Can throw multiple objects simultaneously (ability).</li><li><strong>Sanity Drain:</strong> 2% sanity drain per thrown object witnessed.</li><li><strong>Hunt Throwing:</strong> 100% chance to throw object every 0.5s during hunt (vs 50% normal). Creates chaos.</li><li><strong>Throw Distance:</strong> Can throw objects up to 2x further than other ghosts.</li><li><strong>Weakness:</strong> Powerless with no throwable objects nearby.</li></ul>`,
            pl: `<ul><li><strong>Multi-Rzut:</strong> Może rzucić wieloma przedmiotami jednocześnie (zdolność).</li><li><strong>Zabieranie Sanity:</strong> 2% sanity za każdy widziany rzucony przedmiot.</li><li><strong>Rzuty Polowania:</strong> 100% szans na rzut co 0.5s podczas polowania (zamiast 50%). Tworzy chaos.</li><li><strong>Odległość Rzutu:</strong> Może rzucać przedmioty do 2x dalej niż inne duchy.</li><li><strong>Słabość:</strong> Bezsilny bez przedmiotów do rzucania w pobliżu.</li></ul>`,
        }

    },
    {
        name: "Raiju",
        evidences: ["EMF 5", "D.O.T.S Projector", "Ghost Orb"],
        guaranteed: null,
        huntSanity: "50% / 65%",
        speed: "1.7 / 2.5 m/s",
        shortDesc: {
            en: "2.5 m/s + 65% threshold near electronics. 15m interference range.",
            pl: "2.5 m/s + 65% próg przy elektronice. 15m zasięg zakłóceń.",
        },
        longDesc: {
            en: `<ul><li><strong>Electronics Boost:</strong> 2.5 m/s speed + 65% hunt threshold when near active electronics (6-10m range).</li><li><strong>Interference:</strong> Disrupts electronics from 15 meters (vs 10m normal).</li><li><strong>Standard Stats:</strong> 1.7 m/s + 50% threshold without electronics.</li><li><strong>Test:</strong> EMF 5 + Ghost Orb on Nightmare = Raiju (Obake has guaranteed UV).</li><li><strong>Strategy:</strong> Turn OFF equipment when hiding.</li></ul>`,
            pl: `<ul><li><strong>Boost Elektroniki:</strong> 2.5 m/s prędkość + 65% próg polowania przy aktywnej elektronice (zasięg 6-10m).</li><li><strong>Zakłócenia:</strong> Zakłóca elektronikę z 15 metrów (zamiast 10m).</li><li><strong>Standardowe Statystyki:</strong> 1.7 m/s + 50% próg bez elektroniki.</li><li><strong>Test:</strong> EMF 5 + Ghost Orb na Nightmare = Raiju (Obake ma gwarantowane UV).</li><li><strong>Strategia:</strong> WYŁĄCZ sprzęt podczas chowania się.</li></ul>`,
        }

    },
    {
        name: "Revenant",
        evidences: ["Ghost Writing", "Ghost Orb", "Freezing Temperatures"],
        guaranteed: null,
        huntSanity: "50%",
        speed: "1.0 / 3.0 m/s",
        shortDesc: {
            en: "3.0 m/s when chasing, 1.0 m/s when roaming. Instant speed change.",
            pl: "3.0 m/s w pościgu, 1.0 m/s podczas wędrówki. Natychmiastowa zmiana prędkości.",
        },
        longDesc: {
            en: `<ul><li><strong>Chase Speed:</strong> 3.0 m/s when player detected or moving to last known location.</li><li><strong>Roam Speed:</strong> 1.0 m/s when no target detected (extremely slow).</li><li><strong>Speed Change:</strong> Instantly switches between speeds. Slows over ~2.7s after reaching last known position.</li><li><strong>Strategy:</strong> Break line-of-sight to make it slow down instantly.</li></ul>`,
            pl: `<ul><li><strong>Prędkość Pościgu:</strong> 3.0 m/s gdy gracz wykryty lub idzie do ostatniej znanej pozycji.</li><li><strong>Prędkość Wędrówki:</strong> 1.0 m/s gdy brak celu (ekstremalnie wolny).</li><li><strong>Zmiana Prędkości:</strong> Natychmiastowe przełączanie między prędkościami. Zwalnia przez ~2.7s po dotarciu do ostatniej pozycji.</li><li><strong>Strategia:</strong> Złam linię wzroku aby natychmiast zwolnić.</li></ul>`,
        }

    },
    {
        name: "Shade",
        evidences: ["EMF 5", "Ghost Writing", "Freezing Temperatures"],
        guaranteed: null,
        huntSanity: "35%",
        speed: "1.7 m/s",
        shortDesc: {
            en: "Won't hunt if player in room. 35% threshold. Low activity. Shadow events.",
            pl: "Nie poluje gdy gracz w pokoju. 35% próg. Niska aktywność. Eventy cienia.",
        },
        longDesc: {
            en: `<ul><li><strong>Extreme Shyness:</strong> Cannot hunt, interact with items, or perform events if at least one player in same room.</li><li><strong>Hunt Threshold:</strong> 35% sanity (very low).</li><li><strong>Item Limitation:</strong> Cannot do "raise and throw at player" item interaction. Normal throw only.</li><li><strong>Event Limitation:</strong> Cannot perform singing ghost events.</li><li><strong>Shadow Summon:</strong> ONLY ghost that can appear as shadow ghost model during summoning circle, music box, and monkey paw events (unique identifier).</li><li><strong>Activity:</strong> Very low interaction rate when players nearby. Leave room to trigger activity.</li></ul>`,
            pl: `<ul><li><strong>Ekstremalna Nieśmiałość:</strong> Nie może polować, wchodzić w interakcje z przedmiotami ani robić eventów gdy przynajmniej jeden gracz w pokoju.</li><li><strong>Próg:</strong> 35% sanity (bardzo niski).</li><li><strong>Ograniczenie Przedmiotów:</strong> Nie może wykonać interakcji "podniesienia i rzucenia w gracza". Tylko zwykłe rzuty.</li><li><strong>Ograniczenie Eventów:</strong> Nie może śpiewać podczas eventów.</li><li><strong>Cień przy Przywołaniu:</strong> JEDYNY duch który może pojawić się jako model ducha-cienia podczas summoning circle, music box i monkey paw events (unikalny identyfikator).</li><li><strong>Aktywność:</strong> Bardzo niska interakcja gdy gracze w pobliżu. Opuść pokój aby wywołać aktywność.</li></ul>`,
        }

    },
    {
        name: "Spirit",
        evidences: ["EMF 5", "Ghost Writing", "Spirit Box"],
        guaranteed: null,
        huntSanity: "50%",
        speed: "1.7 m/s",
        shortDesc: {
            en: "Generic ghost. 180s smudge prevention (3 minutes). No special traits.",
            pl: "Zwykły duch. 180s blokada kadzidłem (3 minuty). Brak cech specjalnych.",
        },
        longDesc: {
            en: `<ul><li><strong>Smudge Strength:</strong> Incense prevents hunts for 180 seconds (vs 90s normal, 2x duration).</li><li><strong>Hunt Threshold:</strong> 50% sanity.</li><li><strong>No Traits:</strong> No other special abilities or weaknesses. The "default" baseline ghost.</li><li><strong>Test:</strong> If hunts before 180s after smudge, NOT Spirit.</li></ul>`,
            pl: `<ul><li><strong>Siła Kadzidła:</strong> Kadzidło blokuje polowania na 180 sekund (zamiast 90s, 2x dłużej).</li><li><strong>Próg:</strong> 50% sanity.</li><li><strong>Brak Cech:</strong> Brak innych specjalnych zdolności czy słabości. "Domyślny" bazowy duch.</li><li><strong>Test:</strong> Jeśli poluje przed 180s po kadzidle, NIE Spirit.</li></ul>`,
        }

    },
    {
        name: "Thaye",
        evidences: ["Ghost Writing", "Ghost Orb", "D.O.T.S Projector"],
        guaranteed: null,
        huntSanity: "75% -> 15%",
        speed: "2.75 -> 1.0 m/s",
        shortDesc: {
            en: "Ages over time. Young: 2.75 m/s + 75%. Old: 1.0 m/s + 15%. No LOS boost.",
            pl: "Starzeje się. Młody: 2.75 m/s + 75%. Stary: 1.0 m/s + 15%. Brak boost LOS.",
        },
        longDesc: {
            en: `<ul><li><strong>Aging:</strong> Ages every 1-2 minutes when player nearby. 10 stages (0=young, 10=old).</li><li><strong>Young Stats:</strong> 2.75 m/s speed, 75% hunt threshold, 2x activity. Extremely dangerous early.</li><li><strong>Old Stats:</strong> 1.0 m/s speed, 15% hunt threshold, 0.5x activity. Harmless late game.</li><li><strong>No LOS:</strong> Does NOT speed up with line-of-sight. Speed purely age-based.</li><li><strong>Test:</strong> Ouija Board age question. Activity drastically decreases over time. Writing + DOTS on Nightmare = Thaye (Deogen has guaranteed Spirit Box).</li></ul>`,
            pl: `<ul><li><strong>Starzenie:</strong> Starzeje się co 1-2 minuty gdy gracz w pobliżu. 10 etapów (0=młody, 10=stary).</li><li><strong>Młode Statystyki:</strong> 2.75 m/s, próg 75%, aktywność 2x. Ekstremalnie niebezpieczny na początku.</li><li><strong>Stare Statystyki:</strong> 1.0 m/s, próg 15%, aktywność 0.5x. Nieszkodliwy późno.</li><li><strong>Brak LOS:</strong> NIE przyspiesza z linią wzroku. Prędkość tylko od wieku.</li><li><strong>Test:</strong> Ouija Board pytanie o wiek. Aktywność drastycznie spada. Writing + DOTS na Nightmare = Thaye (Deogen ma gwarantowany Spirit Box).</li></ul>`,
        }

    },
    {
        name: "The Twins",
        evidences: ["EMF 5", "Spirit Box", "Freezing Temperatures"],
        guaranteed: null,
        huntSanity: "50%",
        speed: "1.5 / 1.9 m/s",
        shortDesc: {
            en: "Two interaction ranges. Main: 1.53 m/s. Decoy: 1.87 m/s. Simultaneous activity.",
            pl: "Dwa zasięgi interakcji. Główny: 1.53 m/s. Przynęta: 1.87 m/s. Jednoczesna aktywność.",
        },
        longDesc: {
            en: `<ul><li><strong>Dual Ranges:</strong> Main (2.12m) + Decoy (8.48m) interaction ranges. Can interact almost simultaneously (<1s apart).</li><li><strong>Hunt Speed:</strong> 50% chance Main (1.53 m/s) or Decoy (1.87 m/s) starts hunt from different locations.</li><li><strong>Evidence:</strong> Only Main gives all evidence. Decoy gives EMF but NO Spirit Box.</li><li><strong>Test:</strong> Two EMF readings in distant rooms within 1 second = likely Twins. Speed variation between hunts.</li><li><strong>Crucifix:</strong> Only works from Main's actual position (Decoy hunts can ignore crucifixes).</li></ul>`,
            pl: `<ul><li><strong>Podwójne Zasięgi:</strong> Główny (2.12m) + Przynęta (8.48m) zasięgi interakcji. Mogą wchodzić w interakcje prawie jednocześnie (<1s różnicy).</li><li><strong>Prędkość Polowania:</strong> 50% szans Główny (1.53 m/s) lub Przynęta (1.87 m/s) zaczyna polowanie z różnych miejsc.</li><li><strong>Dowody:</strong> Tylko Główny daje wszystkie dowody. Przynęta daje EMF ale NIE Spirit Box.</li><li><strong>Test:</strong> Dwa odczyty EMF w odległych pokojach w ciągu 1 sekundy = prawdopodobnie Twins. Zmienność prędkości między polowaniami.</li><li><strong>Krucyfiks:</strong> Działa tylko z rzeczywistej pozycji Głównego (polowania Przynęty mogą ignorować krucyfiksy).</li></ul>`,
        }
    },
    {
        name: "Wraith",
        evidences: ["EMF 5", "Spirit Box", "D.O.T.S Projector"],
        guaranteed: null,
        huntSanity: "50%",
        speed: "1.7 m/s",
        shortDesc: {
            en: "No footprints in salt. Teleports to players (EMF 2/5). Cannot be tracked.",
            pl: "Brak śladów w soli. Teleportuje się do graczy (EMF 2/5). Nie można śledzić.",
        },
        longDesc: {
            en: `<ul><li><strong>No Salt Prints:</strong> Never leaves UV footprints in salt (hovers/floats). Stepping in salt generates activity but no prints.</li><li><strong>Teleport:</strong> Can teleport to random player when not hunting/eventing, leaving EMF 2/5 reading.</li><li><strong>Test:</strong> Place salt under ghost during event. If walks over without disturbing = Wraith.</li></ul>`,
            pl: `<ul><li><strong>Brak Śladów w Soli:</strong> Nigdy NIE zostawia śladów UV w soli (unosi się/lata). Deptanie po soli generuje aktywność ale brak śladów.</li><li><strong>Teleportacja:</strong> Może się teleportować do losowego gracza gdy nie poluje/nie robi eventu, zostawiając EMF 2/5.</li><li><strong>Test:</strong> Połóż sól pod duchem podczas eventu. Jeśli przechodzi nie zakłócając = Wraith.</li></ul>`,
        }

    },
    {
        name: "Yokai",
        evidences: ["Spirit Box", "Ghost Orb", "D.O.T.S Projector"],
        guaranteed: null,
        huntSanity: "50% / 80%",
        speed: "1.7 m/s",
        shortDesc: {
            en: "Voice triggers hunt at 80%. Deaf during hunt (2.5m hearing). Talkative = active.",
            pl: "Głos wywołuje polowanie przy 80%. Głuchy podczas polowania (2.5m słuch). Rozmowy = aktywny.",
        },
        longDesc: {
            en: `<ul><li><strong>Voice Trigger:</strong> Talking in same room allows hunt at 80% sanity (vs 50% normal).</li><li><strong>Hunt Deafness:</strong> Can only hear voice/electronics from 2.5 meters during hunt (vs 7.5-9m normal).</li><li><strong>Activity:</strong> Increased activity when players talking nearby.</li><li><strong>Strategy:</strong> Can sprint away shouting and it won't hear unless very close.</li></ul>`,
            pl: `<ul><li><strong>Wyzwalacz Głosowy:</strong> Rozmowa w tym samym pokoju pozwala na polowanie przy 80% sanity (zamiast 50%).</li><li><strong>Głuchota Polowania:</strong> Słyszy głos/elektronikę tylko z 2.5 metra podczas polowania (zamiast 7.5-9m).</li><li><strong>Aktywność:</strong> Zwiększona aktywność gdy gracze rozmawiają w pobliżu.</li><li><strong>Strategia:</strong> Możesz uciekać krzycząc i nie usłyszy chyba że bardzo blisko.</li></ul>`,
        }
    },
    {
        name: "Yurei",
        evidences: ["Ghost Orb", "Freezing Temperatures", "D.O.T.S Projector"],
        guaranteed: null,
        huntSanity: "50%",
        speed: "1.7 m/s",
        shortDesc: {
            en: "Slams doors (12.5% sanity drain). Smudge traps 90s. Can close front door.",
            pl: "Trzaska drzwiami (12.5% sanity). Kadzidło uwięzi na 90s. Może zamknąć drzwi wejściowe.",
        },
        longDesc: {
            en: `<ul><li><strong>Door Slam:</strong> Fully closes doors (not just push), draining 12.5% sanity from players in room. Unique ability.</li><li><strong>Front Door:</strong> ONLY ghost that can interact with front/exit door outside hunts/events (unique tell).</li><li><strong>Smudge Trap:</strong> Incense traps in current room for 90s (stops all roaming).</li><li><strong>Test:</strong> Doors SLAMMING shut + front door activity = likely Yurei.</li></ul>`,
            pl: `<ul><li><strong>Trzaśnięcie Drzwiami:</strong> Całkowicie zamyka drzwi (nie tylko popycha), zabierając 12.5% sanity graczom w pokoju. Unikalna zdolność.</li><li><strong>Drzwi Wejściowe:</strong> JEDYNY duch który może wchodzić w interakcje z drzwiami wejściowymi poza polowaniami/eventami (unikalny znak).</li><li><strong>Pułapka Kadzidła:</strong> Kadzidło uwięzi w obecnym pokoju na 90s (zatrzymuje wędrówki).</li><li><strong>Test:</strong> Drzwi TRZASKAJĄCE + aktywność przy drzwiach wejściowych = prawdopodobnie Yurei.</li></ul>`,
        }
    }
];
