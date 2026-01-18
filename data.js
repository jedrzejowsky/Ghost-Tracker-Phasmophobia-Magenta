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
        huntSanity: "50% (Target)",
        speed: "1.7 m/s",
        shortDesc: "Targets ONE player. Wails on Parabolic Mic.",
        longDesc: `
            <ul>
                <li><strong>Targeting:</strong> Chooses one player (the 'Obsession'). Ignores others during hunts unless the target is outside.</li>
                <li><strong>Hunt Threshold:</strong> Checks the <strong>Target's Sanity</strong> only (>50%). Team average irrelevant.</li>
                <li><strong>Roaming:</strong> Frequently roams directly to the target's location regardless of distance.</li>
                <li><strong>Unique Sound:</strong> Has a 33% chance to produce a unique 'screaming' sound on the Parabolic Microphone.</li>
            </ul>
        `
    },
    {
        name: "Demon",
        evidences: ["Ghost Writing", "Freezing Temperatures", "Fingerprints"],
        guaranteed: null,
        huntSanity: "70% / 100%",
        speed: "1.7 m/s",
        shortDesc: "Aggressive. Hunts very often. Crucifix ineffective.",
        longDesc: `
            <ul>
                <li><strong>Aggression:</strong> Cooldown between hunts is only <strong>20 seconds</strong> (vs 25s).</li>
                <li><strong>Ability:</strong> Rare ability to hunt at <strong>100% Sanity</strong>.</li>
                <li><strong>Weakness:</strong> Crucifixes work at <strong>5 meters</strong> (vs 3m). Smudge sticks block hunting for only <strong>60s</strong> (vs 90s).</li>
            </ul>
        `
    },
    {
        name: "Deogen",
        evidences: ["Spirit Box", "Ghost Writing", "D.O.T.S Projector"],
        guaranteed: "Spirit Box",
        huntSanity: "40%",
        speed: "3.0 <-> 0.4 m/s",
        shortDesc: "Always knows where you are. Fast far, slow close. Heavy breathing Box.",
        longDesc: `
            <ul>
                <li><strong>No Hiding:</strong> You CANNOT hide. It constantly pathfinds to the nearest player.</li>
                <li><strong>Speed:</strong> Sprints at <strong>3.0 m/s</strong> when far (>6m), slows to <strong>0.4 m/s</strong> (snail pace) when close (<2.5m).</li>
                <li><strong>Spirit Box:</strong> 33% chance for a unique 'heavy breathing' response if standing within 1m of the ghost.</li>
                <li><strong>Strategy:</strong> Loop it around a table. Do not corner yourself.</li>
            </ul>
        `
    },
    {
        name: "Goryo",
        evidences: ["EMF 5", "D.O.T.S Projector", "Fingerprints"],
        guaranteed: "D.O.T.S Projector",
        huntSanity: "50%",
        speed: "1.7 m/s",
        shortDesc: "DOTS only on Camera + No people. Does not roam.",
        longDesc: `
            <ul>
                <li><strong>D.O.T.S.:</strong> ONLY visible through a <strong>Video Camera</strong>, and ONLY when <strong>nobody is in the room</strong>.</li>
                <li><strong>Roaming:</strong> Cannot wander more than 5 meters from its favorite room. Changes favorite room very rarely.</li>
                <li><strong>Strategy:</strong> If you see DOTS with your naked eye, it is NOT a Goryo.</li>
            </ul>
        `
    },
    {
        name: "Hantu",
        evidences: ["Freezing Temperatures", "Ghost Orb", "Fingerprints"],
        guaranteed: "Freezing Temperatures",
        huntSanity: "50%",
        speed: "1.4 - 2.7 m/s",
        shortDesc: "Fast in cold, slow in warm. (breakers off) Freezing breath during hunt.",
        longDesc: `
            <ul>
                <li><strong>Temperature Speed:</strong> 1.4 m/s in warm rooms (>15°C) up to 2.7 m/s in freezing rooms. DOES NOT accelerate from Line-of-Sight.</li>
                <li><strong>Breath:</strong> Emits visible freezing breath in any room while hunting if the breaker is off.</li>
                <li><strong>Weakness:</strong> Cannot turn ON the fuse box. Keeping the breaker ON slows it down.</li>
                <li><strong>Evidence:</strong> Freezing Temps is a guaranteed evidence in Nightmare/Insanity.</li>
            </ul>
        `
    },
    {
        name: "Jinn",
        evidences: ["EMF 5", "Freezing Temperatures", "Fingerprints"],
        guaranteed: null,
        huntSanity: "50%",
        speed: "1.7 / 2.5 m/s",
        shortDesc: "Territorial. Fast if breaker is ON and seeing you.",
        longDesc: `
            <ul>
                <li><strong>Chase Speed:</strong> Instantly accelerates to <strong>2.5 m/s</strong> if it has Line-of-Sight and is >2m away (requires Fuse Box ON). Slows down when close.</li>
                <li><strong>Ability:</strong> Can zap 25% sanity from players within 3m, leaving an EMF 2 reading at the Fuse Box.</li>
                <li><strong>Weakness:</strong> Turning OFF the Fuse Box disables all unique abilities (becomes generic speed).</li>
            </ul>
        `
    },
    {
        name: "Mare",
        evidences: ["Spirit Box", "Ghost Orb", "Ghost Writing"],
        guaranteed: null,
        huntSanity: "60% (Dark) / 40% (Light)",
        speed: "1.7 m/s",
        shortDesc: "Loves darkness. Hunts earlier in dark. Explodes lights.",
        longDesc: `
            <ul>
                <li><strong>Hunt Threshold:</strong> <strong>60%</strong> if room is dark, <strong>40%</strong> if room is lit.</li>
                <li><strong>Lights:</strong> Cannot turn ON lights. Has a high chance to immediately turn a light OFF after you turn it ON.</li>
                <li><strong>Event:</strong> Can interact with a light switch to explode the bulb (permanent break).</li>
                <li><strong>Roaming:</strong> More likely to roam into dark rooms.</li>
            </ul>
        `
    },
    {
        name: "The Mimic",
        evidences: ["Spirit Box", "Freezing Temperatures", "Fingerprints", "Ghost Orb"],
        guaranteed: "Ghost Orb",
        huntSanity: "Variable",
        speed: "Variable",
        shortDesc: "Copies ANY ghost. Always has 'fake' Orb evidence.",
        longDesc: `
            <ul>
                <li><strong>Copycat:</strong> Mimics the traits, abilities, and stats of any other ghost. Switches ghost type every few minutes.</li>
                <li><strong>Fake Evidence:</strong> ALWAYS shows <strong>Ghost Orbs</strong> as a 4th evidence (even in 0 evidence mode).</li>
                <li><strong>Identification:</strong> If you have 3 evidences + Orbs, or if it behaves like a Deogen then a Hantu, it's a Mimic.</li>
            </ul>
        `
    },
    {
        name: "Moroi",
        evidences: ["Spirit Box", "Ghost Writing", "Freezing Temperatures"],
        guaranteed: "Spirit Box",
        huntSanity: "50%",
        speed: "1.5 - 2.25 m/s",
        shortDesc: "Curses you (2x sanity drain). Faster at low sanity.",
        longDesc: `
            <ul>
                <li><strong>The Curse:</strong> Spirit Box response or Paramc whisper causes the player to lose sanity 2x faster. Cured by Pills.</li>
                <li><strong>Speed:</strong> Inversely proportional to average sanity. 1.5 m/s at high sanity, <strong>2.25 m/s</strong> at 0% sanity (plus LOS boost up to 3.71 m/s!).</li>
                <li><strong>Blindness:</strong> Smudge sticks blind it for <strong>12 seconds</strong> during a hunt (vs 6s).</li>
            </ul>
        `
    },
    {
        name: "Myling",
        evidences: ["EMF 5", "Ghost Writing", "Fingerprints"],
        guaranteed: null,
        huntSanity: "50%",
        speed: "1.7 m/s",
        shortDesc: "Quiet footsteps during hunt. Noisy on Paramc.",
        longDesc: `
            <ul>
                <li><strong>Stealth Hunt:</strong> Footsteps are completely silent beyond <strong>12 meters</strong>. Flashlight flickering is still visible.</li>
                <li><strong>Paranormal Sounds:</strong> Highly active on the Parabolic Microphone.</li>
                <li><strong>Test:</strong> If you hear footsteps only when the ghost is basically on top of you, it's a Myling.</li>
            </ul>
        `
    },
    {
        name: "Obake",
        evidences: ["EMF 5", "Ghost Orb", "Fingerprints"],
        guaranteed: "Fingerprints",
        huntSanity: "50%",
        speed: "1.7 m/s",
        shortDesc: "Shapeshifter. 6-Finger prints. Flashes different model.",
        longDesc: `
            <ul>
                <li><strong>Fingerprints:</strong> 16.7% chance to leave <strong>6-finger handprints</strong> (unique). 25% chance to leave NO fingerprints at all.</li>
                <li><strong>Shapeshift:</strong> During a hunt, has a 6.66% chance per flicker to change into a different ghost model for one frame.</li>
                <li><strong>Ability:</strong> Can decrease timer of existing fingerprints by half.</li>
            </ul>
        `
    },
    {
        name: "Oni",
        evidences: ["EMF 5", "Freezing Temperatures", "D.O.T.S Projector"],
        guaranteed: null,
        huntSanity: "50%",
        speed: "1.7 m/s",
        shortDesc: "Very active. Visible longer during hunts. Drains sanity.",
        longDesc: `
            <ul>
                <li><strong>Visibility:</strong> Visible for much longer durations during hunt flickers. Very easy to track visually.</li>
                <li><strong>Sanity Drain:</strong> Physical ghost events drain <strong>20% Sanity</strong> (double normal).</li>
                <li><strong>Activity:</strong> Extremely active. Cannot do the 'airball' ghost event (hissing mist).</li>
            </ul>
        `
    },
    {
        name: "Onryo",
        evidences: ["Spirit Box", "Ghost Orb", "Freezing Temperatures"],
        guaranteed: null,
        huntSanity: "60% / Any%",
        speed: "1.7 m/s",
        shortDesc: "Fears fire. Candles act like Crucifixes. Hunts if fire goes out.",
        longDesc: `
            <ul>
                <li><strong>Fire Safety:</strong> A flame acts as a Crucifix with 4m range. Ghost blows out flame instead of hunting.</li>
                <li><strong>Aggression:</strong> Every <strong>3rd flame</strong> blown out will instantly trigger a hunt (unless another flame is nearby).</li>
                <li><strong>Threshold:</strong> Can hunt at any sanity if triggered by fire loss. Standard threshold 60%.</li>
            </ul>
        `
    },
    {
        name: "Phantom",
        evidences: ["Spirit Box", "D.O.T.S Projector", "Fingerprints"],
        guaranteed: null,
        huntSanity: "50%",
        speed: "1.7 m/s",
        shortDesc: "Drains sanity if looked at. Photos make it vanish. Slow blink.",
        longDesc: `
            <ul>
                <li><strong>Sanity:</strong> Looking at the Phantom drains 0.5% sanity per second.</li>
                <li><strong>Photo:</strong> Taking a photo makes it <strong>disappear instantly</strong> (event or hunt). Photo contains no ghost glitch (crystal clear).</li>
                <li><strong>Blinking:</strong> During hunts, stays invisible for very long periods (1-2s). Hard to loop visually.</li>
                <li><strong>Roaming:</strong> Can walk to a random player's position (EMF 2).</li>
            </ul>
        `
    },
    {
        name: "Poltergeist",
        evidences: ["Spirit Box", "Ghost Writing", "Fingerprints"],
        guaranteed: null,
        huntSanity: "50%",
        speed: "1.7 m/s",
        shortDesc: "Throws multiple objects. Explosion of items.",
        longDesc: `
            <ul>
                <li><strong>Multi-Throw:</strong> Can throw multiple items at once. Throws are powerful and long-distance.</li>
                <li><strong>Sanity:</strong> Watching it throw items drains <strong>2% sanity</strong> per item.</li>
                <li><strong>Hunt:</strong> 100% chance to throw a nearby object every 0.5s during a hunt. Creates a chaotic mess.</li>
            </ul>
        `
    },
    {
        name: "Raiju",
        evidences: ["EMF 5", "D.O.T.S Projector", "Ghost Orb"],
        guaranteed: null,
        huntSanity: "50% / 65%",
        speed: "1.7 / 2.5 m/s",
        shortDesc: "Feeds on electronics. Very fast near equipment.",
        longDesc: `
            <ul>
                <li><strong>Electronics Boost:</strong> Hunts at <strong>65% Sanity</strong> and moves at <strong>2.5 m/s</strong> if near active electronics (Watch, Camera, DOTS, etc.).</li>
                <li><strong>Interference:</strong> Disrupts electronic equipment from **15 meters** away (vs 10m).</li>
                <li><strong>Strategy:</strong> Turn off equipment when hiding / breaking line of sight!</li>
            </ul>
        `
    },
    {
        name: "Revenant",
        evidences: ["Ghost Writing", "Ghost Orb", "Freezing Temperatures"],
        guaranteed: null,
        huntSanity: "50%",
        speed: "1.0 / 3.0 m/s",
        shortDesc: "Slow when hidden, incredibly fast when chasing.",
        longDesc: `
            <ul>
                <li><strong>Speed:</strong> Moves at <strong>3.0 m/s</strong> (extremely fast) if it detects a player/electronics.</li>
                <li><strong>Sluggish:</strong> Moves at <strong>1.0 m/s</strong> (extremely slow) if it has no target.</li>
                <li><strong>Strategy:</strong> Breaking line of sight makes it slow down INSTANTLY to 1.0 m/s until it reaches your last known pos.</li>
            </ul>
        `
    },
    {
        name: "Shade",
        evidences: ["EMF 5", "Ghost Writing", "Freezing Temperatures"],
        guaranteed: null,
        huntSanity: "35%",
        speed: "1.7 m/s",
        shortDesc: "Shy. Won't hunt if people are together. Hard to find.",
        longDesc: `
            <ul>
                <li><strong>Shyness:</strong> Cannot hunt if a player is in the same room.</li>
                <li><strong>Threshold:</strong> Hunts at <strong>35% Sanity</strong>.</li>
                <li><strong>Activity:</strong> Very boring. Interactions are rare. EMF 5 is hard to get.</li>
                <li><strong>Events:</strong> Preferentially does 'Shadow' events (hissing shadow) rather than full manifestations.</li>
            </ul>
        `
    },
    {
        name: "Spirit",
        evidences: ["EMF 5", "Ghost Writing", "Spirit Box"],
        guaranteed: null,
        huntSanity: "50%",
        speed: "1.7 m/s",
        shortDesc: "Generic ghost. Long smudge cooldown.",
        longDesc: `
            <ul>
                <li><strong>Smudge Strength:</strong> Smudging a Spirit prevents it from hunting for <strong>180 seconds</strong> (3 minutes). Normal is 90s.</li>
                <li><strong>No Traits:</strong> Has no other defining strengths or weaknesses. The "default" ghost.</li>
            </ul>
        `
    },
    {
        name: "Thaye",
        evidences: ["Ghost Writing", "Ghost Orb", "D.O.T.S Projector"],
        guaranteed: null,
        huntSanity: "75% -> 15%",
        speed: "2.75 -> 1.0 m/s",
        shortDesc: "Ages over time. Starts fast/aggressive, becomes slow/calm.",
        longDesc: `
            <ul>
                <li><strong>Aging:</strong> Ages every 1-2 minutes if a player is near. Stats degrade with age (10 stages).</li>
                <li><strong>Young (Age 0):</strong> 2.75 m/s speed, 75% hunt threshold. Extremely dangerous early game.</li>
                <li><strong>Old (Age 10):</strong> 1.0 m/s speed, 15% hunt threshold. Very slow and passive.</li>
                <li><strong>Mechanic:</strong> Unlike Hantu/Moroi, it does NOT speed up in Line of Sight.</li>
            </ul>
        `
    },
    {
        name: "The Twins",
        evidences: ["EMF 5", "Spirit Box", "Freezing Temperatures"],
        guaranteed: null,
        huntSanity: "50%",
        speed: "1.5 / 1.9 m/s",
        shortDesc: "Two interaction ranges. Decoy and Main ghost.",
        longDesc: `
            <ul>
                <li><strong>Decoy:</strong> Interactions can happen at a "Decoy" location far from the ghost itself.</li>
                <li><strong>Hunt:</strong> 50% chance to hunt from Main (1.53 m/s - slightly slow) or Decoy (1.87 m/s - fast).</li>
                <li><strong>Evidence:</strong> Main ghost gives all evidence. Decoy gives EMF but NO Spirit Box.</li>
                <li><strong>Curveball:</strong> The "Twin" is arguably not a separate entity but a long-range interaction/spawn point.</li>
            </ul>
        `
    },
    {
        name: "Wraith",
        evidences: ["EMF 5", "Spirit Box", "D.O.T.S Projector"],
        guaranteed: null,
        huntSanity: "50%",
        speed: "1.7 m/s",
        shortDesc: "Floats. No footprints in salt. Teleports to players.",
        longDesc: `
            <ul>
                <li><strong>Salt:</strong> Will never leave UV footprints in salt. Stepping in salt generates activity but no prints.</li>
                <li><strong>Teleport:</strong> Can teleport instantly to a random player (generating EMF 2 or 5).</li>
                <li><strong>Flight:</strong> Cannot be tracked by footsteps in salt (it hovers).</li>
            </ul>
        `
    },
    {
        name: "Yokai",
        evidences: ["Spirit Box", "Ghost Orb", "D.O.T.S Projector"],
        guaranteed: null,
        huntSanity: "50% / 80%",
        speed: "1.7 m/s",
        shortDesc: "Sensitive to voice. Hard of hearing during hunt.",
        longDesc: `
            <ul>
                <li><strong>Voice Trigger:</strong> Talking near a Yokai can trigger a hunt as early as <strong>80% Sanity</strong>.</li>
                <li><strong>Deafness:</strong> During hunts, it can only hear voice/electronics from <strong>2.5 meters</strong> away.</li>
                <li><strong>Strategy:</strong> You can often sprint away while shouting and it won't react unless very close.</li>
            </ul>
        `
    },
    {
        name: "Yurei",
        evidences: ["Ghost Orb", "Freezing Temperatures", "D.O.T.S Projector"],
        guaranteed: null,
        huntSanity: "50%",
        speed: "1.7 m/s",
        shortDesc: "Drains sanity heavily. Can slam doors shut.",
        longDesc: `
            <ul>
                <li><strong>Door Slam:</strong> Can fully close a door, draining <strong>12.5% Sanity</strong> instantly from players in the room.</li>
                <li><strong>Weakness:</strong> Smudge sticks trap it in its room for 90 seconds (stops roaming).</li>
                <li><strong>Exit:</strong> Only ghost that can interact with the front door (without hunting/event).</li>
            </ul>
        `
    },
    {
        name: "Dayan",
        evidences: ["EMF 5", "Ghost Orb", "Spirit Box"],
        guaranteed: null,
        huntSanity: "50%",
        speed: "1.7 / 2.25 m/s",
        shortDesc: "2025 Ghost. Hunter behavior.",
        longDesc: `
            <ul>
                <li><strong>Line of Sight:</strong> 2025 Data suggests complex LOS mechanics.</li>
                <li><strong>Speed:</strong> 1.7 m/s base. Accelerates to 2.25 m/s rapidly when close to target.</li>
            </ul>
        `
    },
    {
        name: "Gallu",
        evidences: ["Fingerprints", "Ghost Writing", "Freezing Temperatures"],
        guaranteed: null,
        huntSanity: "50% / 60%",
        speed: "1.7 / 2.04 m/s",
        shortDesc: "2025 Ghost. Enraged by protection.",
        longDesc: `
            <ul>
                <li><strong>Enrage:</strong> Nearby crucifixes or salt can enrage it.</li>
                <li><strong>Stats:</strong> Enraged state: 60% hunt threshold and 2.04 m/s speed.</li>
                <li><strong>Exhaustion:</strong> Becomes slower after hunt sequence.</li>
            </ul>
        `
    },
    {
        name: "Obambo",
        evidences: ["Ghost Writing", "Fingerprints", "D.O.T.S Projector"],
        guaranteed: null,
        huntSanity: "50%",
        speed: "Variable",
        shortDesc: "2025 Ghost. Shapeshifts to death state.",
        longDesc: `
            <ul>
                <li><strong>Mechanic:</strong> Can prone/fake death? (Experimental 2025 mechanic).</li>
            </ul>
        `
    }
];
