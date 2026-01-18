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
        huntSanity: { en: "50% (Target)", pl: "50% (Celu)", ru: "50% (Цели)" },
        speed: { en: "1.7 m/s", pl: "1.7 m/s", ru: "1.7 м/с" },
        shortDesc: {
            en: "Targets ONE player. Wails on Parabolic Mic.",
            pl: "Poluje na JEDNEGO gracza. Krzyczy na mikrofonie parabolicznym.",
            ru: "Охотится на ОДНОГО игрока. Кричит в микрофон."
        },
        longDesc: {
            en: `<ul><li><strong>Targeting:</strong> Chooses one player (the 'Obsession'). Ignores others during hunts unless the target is outside.</li><li><strong>Hunt Threshold:</strong> Checks the <strong>Target's Sanity</strong> only (>50%). Team average irrelevant.</li><li><strong>Ability:</strong> Frequently roams directly to the target's location.</li><li><strong>Unique Sound:</strong> Has a 33% chance to produce a unique screaming/wailing sound on the Parabolic Microphone.</li><li><strong>Ghost Events:</strong> Favors 'singing' ghost events over other types.</li><li><strong>Name:</strong> Cannot have a <strong>male name</strong> (Must be female).</li></ul>`,
            pl: `<ul><li><strong>Obsesja:</strong> Wybiera jednego gracza. Ignoruje innych podczas polowania (chyba że cel jest poza domem).</li><li><strong>Polowanie:</strong> Liczy się tylko Sanity CELU (50%). Średnia drużyny nie ma znaczenia.</li><li><strong>Zdolność:</strong> Często wędruje bezpośrednio do pozycji swojego celu.</li><li><strong>Unikalny Dźwięk:</strong> Ma 33% szans na wydanie unikalnego krzyku/zawodzenia na mikrofonie parabolicznym.</li><li><strong>Ghost Eventy:</strong> Preferuje eventy typu 'śpiew' nad innymi.</li><li><strong>Imię:</strong> Nie może mieć <strong>męskiego imienia</strong> (musi być kobiece).</li></ul>`,
            ru: `<ul><li><strong>Цель:</strong> Выбирает одного игрока ('Одержимость'). Игнорирует других во время охоты, если цель в доме.</li><li><strong>Порог охоты:</strong> Учитывает рассудок <strong>ТОЛЬКО Цели</strong> (>50%). Средний рассудок не важен.</li><li><strong>Способность:</strong> Часто бродит прямо к местоположению своей цели.</li><li><strong>Уникальный звук:</strong> Имеет 33% шанс издать уникальный крик/вой в направленный микрофон.</li><li><strong>Ивенты:</strong> Предпочитает 'поющие' ивенты другим типам.</li><li><strong>Имя:</strong> Не может иметь <strong>мужского имени</strong> (всегда женское).</li></ul>`
        }
    },
    {
        name: "Demon",
        evidences: ["Ghost Writing", "Freezing Temperatures", "Fingerprints"],
        guaranteed: null,
        huntSanity: { en: "70% / 100%", pl: "70% / 100%", ru: "70% / 100%" },
        speed: "1.7 m/s",
        shortDesc: {
            en: "Aggressive. Hunts very often. Crucifix ineffective.",
            pl: "Agresywny. Poluje bardzo często. Krucyfiks działa słabiej.",
            ru: "Агрессивный. Часто охотится. Распятие слабее."
        },
        longDesc: {
            en: `<ul><li><strong>Aggression:</strong> Cooldown between hunts is only <strong>20 seconds</strong> (vs 25s).</li><li><strong>Ability:</strong> Rare ability to hunt at <strong>100% Sanity</strong>.</li><li><strong>Weakness:</strong> Crucifixes work at <strong>5 meters</strong> (vs 3m). Smudge sticks block hunting for only <strong>60s</strong> (vs 90s).</li></ul>`,
            pl: `<ul><li><strong>Agresja:</strong> Cooldown między polowaniami to tylko <strong>20 sekund</strong> (norma 25s).</li><li><strong>Zdolność:</strong> Może użyć zdolności do polowania przy <strong>100% Sanity</strong>.</li><li><strong>Słabość:</strong> Krucyfiksy działają na <strong>5 metrów</strong> (zamiast 3m). Kadzidło blokuje go tylko na <strong>60s</strong> (zamiast 90s).</li></ul>`,
            ru: `<ul><li><strong>Агрессия:</strong> Кулдаун между охотами всего <strong>20 секунд</strong> (обычно 25с).</li><li><strong>Способность:</strong> Редкая способность начать охоту при <strong>100% рассудка</strong>.</li><li><strong>Слабость:</strong> Распятие работает на <strong>5 метров</strong> (обычно 3м). Благовоние блокирует охоту только на <strong>60с</strong> (обычно 90с).</li></ul>`
        }
    },
    {
        name: "Deogen",
        evidences: ["Spirit Box", "Ghost Writing", "D.O.T.S Projector"],
        guaranteed: "Spirit Box",
        huntSanity: "40%",
        speed: { en: "3.0 <-> 0.4 m/s", pl: "3.0 <-> 0.4 m/s", ru: "3.0 <-> 0.4 м/с" },
        shortDesc: {
            en: "Always knows where you are. Fast far, slow close. Heavy breathing Box.",
            pl: "Zawsze wie gdzie jesteś. Szybki daleko, wolny blisko. Sapie do Spirit Boxa.",
            ru: "Всегда знает, где вы. Быстрый далеко, медленный близко. Дышит в радио."
        },
        longDesc: {
            en: `<ul><li><strong>No Hiding:</strong> You CANNOT hide. It constantly pathfinds to the nearest player.</li><li><strong>Speed:</strong> Sprints at <strong>3.0 m/s</strong> when far (>6m), slows to <strong>0.4 m/s</strong> (snail pace) when close (<2.5m).</li><li><strong>Spirit Box:</strong> 33% chance for a unique 'heavy breathing' response if standing within 1m of the ghost.</li><li><strong>Strategy:</strong> Loop it around a table/island. Do not corner yourself. The speed change is dramatic and predictable.</li></ul>`,
            pl: `<ul><li><strong>Brak Kryjówek:</strong> NIE MOŻESZ się schować. Zawsze zna twoją pozycję.</li><li><strong>Prędkość:</strong> Biegnie <strong>3.0 m/s</strong> gdy daleko (>6m), zwalnia do <strong>0.4 m/s</strong> (żółw) gdy blisko (<2.5m).</li><li><strong>Spirit Box:</strong> 33% szans na unikalne 'ciężkie sapanie' jeśli stoisz przy nim (1m).</li><li><strong>Strategia:</strong> Loopuj go (kręć kółka) wokół stołu/wyspy. Nie daj się zapędzić w kozi róg. Zmiana prędkości jest dramatyczna i przewidywalna.</li></ul>`,
            ru: `<ul><li><strong>Не спрятаться:</strong> Вы НЕ МОЖЕТЕ спрятаться. Он постоянно идет к ближайшему игроку.</li><li><strong>Скорость:</strong> Бежит <strong>3.0 м/с</strong> когда далеко (>6м), замедляется до <strong>0.4 м/с</strong> (черепаха) когда близко (<2.5м).</li><li><strong>Радиоприемник:</strong> 33% шанс на уникальное 'тяжелое дыхание', если стоять в 1м от призрака.</li><li><strong>Стратегия:</strong> Водите его вокруг стола/острова. Не загоняйте себя в угол. Изменение скорости драматическое и предсказуемое.</li></ul>`
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
            ru: "Лазер только через камеру + никого рядом. Не бродит."
        },
        longDesc: {
            en: `<ul><li><strong>D.O.T.S.:</strong> ONLY visible through a <strong>Video Camera</strong>, and ONLY when <strong>nobody is in the room</strong>.</li><li><strong>Roaming:</strong> Cannot wander more than 5 meters from its favorite room. Changes favorite room very rarely.</li><li><strong>Strategy:</strong> If you see DOTS with your naked eye, it is NOT a Goryo.</li></ul>`,
            pl: `<ul><li><strong>D.O.T.S.:</strong> Widoczne TYLKO przez <strong>Kamerę Video</strong> i TYLKO gdy <strong>nikogo nie ma w pokoju</strong>.</li><li><strong>Wędrówki:</strong> Nie oddala się bardziej niż 5m od swojego pokoju. Prawie nigdy nie zmienia pokoju.</li><li><strong>Uwaga:</strong> Jeśli widzisz DOTS gołym okiem, to NIE JEST Goryo.</li></ul>`,
            ru: `<ul><li><strong>Лазер:</strong> Виден ТОЛЬКО через <strong>видеокамеру</strong>, и ТОЛЬКО когда <strong>никого нет в комнате</strong>.</li><li><strong>Блуждание:</strong> Не отходит дальше 5 метров от любимой комнаты. Очень редко меняет комнату.</li><li><strong>Важно:</strong> Если вы видите лазер глазами, это НЕ Горё.</li></ul>`
        }
    },
    {
        name: "Hantu",
        evidences: ["Freezing Temperatures", "Ghost Orb", "Fingerprints"],
        guaranteed: "Freezing Temperatures",
        huntSanity: "50%",
        speed: { en: "1.4 - 2.7 m/s", pl: "1.4 - 2.7 m/s", ru: "1.4 - 2.7 м/с" },
        shortDesc: {
            en: "Fast in cold, slow in warm. Freezing breath during hunt.",
            pl: "Szybki w zimnie, wolny w cieple. Mroźny oddech podczas polowania.",
            ru: "Быстрый в холоде, медленный в тепле. Пар изо рта на охоте."
        },
        longDesc: {
            en: `<ul><li><strong>Temperature Speed:</strong> 1.4 m/s in warm rooms (>15°C) up to 2.7 m/s in freezing rooms. DOES NOT accelerate from Line-of-Sight.</li><li><strong>Breath:</strong> Emits visible freezing breath in any room while hunting if the breaker is off.</li><li><strong>Weakness:</strong> Cannot turn ON the fuse box. Keeping the breaker ON slows it down.</li></ul>`,
            pl: `<ul><li><strong>Prędkość:</strong> Zależy od temperatury. 1.4 m/s w cieple (>15°C) do 2.7 m/s w mrozie. NIE przyspiesza gdy cię widzi (brak LOS boost).</li><li><strong>Oddech:</strong> Podczas polowania widać jego mroźny oddech (jeśli prąd wyłączony).</li><li><strong>Słabość:</strong> Nie może włączyć korków. Trzymaj prąd WŁĄCZONY, aby go spowolnić.</li></ul>`,
            ru: `<ul><li><strong>Скорость:</strong> Зависит от температуры. 1.4 м/с в тепле (>15°C) до 2.7 м/с в холоде. НЕ ускоряется при виде игрока.</li><li><strong>Дыхание:</strong> Во время охоты виден пар изо рта (если выключен щиток).</li><li><strong>Слабость:</strong> Не может включить щиток. Держите щиток ВКЛЮЧЕННЫМ, чтобы его замедлить.</li></ul>`
        }
    },
    {
        name: "Jinn",
        evidences: ["EMF 5", "Freezing Temperatures", "Fingerprints"],
        guaranteed: null,
        huntSanity: "50%",
        speed: { en: "1.7 / 2.5 m/s", pl: "1.7 / 2.5 m/s", ru: "1.7 / 2.5 м/с" },
        shortDesc: {
            en: "Territorial. Fast if breaker is ON and seeing you.",
            pl: "Terytorialny. Szybki jeśli prąd jest ON i cię widzi.",
            ru: "Территориальный. Быстрый, если щиток ВКЛ и видит вас."
        },
        longDesc: {
            en: `<ul><li><strong>Chase Speed:</strong> Instantly accelerates to <strong>2.5 m/s</strong> if it has Line-of-Sight and is >2m away (requires Fuse Box ON). Slows down when close.</li><li><strong>Ability:</strong> Can zap 25% sanity from players within 3m, leaving an EMF 2 reading at the Fuse Box.</li><li><strong>Weakness:</strong> The Jinn <strong>cannot turn off the fuse box</strong>. If the breaker turns off, it wasn't a Jinn (or too many lights were on).</li></ul>`,
            pl: `<ul><li><strong>Prędkość:</strong> Natychmiast przyspiesza do <strong>2.5 m/s</strong> jeśli cię widzi i jest >2m od ciebie (wymaga Włączonego Prądu).</li><li><strong>Zdolność:</strong> Może zabrać 25% sanity graczom w pobliżu.</li><li><strong>Słabość:</strong> Jinn <strong>nie może wyłączyć korków</strong>. Jeśli prąd wysadziło (nie przez nadmiar świateł), to nie Jinn.</li></ul>`,
            ru: `<ul><li><strong>Скорость:</strong> Мгновенно ускоряется до <strong>2.5 м/с</strong>, если видит вас и находится >2м (щиток должен быть ВКЛ). Замедляется вблизи.</li><li><strong>Способность:</strong> Может снять 25% рассудка игрокам рядом, оставляя ЭМП 2 на щитке.</li><li><strong>Слабость:</strong> Джинн <strong>не может выключить щиток</strong>. Если щиток выключился сам (не из-за перегрузки), это не Джинн.</li></ul>`
        }
    },
    {
        name: "Mare",
        evidences: ["Spirit Box", "Ghost Orb", "Ghost Writing"],
        guaranteed: null,
        huntSanity: { en: "60% (Dark) / 40% (Light)", pl: "60% (Ciemno) / 40% (Jasno)", ru: "60% (Тьма) / 40% (Свет)" },
        speed: "1.7 m/s",
        shortDesc: {
            en: "Loves darkness. Hunts earlier in dark. Explodes lights.",
            pl: "Kocha ciemność. Poluje wcześniej w ciemności. Wysadza żarówki.",
            ru: "Любит темноту. Охотится раньше в темноте. Взрывает лампочки."
        },
        longDesc: {
            en: `<ul><li><strong>Hunt Threshold:</strong> <strong>60%</strong> if room is dark, <strong>40%</strong> if room is lit.</li><li><strong>Lights:</strong> Cannot turn ON lights. Has a high chance to immediately turn a light OFF after you turn it ON.</li><li><strong>Event:</strong> Can interact with a light switch to explode the bulb (permanent break).</li></ul>`,
            pl: `<ul><li><strong>Próg Polowania:</strong> <strong>60%</strong> w ciemnym pokoju, <strong>40%</strong> w oświetlonym.</li><li><strong>Światło:</strong> Nie potrafi włączyć światła. Często wyłącza światło tuż po tym jak je włączysz.</li><li><strong>Zdarzenie:</strong> Może sprawić, że żarówka eksploduje (trwale zniszczona).</li></ul>`,
            ru: `<ul><li><strong>Порог охоты:</strong> <strong>60%</strong> в темноте, <strong>40%</strong> при свете.</li><li><strong>Свет:</strong> Не может включить свет. Чаще всего выключает свет сразу после того, как вы его включите.</li><li><strong>Событие:</strong> Может взорвать лампочку (она ломается навсегда).</li></ul>`
        }
    },
    {
        name: "The Mimic",
        evidences: ["Spirit Box", "Freezing Temperatures", "Fingerprints", "Ghost Orb"],
        guaranteed: "Ghost Orb",
        huntSanity: { en: "Variable", pl: "Zmienne", ru: "Разное" },
        speed: { en: "Variable", pl: "Zmienna", ru: "Разная" },
        shortDesc: {
            en: "Copies ANY ghost. Always has 'fake' Orb evidence.",
            pl: "Kopiuje KAŻDEGO ducha. Zawsze ma fałszywe Orby.",
            ru: "Копирует КОГО УГОДНО. Всегда имеет 'ложный' огонек."
        },
        longDesc: {
            en: `<ul><li><strong>Copycat:</strong> Mimics the traits, abilities, and stats of any other ghost. Switches ghost type every few minutes.</li><li><strong>Delay:</strong> It takes <strong>1 minute</strong> after opening the van door before it starts mimicking abilities.</li><li><strong>Fake Evidence:</strong> ALWAYS shows <strong>Ghost Orbs</strong> as a 4th evidence.</li></ul>`,
            pl: `<ul><li><strong>Kopiowanie:</strong> Naśladuje cechy i statystyki innego ducha. Zmienia naśladowanego ducha co kilka minut.</li><li><strong>Opóźnienie:</strong> Zaczyna naśladować zdolności dopiero <strong>minutę po otwarciu drzwi ciężarówki</strong>.</li><li><strong>Fałszywy Dowód:</strong> ZAWSZE pokazuje <strong>Orby</strong> jako 4-ty, dodatkowy dowód.</li></ul>`,
            ru: `<ul><li><strong>Подражатель:</strong> Копирует черты, способности и статы любого призрака. Меняет тип раз в несколько минут.</li><li><strong>Задержка:</strong> Начинает копировать способности через <strong>1 минуту</strong> после открытия дверей фургона.</li><li><strong>Ложная улика:</strong> ВСЕГДА показывает <strong>Призрачный огонек</strong> как 4-ю, дополнительную улику.</li></ul>`
        }
    },
    {
        name: "Moroi",
        evidences: ["Spirit Box", "Ghost Writing", "Freezing Temperatures"],
        guaranteed: "Spirit Box",
        huntSanity: "50%",
        speed: { en: "1.5 - 2.25 m/s", pl: "1.5 - 2.25 m/s", ru: "1.5 - 2.25 м/с" },
        shortDesc: {
            en: "Curses you (2x sanity drain). Faster at low sanity.",
            pl: "Rzuca klątwę (2x utrata sanity). Szybszy przy niskim sanity.",
            ru: "Проклинает (трата рассудка x2). Быстрее при низком рассудке."
        },
        longDesc: {
            en: `<ul><li><strong>The Curse:</strong> Spirit Box response or Parabolic Mic whisper causes the player to lose sanity 2x faster. Cured by Sanity Pills.</li><li><strong>Speed:</strong> Inversely proportional to average sanity. 1.5 m/s at high sanity, <strong>2.25 m/s</strong> at 0% sanity. With LOS boost can reach up to <strong>3.71 m/s</strong>!</li><li><strong>Blindness:</strong> Smudge sticks blind it for <strong>12 seconds</strong> during a hunt (vs 6s normal).</li><li><strong>Strategy:</strong> Take sanity pills immediately after curse. Extremely dangerous at low sanity due to speed.</li></ul>`,
            pl: `<ul><li><strong>Klątwa:</strong> Odpowiedź na Spirit Box lub szept na mikrofonie rzuca klątwę (tracisz sanity 2x szybciej). Pigułki leczą klątwę.</li><li><strong>Prędkość:</strong> Im mniej sanity, tym jest szybszy. 1.5 m/s (dużo sanity) -> <strong>2.25 m/s</strong> (0% sanity). Z przyspieszeniem LOS może osiągnąć <strong>3.71 m/s</strong>!</li><li><strong>Ślepota:</strong> Kadzidło oślepia go na <strong>12 sekund</strong> podczas polowania (norma 6s).</li><li><strong>Strategia:</strong> Weź pigułki natychmiast po klątwie. Ekstremalnie niebezpieczny przy niskim sanity przez prędkość.</li></ul>`,
            ru: `<ul><li><strong>Проклятие:</strong> Ответ в Радио или шепот в микрофон проклинает (теряете рассудок в 2 раза быстрее). Лечится таблетками.</li><li><strong>Скорость:</strong> Обратно пропорциональна рассудку. 1.5 м/с (высокий рассудок) -> <strong>2.25 м/с</strong> (0%). С ускорением LOS может достичь <strong>3.71 м/с</strong>!</li><li><strong>Слепота:</strong> Благовоние ослепляет его на <strong>12 секунд</strong> во время охоты (обычно 6с).</li><li><strong>Стратегия:</strong> Принимайте таблетки сразу после проклятия. Крайне опасен при низком рассудке из-за скорости.</li></ul>`
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
            pl: "Ciche kroki podczas polowania. Głośny na mikrofonie.",
            ru: "Тихие шаги во время охоты. Шумный в микрофон."
        },
        longDesc: {
            en: `<ul><li><strong>Stealth Hunt:</strong> Footsteps are completely silent beyond <strong>12 meters</strong>. Flashlight flickering is still visible.</li><li><strong>Activity:</strong> Makes paranormal sounds on the Parabolic Mic frequently (every <strong>64-127 seconds</strong>).</li><li><strong>Test:</strong> If you hear footsteps only when the ghost is basically on top of you, it's a Myling.</li></ul>`,
            pl: `<ul><li><strong>Ciche Kroki:</strong> Podczas polowania nie słychać jego kroków z odległości większej niż <strong>12 metrów</strong>.</li><li><strong>Aktywność:</strong> Wydaje dźwięki na mikrofonie parabolicznym bardzo często (co <strong>64-127 sekund</strong>).</li><li><strong>Test:</strong> Jeśli słyszysz kroki tylko gdy duch jest bardzo blisko, to Myling.</li></ul>`,
            ru: `<ul><li><strong>Тихая охота:</strong> Шаги не слышны дальше <strong>12 метров</strong>. Моргание фонарика все еще видно.</li><li><strong>Активность:</strong> Издает звуки в направленный микрофон очень часто.</li><li><strong>Тест:</strong> Если слышите шаги только когда призрак совсем рядом, это Майлинг.</li></ul>`
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
            pl: "Zmiennokształtny. 6 palców. Zmienia model podczas polowania.",
            ru: "Оборотень. 6 пальцев. Меняет модель."
        },
        longDesc: {
            en: `<ul><li><strong>Fingerprints:</strong> 16.7% chance to leave <strong>6-finger handprints</strong> (unique). 25% chance to leave NO fingerprints at all on interactions.</li><li><strong>Shapeshift:</strong> During a hunt, has a 6.66% chance per flicker to change into a different ghost model for one frame.</li><li><strong>Ability:</strong> Can decrease timer of existing fingerprints by half (disappear faster).</li><li><strong>Strategy:</strong> Check fingerprints carefully. 6 fingers = instant Obake confirmation. Missing prints despite interactions = possible Obake.</li></ul>`,
            pl: `<ul><li><strong>Odciski:</strong> 16.7% szans na odcisk z <strong>6 palcami</strong> (unikalne). 25% szans na BRAK odcisku pomimo interakcji.</li><li><strong>Zmiana Formy:</strong> Podczas polowania ma 6.66% szans przy każdym mrugnięciu na zmianę modelu ducha na inny (na ułamek sekundy).</li><li><strong>Zdolność:</strong> Może skrócić czas trwania odcisków o połowę (znikają szybciej).</li><li><strong>Strategia:</strong> Sprawdzaj odciski dokładnie. 6 palców = natychmiastowe potwierdzenie Obake. Brak odcisków mimo interakcji = możliwy Obake.</li></ul>`,
            ru: `<ul><li><strong>Отпечатки:</strong> 16.7% шанс оставить <strong>отпечаток с 6 пальцами</strong>. 25% шанс НЕ оставить отпечаток вообще при взаимодействии.</li><li><strong>Оборотень:</strong> Во время охоты может (6.66%) сменить модель на другую при мерцании.</li><li><strong>Способность:</strong> Может сократить время жизни отпечатков вдвое (исчезают быстрее).</li><li><strong>Стратегия:</strong> Проверяйте отпечатки внимательно. 6 пальцев = мгновенное подтверждение Обакэ. Нет отпечатков при взаимодействиях = возможно Обакэ.</li></ul>`
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
            pl: "Bardzo aktywny. Widoczny dłużej. Zabiera sanity.",
            ru: "Очень активный. Виден дольше. Ест рассудок."
        },
        longDesc: {
            en: `<ul><li><strong>Visibility:</strong> Visible for much longer durations during hunt flickers. Very easy to track visually.</li><li><strong>Sanity Drain:</strong> Physical ghost events drain <strong>20% Sanity</strong> (double normal).</li><li><strong>Activity:</strong> Extremely active. Cannot do the 'airball' ghost event (hissing mist).</li></ul>`,
            pl: `<ul><li><strong>Widoczność:</strong> Podczas polowania jest widoczny znacznie dłużej (mniej mruga). Łatwo zrobić mu zdjęcie.</li><li><strong>Sanity:</strong> Fizyczne objawienia zabierają <strong>20% Sanity</strong> (zamiast 10%).</li><li><strong>Aktywność:</strong> Bardzo aktywny. Nie może zrobić eventu "mglistej kulki" (airball).</li></ul>`,
            ru: `<ul><li><strong>Видимость:</strong> Виден гораздо дольше во время мерцаний на охоте. Легко сфотографировать.</li><li><strong>Рассудок:</strong> Физические ивенты снимают <strong>20% рассудка</strong> (вдвое больше нормы).</li><li><strong>Активность:</strong> Очень активный. Не может сделать ивент 'облачко' (hissing mist).</li></ul>`
        }
    },
    {
        name: "Onryo",
        evidences: ["Spirit Box", "Ghost Orb", "Freezing Temperatures"],
        guaranteed: null,
        huntSanity: { en: "60% / Any%", pl: "60% / Każde%", ru: "60% / Любое%" },
        speed: "1.7 m/s",
        shortDesc: {
            en: "Fears fire. Candles act like Crucifixes. Hunts if fire goes out.",
            pl: "Boi się ognia. Świece to krucyfiksy. Poluje gdy ogień zgaśnie.",
            ru: "Боится огня. Свечи работают как распятия. Охотится без огня."
        },
        longDesc: {
            en: `<ul><li><strong>Fire Safety:</strong> A flame acts as a Crucifix with 4m range. Ghost blows out flame instead of hunting.</li><li><strong>Aggression:</strong> Every <strong>3rd flame</strong> blown out will instantly trigger a hunt (unless another flame is nearby).</li><li><strong>Threshold:</strong> Can hunt at any sanity if triggered by fire loss. Standard threshold 60%.</li></ul>`,
            pl: `<ul><li><strong>Ogień:</strong> Zapalona świeca działa jak Krucyfiks (zasięg 4m). Duch zdmuchuje świecę zamiast atakować.</li><li><strong>Agresja:</strong> Każda <strong>3 zdmuchnięta świeca</strong> wywołuje natychmiastowe polowanie (chyba że obok jest inna świeca).</li><li><strong>Próg:</strong> Standardowo 60%, ale może zaatakować przy 100% jeśli zdmuchnie 3 świece.</li></ul>`,
            ru: `<ul><li><strong>Огонь:</strong> Горящая свеча работает как Распятие с радиусом 4м. Призрак задувает свечу вместо охоты.</li><li><strong>Агрессия:</strong> Каждая <strong>3-я задутая свеча</strong> вызывает охоту (если рядом нет другой свечи).</li><li><strong>Порог:</strong> Может начать охоту при любом рассудке, если задует 3 свечи. Стандартно 60%.</li></ul>`
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
            pl: "Zabiera sanity jak na niego patrzysz. Znika po zdjęciu. Wolne mruganie.",
            ru: "Взгляд на него ест рассудок. Исчезает от фото. Медленно мигает."
        },
        longDesc: {
            en: `<ul><li><strong>Sanity Drain:</strong> Looking at the Phantom drains 0.5% sanity per second (2x normal rate).</li><li><strong>Photo:</strong> Taking a photo makes it <strong>disappear instantly</strong> during events or hunts. Hunt continues but ghost becomes invisible. Photo is crystal clear (no glitchy interference).</li><li><strong>Blinking:</strong> During hunts, stays invisible for very long periods (1-2s blinks). Hard to track visually and loop.</li><li><strong>Roaming:</strong> Wanders frequently, often towards players' locations.</li></ul>`,
            pl: `<ul><li><strong>Sanity:</strong> Patrzenie na Phantoma zabiera sanity (0.5%/s, 2x norma).</li><li><strong>Zdjęcie:</strong> Zrobienie mu zdjęcia sprawia, że <strong>znika natychmiast</strong> podczas eventu lub polowania. Polowanie trwa dalej ale duch staje się niewidoczny. Zdjęcie jest czyste (bez zakłóceń glitchy).</li><li><strong>Mruganie:</strong> Podczas polowania bardzo rzadko jest widoczny (długie przerwy 1-2s w widoczności). Trudny do śledzenia wzrokiem.</li><li><strong>Wędrówki:</strong> Często wędruje, zazwyczaj w kierunku graczy.</li></ul>`,
            ru: `<ul><li><strong>Рассудок:</strong> Взгляд на Фантома снижает рассудок на 0.5% в секунду (2x норма).</li><li><strong>Фото:</strong> Фото заставляет его <strong>исчезнуть мгновенно</strong> во время ивентов или охоты. Охота продолжается, но призрак невидим. Фото чистое, без помех.</li><li><strong>Мигание:</strong> На охоте невидим очень долго (1-2с). Трудно отслеживать визуально.</li><li><strong>Блуждание:</strong> Часто бродит, обычно к игрокам.</li></ul>`
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
            pl: "Rzuca wieloma przedmiotami. Eksplozja itemów.",
            ru: "Кидает много предметов. Взрыв вещей."
        },
        longDesc: {
            en: `<ul><li><strong>Multi-Throw:</strong> Can throw multiple items at once. Throws are powerful and long-distance.</li><li><strong>Sanity:</strong> Watching it throw items drains <strong>2% sanity</strong> per item.</li><li><strong>Hunt:</strong> 100% chance to throw a nearby object every 0.5s during a hunt. Creates a chaotic mess.</li></ul>`,
            pl: `<ul><li><strong>Multi-Rzut:</strong> Może rzucić wieloma przedmiotami naraz (tzw. Polty Bomb). Rzuty są bardzo silne.</li><li><strong>Sanity:</strong> Patrzenie jak rzuca zabiera <strong>2% sanity</strong> za każdy przedmiot.</li><li><strong>Polowanie:</strong> Podczas polowania rzuca wszystkim co ma pod ręką (co 0.5s), robiąc bałagan.</li></ul>`,
            ru: `<ul><li><strong>Мульти-бросок:</strong> Может кинуть несколько вещей сразу. Броски мощные и далекие.</li><li><strong>Рассудок:</strong> Наблюдение за бросками снимает <strong>2% рассудка</strong> за предмет.</li><li><strong>Охота:</strong> 100% шанс кинуть предмет рядом каждые 0.5с во время охоты. Хаос.</li></ul>`
        }
    },
    {
        name: "Raiju",
        evidences: ["EMF 5", "D.O.T.S Projector", "Ghost Orb"],
        guaranteed: null,
        huntSanity: "50% / 65%",
        speed: { en: "1.7 / 2.5 m/s", pl: "1.7 / 2.5 m/s", ru: "1.7 / 2.5 м/с" },
        shortDesc: {
            en: "Feeds on electronics. Very fast near equipment.",
            pl: "Żywi się prądem. Bardzo szybki przy elektronice.",
            ru: "Питается током. Очень быстрый рядом с электроникой."
        },
        longDesc: {
            en: `<ul><li><strong>Electronics Boost:</strong> Hunts at <strong>65% Sanity</strong> and moves at <strong>2.5 m/s</strong> if near active electronics (Flashlight, Camera, DOTS, Motion Sensor, etc.).</li><li><strong>Interference Range:</strong> Disrupts electronic equipment from <strong>15 meters</strong> away (vs 10m normal). Lights flicker from further away.</li><li><strong>Strategy:</strong> Turn off flashlight and equipment when hiding or breaking line of sight! Electronics make you vulnerable.</li></ul>`,
            pl: `<ul><li><strong>Elektronika:</strong> Poluje od <strong>65% Sanity</strong> i biega z prędkością <strong>2.5 m/s</strong> jeśli jest w pobliżu włączonej elektroniki (Latarka, Kamera, DOTS, Czujnik ruchu, itp.).</li><li><strong>Zasięg Zakłóceń:</strong> Zakłóca sprzęt z odległości <strong>15 metrów</strong> (norma 10m). Światła migają z dalszej odległości.</li><li><strong>Strategia:</strong> Wyłącz latarkę i sprzęt gdy się chowasz lub łamiesz linię wzroku! Elektronika czyni cię podatnym.</li></ul>`,
            ru: `<ul><li><strong>Усиление от тока:</strong> Охотится при <strong>65% рассудка</strong> и бегает <strong>2.5 м/с</strong>, если рядом активная электроника (Фонарик, Камера, DOTS, Датчик движения и т.д.).</li><li><strong>Радиус помех:</strong> Глючит электронику с <strong>15 метров</strong> (обычно 10м). Свет мигает с большего расстояния.</li><li><strong>Стратегия:</strong> Выключайте фонарик и оборудование, когда прячетесь! Электроника делает вас уязвимыми.</li></ul>`
        }
    },
    {
        name: "Revenant",
        evidences: ["Ghost Writing", "Ghost Orb", "Freezing Temperatures"],
        guaranteed: null,
        huntSanity: "50%",
        speed: { en: "1.0 / 3.0 m/s", pl: "1.0 / 3.0 m/s", ru: "1.0 / 3.0 м/с" },
        shortDesc: {
            en: "Slow when hidden, incredibly fast when chasing.",
            pl: "Wolny gdy nikogo nie widzi, niesamowicie szybki w pościgu.",
            ru: "Медленный, когда не видит. Невероятно быстрый в погоне."
        },
        longDesc: {
            en: `<ul><li><strong>Speed:</strong> Moves at <strong>3.0 m/s</strong> (extremely fast) if it detects a player/electronics.</li><li><strong>Sluggish:</strong> Moves at <strong>1.0 m/s</strong> (extremely slow) if it has no target.</li><li><strong>Strategy:</strong> Breaking line of sight makes it slow down INSTANTLY to 1.0 m/s until it reaches your last known pos.</li></ul>`,
            pl: `<ul><li><strong>Prędkość:</strong> Biegnie <strong>3.0 m/s</strong> (pocisk) jeśli wie gdzie jesteś.</li><li><strong>Wolny:</strong> Pełza <strong>1.0 m/s</strong> jeśli nikogo nie wykrył.</li><li><strong>Strategia:</strong> Jak tylko znikniesz mu z oczu, natychmiast zwalnia. Nie uciekaj prostą drogą – skręć i schowaj się.</li></ul>`,
            ru: `<ul><li><strong>Скорость:</strong> Бежит <strong>3.0 м/с</strong> (очень быстро), если чует игрока.</li><li><strong>Медленный:</strong> Ползет <strong>1.0 м/с</strong> (очень медленно), если нет цели.</li><li><strong>Стратегия:</strong> Разрыв линии обзора заставляет его МГНОВЕННО замедлиться до 1.0 м/с.</li></ul>`
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
            pl: "Nieśmiały. Nie poluje jeśli ktoś jest w pokoju.",
            ru: "Стеснительный. Не охотится, если люди вместе."
        },
        longDesc: {
            en: `<ul><li><strong>Shyness:</strong> Cannot hunt if a player is in the same room.</li><li><strong>Threshold:</strong> Hunts at <strong>35% Sanity</strong>.</li><li><strong>Activity:</strong> Very boring. Interactions are rare. EMF 5 is hard to get.</li><li><strong>Events:</strong> Preferentially does 'Shadow' events (hissing shadow) rather than full manifestations.</li></ul>`,
            pl: `<ul><li><strong>Nieśmiałość:</strong> Nie rozpocznie polowania, jeśli w pokoju z nim jest gracz.</li><li><strong>Próg:</strong> Poluje dopiero od <strong>35% Sanity</strong>.</li><li><strong>Aktywność:</strong> Bardzo niska. Trudno o EMF 5.</li><li><strong>Eventy:</strong> Częściej robi ciche "cieniowe" eventy niż pełne objawienia.</li></ul>`,
            ru: `<ul><li><strong>Стеснительность:</strong> Не может начать охоту, если в комнате с ним есть игрок.</li><li><strong>Порог:</strong> Охотится с <strong>35% рассудка</strong>.</li><li><strong>Активность:</strong> Очень скучный. Ивенты редки. ЭМП 5 найти трудно.</li><li><strong>Ивенты:</strong> Предпочитает 'теневые' ивенты.</li></ul>`
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
            pl: "Zwyczajny duch. Długi cooldown po kadzidle.",
            ru: "Обычный призрак. Длинный кулдаун благовония."
        },
        longDesc: {
            en: `<ul><li><strong>Smudge Strength:</strong> Smudging a Spirit prevents it from hunting for <strong>180 seconds</strong> (3 minutes). Normal is 90s.</li><li><strong>No Traits:</strong> Has no other defining strengths or weaknesses. The "default" ghost.</li></ul>`,
            pl: `<ul><li><strong>Kadzidło:</strong> Użycie kadzidła blokuje polowanie spirita na <strong>180 sekund</strong> (3 minuty). Norma to 90s.</li><li><strong>Cechy:</strong> Nie ma innych unikalnych cech. To "domyślny" duch.</li></ul>`,
            ru: `<ul><li><strong>Благовоние:</strong> Использование благовония блокирует охоту на <strong>180 секунд</strong> (3 минуты). Норма 90с.</li><li><strong>Особенности:</strong> Не имеет других сильных или слабых сторон.</li></ul>`
        }
    },
    {
        name: "Thaye",
        evidences: ["Ghost Writing", "Ghost Orb", "D.O.T.S Projector"],
        guaranteed: null,
        huntSanity: "75% -> 15%",
        speed: { en: "2.75 -> 1.0 m/s", pl: "2.75 -> 1.0 m/s", ru: "2.75 -> 1.0 м/с" },
        shortDesc: {
            en: "Ages over time. Starts fast/aggressive, becomes slow/calm.",
            pl: "Starzeje się. Na początku szybki i agresywny, potem wolny.",
            ru: "Стареет. Сначала быстрый, потом медленный."
        },
        longDesc: {
            en: `<ul><li><strong>Aging:</strong> Ages every 1-2 minutes if a player is near. Stats degrade with age (10 stages: 0=young, 10=old).</li><li><strong>Young (Age 0-2):</strong> 2.75 m/s speed, 75% hunt threshold. Extremely dangerous and hyperactive early game.</li><li><strong>Old (Age 8-10):</strong> 1.0 m/s speed, 15% hunt threshold. Very slow, passive, and harmless late game.</li><li><strong>No LOS Acceleration:</strong> Unlike Moroi/Hantu, Thaye does NOT speed up when seeing you. Speed is purely age-based.</li><li><strong>Test:</strong> Use Ouija Board to ask its age for confirmation. Activity decreases dramatically over time.</li></ul>`,
            pl: `<ul><li><strong>Starzenie:</strong> Starzeje się co 1-2 minuty, jeśli gracz jest w pobliżu. Statystyki pogarszają się z wiekiem (10 etapów: 0=młody, 10=stary).</li><li><strong>Młody (Wiek 0-2):</strong> Bardzo szybki (2.75 m/s), poluje od 75% sanity. Ekstremalnie niebezpieczny i hiperaktywny na początku.</li><li><strong>Stary (Wiek 8-10):</strong> Bardzo wolny (1.0 m/s), poluje dopiero od 15% sanity. Bardzo spokojny i nieszkodliwy później.</li><li><strong>Brak LOS:</strong> W przeciwieństwie do Moroi/Hantu, Thaye NIE przyspiesza gdy Cię widzi. Prędkość zależy tylko od wieku.</li><li><strong>Test:</strong> Użyj Ouija Board aby zapytać o wiek. Aktywność drastycznie spada z czasem.</li></ul>`,
            ru: `<ul><li><strong>Старение:</strong> Стареет каждые 1-2 минуты, если игрок рядом. Статы ухудшаются с возрастом (10 стадий: 0=молодой, 10=старый).</li><li><strong>Молодой (Возраст 0-2):</strong> 2.75 м/с, охота с 75%. Очень опасен и гиперактивен в начале.</li><li><strong>Старый (Возраст 8-10):</strong> 1.0 м/с, охота с 15%. Медленный и безопасный позже.</li><li><strong>Нет ускорения:</strong> НЕ ускоряется, увидев вас (в отличие от Мороя/Ханту). Скорость зависит только от возраста.</li><li><strong>Тест:</strong> Используйте доску Уиджа, чтобы спросить возраст. Активность резко падает со временем.</li></ul>`
        }
    },
    {
        name: "The Twins",
        evidences: ["EMF 5", "Spirit Box", "Freezing Temperatures"],
        guaranteed: null,
        huntSanity: "50%",
        speed: { en: "1.5 / 1.9 m/s", pl: "1.5 / 1.9 m/s", ru: "1.5 / 1.9 м/с" },
        shortDesc: {
            en: "Two interaction ranges. Decoy and Main ghost.",
            pl: "Bliźniaki. Dwa zasięgi interakcji. Główny i Przynęta.",
            ru: "Два радиуса взаимодействия. Приманка и Главный."
        },
        longDesc: {
            en: `<ul><li><strong>Decoy Twin:</strong> Interactions can happen at a "Decoy" location far from the Main ghost itself. Creates illusion of two ghosts.</li><li><strong>Hunt Origins:</strong> 50% chance to hunt from Main (1.53 m/s - slightly slow) or Decoy (1.87 m/s - fast). Can hunt from different locations.</li><li><strong>Evidence Distribution:</strong> Main ghost gives all three evidence types. Decoy gives EMF readings but NO Spirit Box responses.</li><li><strong>Strategy:</strong> If EMF triggers in multiple distant rooms simultaneously, likely The Twins. Speed variation during hunts is key identifier.</li></ul>`,
            pl: `<ul><li><strong>Przynęta:</strong> Interakcje mogą dziać się w dwóch różnych miejscach naraz - Główny duch i jego Przynęta. Tworzy iluzję dwóch duchów.</li><li><strong>Źródło Polowania:</strong> 50% szans, że zaatakuje Główny (wolniejszy 1.53 m/s) lub Przynęta (szybsza 1.87 m/s). Mogą polować z różnych lokalizacji.</li><li><strong>Rozkład Dowodów:</strong> Tylko Główny daje wszystkie dowody. Przynęta daje EMF, ale nie daje Spirit Boxa.</li><li><strong>Strategia:</strong> Jeśli EMF włącza się w wielu odległych pokojach jednocześnie, prawdopodobnie The Twins. Zmienność prędkości podczas polowań to kluczowy identyfikator.</li></ul>`,
            ru: `<ul><li><strong>Приманка:</strong> Взаимодействия могут происходить через 'Приманку' далеко от самого Главного призрака. Создает иллюзию двух призраков.</li><li><strong>Источник охоты:</strong> 50% шанс охоты от Главного (1.53 м/с - медленнее) или Приманки (1.87 м/с - быстрее). Могут охотиться из разных мест.</li><li><strong>Распределение улик:</strong> Только Главный дает все три улики. Приманка дает ЭМП, но НЕ дает Радио.</li><li><strong>Стратегия:</strong> Если ЭМП срабатывает в нескольких далеких комнатах одновременно, вероятно Близнецы. Изменение скорости во время охоты - ключевой идентификатор.</li></ul>`
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
            pl: "Lata. Brak kroków w soli. Teleportuje się do graczy.",
            ru: "Парит. Нет следов в соли. Телепортируется к игрокам."
        },
        longDesc: {
            en: `<ul><li><strong>Salt:</strong> Will never leave UV footprints in salt. Stepping in salt generates activity but no prints.</li><li><strong>Teleport:</strong> Can teleport instantly to a random player (generating EMF 2 or 5).</li><li><strong>Flight:</strong> Cannot be tracked by footsteps in salt (it hovers).</li></ul>`,
            pl: `<ul><li><strong>Sól:</strong> NIGDY nie zostawia śladów stóp w soli (UV).</li><li><strong>Teleport:</strong> Może się teleportować do losowego gracza (daje wtedy EMF 2/5).</li><li><strong>Latanie:</strong> Unosi się nad ziemią, więc nie tupie w soli.</li></ul>`,
            ru: `<ul><li><strong>Соль:</strong> НИКОГДА не наступает в соль (нет следов). Наступает, дает активность, но следов нет.</li><li><strong>Телепорт:</strong> Может телепортироваться к случайному игроку (дает ЭМП 2 или 5).</li><li><strong>Полет:</strong> Парит над землей.</li></ul>`
        }
    },
    {
        name: "Yokai",
        evidences: ["Spirit Box", "Ghost Orb", "D.O.T.S Projector"],
        guaranteed: null,
        huntSanity: { en: "50% / 80%", pl: "50% / 80%", ru: "50% / 80%" },
        speed: "1.7 m/s",
        shortDesc: {
            en: "Sensitive to voice. Hard of hearing during hunt.",
            pl: "Reaguje na głos. Głuchy podczas polowania.",
            ru: "Чувствителен к голосу. Глухой во время охоты."
        },
        longDesc: {
            en: `<ul><li><strong>Voice Trigger:</strong> Talking near a Yokai can trigger a hunt as early as <strong>80% Sanity</strong>.</li><li><strong>Deafness:</strong> During hunts, it can only hear voice/electronics from <strong>2.5 meters</strong> away.</li><li><strong>Strategy:</strong> You can often sprint away while shouting and it won't react unless very close.</li></ul>`,
            pl: `<ul><li><strong>Głos:</strong> Rozmowa przy duchu może wywołać atak już przy <strong>80% Sanity</strong>.</li><li><strong>Głuchota:</strong> Podczas polowania słyszy twój głos/sprzęt tylko z odległości <strong>2.5 metra</strong>.</li><li><strong>Strategia:</strong> Możesz uciekać krzycząc, a on cię nie usłyszy (chyba że wpadniesz na niego).</li></ul>`,
            ru: `<ul><li><strong>Голос:</strong> Разговор рядом может вызвать охоту уже при <strong>80% рассудка</strong>.</li><li><strong>Глухота:</strong> Во время охоты слышит голос/электронику только с <strong>2.5 метров</strong>.</li><li><strong>Стратегия:</strong> Можно убегать хаотично, он не услышит издалека.</li></ul>`
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
            pl: "Mocno zabiera sanity. Trzaska drzwiami.",
            ru: "Сильно снижает рассудок. Может захлопнуть дверь."
        },
        longDesc: {
            en: `<ul><li><strong>Door Slam:</strong> Can fully close a door (not just push it), draining <strong>12.5% Sanity</strong> instantly from players in the room. Unique ability.</li><li><strong>Weakness:</strong> Smudge sticks trap it in its current room for 90 seconds (stops roaming completely).</li><li><strong>Front Door:</strong> Only ghost that can interact with the front/exit door outside of hunts or events. Unique tell.</li><li><strong>Strategy:</strong> If you hear doors SLAMMING shut (not just closing), it's likely Yurei. Watch for front door activity.</li></ul>`,
            pl: `<ul><li><strong>Trzaśnięcie:</strong> Może z hukiem zamknąć drzwi (nie tylko je przymknąć), zabierając <strong>12.5% Sanity</strong> wszystkim w pokoju. Unikalna zdolność.</li><li><strong>Słabość:</strong> Kadzidło uwięzi go w pokoju na 90 sekund (przestaje wędrować całkowicie).</li><li><strong>Drzwi Wejściowe:</strong> Jako jedyny potrafi dotknąć drzwi wejściowych poza polowaniem lub eventem. Unikalny znak.</li><li><strong>Strategia:</strong> Jeśli słyszysz drzwi TRZASKAJĄCE (nie tylko zamykające się), prawdopodobnie Yurei. Obserwuj aktywność przy drzwiach wejściowych.</li></ul>`,
            ru: `<ul><li><strong>Хлопок дверью:</strong> Может с размаха закрыть дверь (не просто прикрыть), сняв <strong>12.5% рассудка</strong> игрокам в комнате. Уникальная способность.</li><li><strong>Слабость:</strong> Благовоние запирает его в комнате на 90 секунд (полностью прекращает блуждание).</li><li><strong>Входная дверь:</strong> Единственный призрак, трогающий входную дверь вне охоты или ивентов. Уникальный признак.</li><li><strong>Стратегия:</strong> Если слышите двери ХЛОПАЮЩИЕ (не просто закрывающиеся), вероятно Юрэй. Следите за активностью у входной двери.</li></ul>`
        }
    },
    {
        name: "Dayan",
        evidences: ["EMF 5", "Ghost Orb", "Spirit Box"],
        guaranteed: null,
        huntSanity: { en: "45% / 60%", pl: "45% / 60%", ru: "45% / 60%" },
        speed: { en: "1.2 - 2.25 m/s", pl: "1.2 - 2.25 m/s", ru: "1.2 - 2.25 м/с" },
        shortDesc: {
            en: "Reacts to player movement. Speeds up when you move.",
            pl: "Reaguje na ruch gracza. Przyspiesza gdy chodzisz.",
            ru: "Реагирует на движение. Ускоряется, когда вы двигаетесь."
        },
        longDesc: {
            en: `<ul><li><strong>Movement Detection:</strong> Senses player movement within ~10 meter radius. Hyper-vigilant to motion.</li><li><strong>Speed:</strong> Slow (1.2 m/s) if nearby players are STANDING STILL. Fast (2.25 m/s) if players are MOVING within detection range.</li><li><strong>Hunt Threshold:</strong> Hunts at 45% sanity (if you stand still) or 60% sanity (if you are moving).</li><li><strong>Proximity Mind Game:</strong> Reacts sharply to how players move in its space. Gains strength from movement, loses it from stillness.</li><li><strong>Strategy:</strong> Don't panic run during hunts. Stand still when within 10m to slow it down dramatically. Move only when necessary.</li><li><strong>Name:</strong> Cannot have a <strong>male name</strong> (Must be female). Lore: soul of someone who suffered immense cruelty.</li></ul>`,
            pl: `<ul><li><strong>Wykrywanie Ruchu:</strong> Wyczuwa ruch graczy w promieniu ~10 metrów. Hiper-czujna na ruch.</li><li><strong>Prędkość:</strong> Wolny (1.2 m/s) gdy stoisz w miejscu. Szybki (2.25 m/s) gdy się ruszasz w zasięgu detekcji.</li><li><strong>Próg Polowania:</strong> Próg 45% (stojąc) lub 60% (ruszając się).</li><li><strong>Gra Umysłowa:</strong> Ostro reaguje na to jak gracze się poruszają w jej przestrzeni. Zyskuje siłę z ruchu, traci ją z bezruchu.</li><li><strong>Strategia:</strong> Nie biegaj panicznie podczas polowań. Stój w miejscu gdy jesteś w promieniu 10m aby ją drastycznie spowolnić. Ruszaj się tylko gdy konieczne.</li><li><strong>Imię:</strong> Nie może mieć <strong>męskiego imienia</strong> (musi być kobiece). Lore: dusza kogoś kto cierpiał ogromne okrucieństwo.</li></ul>`,
            ru: `<ul><li><strong>Обнаружение движения:</strong> Чувствует движение игроков в радиусе ~10 метров. Гипер-бдительна к движению.</li><li><strong>Скорость:</strong> Медленный (1.2 м/с), если СТОИТЕ. Быстрый (2.25 м/с), если ДВИГАЕТЕСЬ в радиусе обнаружения.</li><li><strong>Порог охоты:</strong> 45% (стоя) или 60% (двигаясь).</li><li><strong>Игра разума:</strong> Резко реагирует на то, как игроки двигаются в её пространстве. Получает силу от движения, теряет от неподвижности.</li><li><strong>Стратегия:</strong> Не бегайте панически во время охоты. Стойте неподвижно в радиусе 10м, чтобы резко замедлить её. Двигайтесь только когда необходимо.</li><li><strong>Имя:</strong> Всегда женское. Лор: душа того, кто пережил огромную жестокость.</li></ul>`
        }
    },
    {
        name: "Gallu",
        evidences: ["EMF 5", "Fingerprints", "Spirit Box"],
        guaranteed: null,
        huntSanity: { en: "40% / 60%", pl: "40% / 60%", ru: "40% / 60%" },
        speed: { en: "1.36 / 2.0 m/s", pl: "1.36 / 2.0 m/s", ru: "1.36 / 2.0 м/с" },
        shortDesc: {
            en: "Enraged by protection items. Fast after smudging.",
            pl: "Wścieka się na kadzidła i sól. Szybki po obronie.",
            ru: "Злится на предметы защиты. Быстрый после благовония."
        },
        longDesc: {
            en: `<ul><li><strong>Enraged Mode:</strong> Using a Smudge Stick, Crucifix, or Salt ENRAGES it. Becomes aggressive and dangerous.</li><li><strong>Stats:</strong> Enraged: 2.0 m/s speed, 60% hunt threshold. Weakened: 1.36 m/s speed, 40% hunt threshold.</li><li><strong>Salt Immunity:</strong> While Enraged, it CANNOT step in salt (floats like Wraith). Returns to normal when weakened.</li><li><strong>Exhaustion:</strong> Being enraged exhausts it over time, making protective equipment MORE effective eventually.</li><li><strong>Test:</strong> If it speeds up and becomes MORE aggressive AFTER you smudge it (instead of calming down), it's a Gallu.</li></ul>`,
            pl: `<ul><li><strong>Szał:</strong> Użycie Kadzidła, Krucyfiksu lub Soli wprowadza go w tryb SZAŁU. Staje się agresywny i niebezpieczny.</li><li><strong>Statystyki:</strong> W Szale: bieg 2.0 m/s, poluje od 60%. Osłabiony: 1.36 m/s, poluje od 40%.</li><li><strong>Odporność na Sól:</strong> W Szale NIE DEPCZE po soli (lata jak Wraith). Wraca do normy gdy osłabiony.</li><li><strong>Wyczerpanie:</strong> Szał go męczy z czasem, przez co ochrona staje się BARDZIEJ skuteczna.</li><li><strong>Test:</strong> Jeśli przyspiesza i staje się BARDZIEJ agresywny PO użyciu kadzidła (zamiast się uspokoić), to Gallu.</li></ul>`,
            ru: `<ul><li><strong>Ярость:</strong> Использование Благовония, Распятия или Соли ЗЛИТ его. Становится агрессивным и опасным.</li><li><strong>Статы:</strong> В ярости: 2.0 м/с, охота с 60%. Ослаблен: 1.36 м/с, охота с 40%.</li><li><strong>Иммунитет к соли:</strong> В ярости НЕ наступает в соль (парит как Мираж). Возвращается к норме при ослаблении.</li><li><strong>Истощение:</strong> Ярость истощает его со временем, делая защиту БОЛЕЕ эффективной.</li><li><strong>Тест:</strong> Если ускоряется и становится БОЛЕЕ агрессивным ПОСЛЕ благовония (вместо успокоения), это Галлу.</li></ul>`
        }
    },
    {
        name: "Obambo",
        evidences: ["Ghost Writing", "Fingerprints", "D.O.T.S Projector"],
        guaranteed: null,
        huntSanity: { en: "10% / 65%", pl: "10% / 65%", ru: "10% / 65%" },
        speed: { en: "1.45 / 1.96 m/s", pl: "1.45 / 1.96 m/s", ru: "1.45 / 1.96 м/с" },
        shortDesc: {
            en: "Cycles between Aggressive and Calm states.",
            pl: "Cyklicznie zmienia stan z Agresywnego na Spokojny.",
            ru: "Меняет состояние: Агрессивный / Спокойный."
        },
        longDesc: {
            en: `<ul><li><strong>Cycle:</strong> Switches between Aggressive and Calm states every ~2 minutes. State can change mid-hunt!</li><li><strong>Aggressive State:</strong> Fast (1.96 m/s), hunts at 65% sanity, very active with frequent interactions.</li><li><strong>Calm State:</strong> Slow (1.45 m/s), hunts at 10% sanity (like a Shade), almost invisible with minimal activity.</li><li><strong>Duration:</strong> Has the <strong>shortest hunt duration</strong> in the game across all ghosts.</li><li><strong>Mixed Emotions:</strong> Lore suggests it's both aggressive and calm - never properly laid to rest.</li><li><strong>Strategy:</strong> Track activity over time. If it goes from hyperactive demon to lazy shade, it's Obambo.</li></ul>`,
            pl: `<ul><li><strong>Cykl:</strong> Zmienia się między stanem Agresywnym i Spokojnym co ~2 minuty. Stan może się zmienić podczas polowania!</li><li><strong>Stan Agresywny:</strong> Szybki (1.96 m/s), poluje od 65%, bardzo aktywny z częstymi interakcjami.</li><li><strong>Stan Spokojny:</strong> Wolny (1.45 m/s), poluje dopiero od 10% (jak Shade), prawie niewidoczny z minimalną aktywnością.</li><li><strong>Czas:</strong> Posiada <strong>najkrótszy czas polowania</strong> w całej grze.</li><li><strong>Mieszane Emocje:</strong> Lore sugeruje że jest zarówno agresywny jak i spokojny - nigdy nie został odpowiednio pochowany.</li><li><strong>Strategia:</strong> Śledź aktywność w czasie. Jeśli zmienia się z hiperaktywnego demona w leniwą zjawe, to Obambo.</li></ul>`,
            ru: `<ul><li><strong>Цикл:</strong> Переключается между Агрессивным и Спокойным состояниями каждые ~2 минуты. Состояние может измениться во время охоты!</li><li><strong>Агрессивное состояние:</strong> Быстрый (1.96 м/с), охота с 65%, очень активный с частыми взаимодействиями.</li><li><strong>Спокойное состояние:</strong> Медленный (1.45 м/с), охота с 10% (как Тень), почти невидим с минимальной активностью.</li><li><strong>Время:</strong> Имеет <strong>самую короткую охоту</strong> во всей игре.</li><li><strong>Смешанные эмоции:</strong> Лор предполагает, что он одновременно агрессивен и спокоен - никогда не был похоронен должным образом.</li><li><strong>Стратегия:</strong> Отслеживайте активность со временем. Если меняется с гиперактивного демона на ленивую тень, это Обамбо.</li></ul>`
        }
    }
];
