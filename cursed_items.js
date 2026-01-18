const CURSED_ITEMS = [
    {
        name: "Music Box",
        image: "https://static.wikia.nocookie.net/phasmophobia/images/5/52/Music_Box_Render.png",
        description: `
            <div class="cursed-details">
                <p><strong>Effect:</strong> When activated, the ghost sings along if within 20m. Can be placed to make the ghost manifest and walk towards it for a photo.</p>
                <div class="stats-grid">
                    <div class="stat-box">
                        <span class="label">Sanity Drain</span>
                        <span class="value">2.5% / sec</span>
                    </div>
                    <div class="stat-box">
                        <span class="label">Range</span>
                        <span class="value">20m (Song) / 5m (Walk)</span>
                    </div>
                </div>
                <p class="danger"><strong>Hunt Trigger:</strong> 
                <br>• If the ghost touches the box.
                <br>• If you THROW the box while playing.
                <br>• If the box plays for 30s fully.</p>
            </div>`
    },
    {
        name: "Ouija Board",
        image: "https://static.wikia.nocookie.net/phasmophobia/images/4/42/Ouija_Board_Render.png",
        description: `
            <div class="cursed-details">
                <p><strong>Effect:</strong> Ask questions like "Where are you?" (Room), "Bone" (Bone Location), or "Hide and Seek" (Count to 5 then Hunt).</p>
                <div class="stats-grid">
                    <div class="stat-box">
                        <span class="label">Location Q</span>
                        <span class="value">-50% Sanity</span>
                    </div>
                    <div class="stat-box">
                        <span class="label">General Q</span>
                        <span class="value">-5% / -20% Sanity</span>
                    </div>
                </div>
                <p class="danger"><strong>Hunt Trigger:</strong> 
                <br>• Asking meaningful Q with insufficient sanity.
                <br>• Walking away without saying "Goodbye".
                <br>• Asking "Hide and Seek".</p>
            </div>`
    },
    {
        name: "Voodoo Doll",
        image: "https://static.wikia.nocookie.net/phasmophobia/images/1/18/Voodoo_Doll_Render.png",
        description: `
            <div class="cursed-details">
                <p><strong>Effect:</strong> Push 1-10 pins to force interactions. Pins are random.</p>
                <div class="stats-grid">
                    <div class="stat-box">
                        <span class="label">Normal Pin</span>
                        <span class="value">-5% Sanity</span>
                    </div>
                    <div class="stat-box">
                        <span class="label">Heart Pin</span>
                        <span class="value">-10% Sanity</span>
                    </div>
                </div>
                <p class="danger"><strong>Hunt Trigger:</strong> 
                <br>• Heart Pin pushed (Random or Requested).
                <br>• Pushing any pin with &#60;5% Sanity.</p>
            </div>`
    },
    {
        name: "Haunted Mirror",
        image: "https://static.wikia.nocookie.net/phasmophobia/images/2/22/Haunted_Mirror_Render.png",
        description: `
            <div class="cursed-details">
                <p><strong>Effect:</strong> Shows a live view of the Ghost's Room. The room is highlighted with a panning view.</p>
                <div class="stats-grid">
                    <div class="stat-box">
                        <span class="label">Usage Cost</span>
                        <span class="value">-20% (Instant)</span>
                    </div>
                    <div class="stat-box">
                        <span class="label">Drain Rate</span>
                        <span class="value">-7.5% / sec</span>
                    </div>
                </div>
                <p class="danger"><strong>Hunt Trigger:</strong> 
                <br>• Reaching 0% Sanity while looking.</p>
            </div>`
    },
    {
        name: "Summoning Circle",
        image: "https://static.wikia.nocookie.net/phasmophobia/images/a/a9/Summoning_Circle_Render.png",
        description: `
            <div class="cursed-details">
                <p><strong>Effect:</strong> Light 5 candles to SUMMON the ghost. It stays trapped for 5 seconds (Perfect for Photo). Do not use during a hunt!</p>
                <div class="stats-grid">
                    <div class="stat-box">
                        <span class="label">Cost Per Candle</span>
                        <span class="value">-16% Sanity</span>
                    </div>
                    <div class="stat-box">
                        <span class="label">Total Cost</span>
                        <span class="value">-80% Sanity</span>
                    </div>
                </div>
                <p class="danger"><strong>Hunt Trigger:</strong> 
                <br>• IMMEDIATELY after the 5s trap ends.
                <br>• If you light the last candle with &#60;16% sanity.</p>
            </div>`
    },
    {
        name: "Tarot Cards",
        image: "https://static.wikia.nocookie.net/phasmophobia/images/c/c5/Tarot_Cards_Render.png",
        description: `
            <div class="cursed-details">
                <p><strong>Effect:</strong> Draw 10 cards. Random effects.</p>
                <ul class="tarot-list">
                    <li><span class="t-red">Wheel (Red)</span>: -25% Sanity</li>
                    <li><span class="t-green">Wheel (Green)</span>: +25% Sanity</li>
                    <li><span class="t-blue">Tower</span>: Interaction</li>
                    <li><span class="t-purple">Death</span>: Cursed Hunt</li>
                    <li><span class="t-white">Moon</span>: 0% Sanity</li>
                    <li><span class="t-gold">Sun</span>: 100% Sanity</li>
                    <li><span class="t-cyan">High Priestess</span>: Revive</li>
                    <li><span class="t-fail">Hanged Man</span>: INSTANT DEATH</li>
                </ul>
            </div>`
    },
    {
        name: "Monkey Paw",
        image: "https://static.wikia.nocookie.net/phasmophobia/images/7/7b/Monkey_Paw_Render.png",
        description: `
            <div class="cursed-details">
                <p><strong>Effect:</strong> Grant wishes. Example: "I wish to see the ghost". Wishes vary by multiplier (3-5 wishes).</p>
                <div class="stats-grid">
                    <div class="stat-box">
                        <span class="label">See Ghost</span>
                        <span class="value">Event + Hunt</span>
                    </div>
                    <div class="stat-box">
                        <span class="label">Sanity</span>
                        <span class="value">Set to 50%</span>
                    </div>
                </div>
                <p class="danger"><strong>Hunt Trigger:</strong> 
                <br>• Most wishes trigger a hunt or bad effect.
                <br>• "I wish to see the ghost" = Instant Hunt.</p>
            </div>`
    }
];
