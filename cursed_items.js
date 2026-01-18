const CURSED_ITEMS_DATA = [
    {
        name: { en: "Music Box", pl: "Pozytywka" },
        image: "https://static.wikia.nocookie.net/phasmophobia/images/5/52/Music_Box_Render.png",
        description: {
            en: `
            <div class="cursed-details">
                <p><strong>Effect:</strong> When activated, the ghost sings along if within 20m. Can be placed to make the ghost manifest and walk towards it for a photo.</p>
                <div class="stats-grid">
                    <div class="stat-box"><span class="label">Sanity Drain</span><span class="value">2.5% / sec</span></div>
                    <div class="stat-box"><span class="label">Range</span><span class="value">20m (Song) / 5m (Walk)</span></div>
                </div>
                <p class="danger"><strong>Hunt Trigger:</strong><br>• If the ghost touches the box.<br>• If you THROW the box while playing.<br>• If the box plays for 30s fully.</p>
            </div>`,
            pl: `
            <div class="cursed-details">
                <p><strong>Efekt:</strong> Po aktywacji duch śpiewa, jeśli jest w promieniu 20m. Można ją postawić, aby duch się zmaterializował i podszedł do niej (idealne do zdjęcia).</p>
                <div class="stats-grid">
                    <div class="stat-box"><span class="label">Koszt Sanity</span><span class="value">2.5% / sek</span></div>
                    <div class="stat-box"><span class="label">Zasięg</span><span class="value">20m (Śpiew) / 5m (Spacer)</span></div>
                </div>
                <p class="danger"><strong>Ryzyko Polowania:</strong><br>• Jeśli duch dotknie pozytywki.<br>• Jeśli RZUCISZ pozytywkę podczas grania.<br>• Jeśli melodia zagra do końca (30s).</p>
            </div>`
        }
    },
    {
        name: { en: "Ouija Board", pl: "Tablica Ouija" },
        image: "https://static.wikia.nocookie.net/phasmophobia/images/4/42/Ouija_Board_Render.png",
        description: {
            en: `
            <div class="cursed-details">
                <p><strong>Effect:</strong> Ask questions like "Where are you?" (Room), "Bone" (Bone Location), or "Hide and Seek" (Count to 5 then Hunt).</p>
                <div class="stats-grid">
                    <div class="stat-box"><span class="label">Location Q</span><span class="value">-50% Sanity</span></div>
                    <div class="stat-box"><span class="label">General Q</span><span class="value">-5% / -20% Sanity</span></div>
                </div>
                <p class="danger"><strong>Hunt Trigger:</strong><br>• Asking meaningful Q with insufficient sanity.<br>• Walking away without saying "Goodbye".<br>• Asking "Hide and Seek".</p>
            </div>`,
            pl: `
            <div class="cursed-details">
                <p><strong>Efekt:</strong> Zadawaj pytania np. "Where are you?" (Pokój), "Bone" (Kość), lub "Hide and Seek" (Odliczanie do polowania).</p>
                <div class="stats-grid">
                    <div class="stat-box"><span class="label">Pytanie o Lokalizację</span><span class="value">-50% Sanity</span></div>
                    <div class="stat-box"><span class="label">Zwykłe Pytania</span><span class="value">-5% / -20% Sanity</span></div>
                </div>
                <p class="danger"><strong>Ryzyko Polowania:</strong><br>• Zadanie pytania mając za mało sanity.<br>• Odejsćie bez powiedzenia "Goodbye".<br>• Pytanie "Hide and Seek" (Chowany).</p>
            </div>`
        }
    },
    {
        name: { en: "Voodoo Doll", pl: "Lalka Voodoo" },
        image: "https://static.wikia.nocookie.net/phasmophobia/images/1/18/Voodoo_Doll_Render.png",
        description: {
            en: `
            <div class="cursed-details">
                <p><strong>Effect:</strong> Push 1-10 pins to force interactions. Pins are random.</p>
                <div class="stats-grid">
                    <div class="stat-box"><span class="label">Normal Pin</span><span class="value">-5% Sanity</span></div>
                    <div class="stat-box"><span class="label">Heart Pin</span><span class="value">-10% Sanity</span></div>
                </div>
                <p class="danger"><strong>Hunt Trigger:</strong><br>• Heart Pin pushed (Random or Requested).<br>• Pushing any pin with &#60;5% Sanity.</p>
            </div>`,
            pl: `
            <div class="cursed-details">
                <p><strong>Efekt:</strong> Wbijasz szpilki (1-10), aby wymusić interakcje. Szpilki są losowe.</p>
                <div class="stats-grid">
                    <div class="stat-box"><span class="label">Zwykła Szpilka</span><span class="value">-5% Sanity</span></div>
                    <div class="stat-box"><span class="label">Szpilka w Serce</span><span class="value">-10% Sanity</span></div>
                </div>
                <p class="danger"><strong>Ryzyko Polowania:</strong><br>• Wbicie szpilki w serce (losowo lub celowo).<br>• Użycie lalki mając mniej niż 5% sanity.</p>
            </div>`
        }
    },
    {
        name: { en: "Haunted Mirror", pl: "Nawiedzone Lustro" },
        image: "https://static.wikia.nocookie.net/phasmophobia/images/2/22/Haunted_Mirror_Render.png",
        description: {
            en: `
            <div class="cursed-details">
                <p><strong>Effect:</strong> Shows a live view of the Ghost's Room. The room is highlighted with a panning view.</p>
                <div class="stats-grid">
                    <div class="stat-box"><span class="label">Usage Cost</span><span class="value">-20% (Instant)</span></div>
                    <div class="stat-box"><span class="label">Drain Rate</span><span class="value">-7.5% / sec</span></div>
                </div>
                <p class="danger"><strong>Hunt Trigger:</strong><br>• Reaching 0% Sanity while looking.</p>
            </div>`,
            pl: `
            <div class="cursed-details">
                <p><strong>Efekt:</strong> Pokazuje podgląd ulubionego pokoju ducha.</p>
                <div class="stats-grid">
                    <div class="stat-box"><span class="label">Aktywacja</span><span class="value">-20% (Natychmiast)</span></div>
                    <div class="stat-box"><span class="label">Utrata Sanity</span><span class="value">-7.5% / sek</span></div>
                </div>
                <p class="danger"><strong>Ryzyko Polowania:</strong><br>• Spadek sanity do 0% podczas patrzenia (lustro pęka).</p>
            </div>`
        }
    },
    {
        name: { en: "Summoning Circle", pl: "Krąg Przywołań" },
        image: "https://static.wikia.nocookie.net/phasmophobia/images/a/a9/Summoning_Circle_Render.png",
        description: {
            en: `
            <div class="cursed-details">
                <p><strong>Effect:</strong> Light 5 candles to SUMMON the ghost. It stays trapped for 5 seconds (Perfect for Photo).</p>
                <div class="stats-grid">
                    <div class="stat-box"><span class="label">Cost Per Candle</span><span class="value">-16% Sanity</span></div>
                    <div class="stat-box"><span class="label">Total Cost</span><span class="value">-80% Sanity</span></div>
                </div>
                <p class="danger"><strong>Hunt Trigger:</strong><br>• IMMEDIATELY after the 5s trap ends.<br>• If you light the last candle with &#60;16% sanity.</p>
            </div>`,
            pl: `
            <div class="cursed-details">
                <p><strong>Efekt:</strong> Zapal 5 świec, aby PRZYWOŁAĆ ducha. Jest uwięziony przez 5 sekund (Chwila na zdjęcie).</p>
                <div class="stats-grid">
                    <div class="stat-box"><span class="label">Koszt Świecy</span><span class="value">-16% Sanity</span></div>
                    <div class="stat-box"><span class="label">Koszt Całkowity</span><span class="value">-80% Sanity</span></div>
                </div>
                <p class="danger"><strong>Ryzyko Polowania:</strong><br>• NATYCHMIAST po upływie 5 sekund.<br>• Zapalenie ostatniej świecy mając mniej niż 16% sanity = przywołanie bez uwięzienia (instant hunt).</p>
            </div>`
        }
    },
    {
        name: { en: "Tarot Cards", pl: "Karty Tarot" },
        image: "https://static.wikia.nocookie.net/phasmophobia/images/c/c5/Tarot_Cards_Render.png",
        description: {
            en: `
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
            </div>`,
            pl: `
            <div class="cursed-details">
                <p><strong>Efekt:</strong> Wyciągnij 10 kart. Losowe efekty.</p>
                <ul class="tarot-list">
                    <li><span class="t-red">Wheel (Czerw)</span>: -25% Sanity</li>
                    <li><span class="t-green">Wheel (Ziel)</span>: +25% Sanity</li>
                    <li><span class="t-blue">Tower</span>: Interakcja</li>
                    <li><span class="t-purple">Death</span>: Przeklęte Polowanie</li>
                    <li><span class="t-white">Moon</span>: 0% Sanity</li>
                    <li><span class="t-gold">Sun</span>: 100% Sanity</li>
                    <li><span class="t-cyan">High Priestess</span>: Wskrzeszenie</li>
                    <li><span class="t-fail">Hanged Man</span>: NATYCHMIASTOWA ŚMIERĆ</li>
                </ul>
            </div>`
        }
    },
    {
        name: { en: "Monkey Paw", pl: "Małpia Łapa" },
        image: "https://static.wikia.nocookie.net/phasmophobia/images/7/7b/Monkey_Paw_Render.png",
        description: {
            en: `
            <div class="cursed-details">
                <p><strong>Effect:</strong> Grant wishes. Example: "I wish to see the ghost". Wishes vary by multiplier (3-5 wishes).</p>
                <div class="stats-grid">
                    <div class="stat-box"><span class="label">See Ghost</span><span class="value">Event + Hunt</span></div>
                    <div class="stat-box"><span class="label">Sanity</span><span class="value">Set to 50%</span></div>
                </div>
                <p class="danger"><strong>Hunt Trigger:</strong><br>• Most wishes trigger a hunt or bad effect.<br>• "I wish to see the ghost" = Instant Hunt.</p>
            </div>`,
            pl: `
            <div class="cursed-details">
                <p><strong>Efekt:</strong> Spełnia życzenia. Np. "I wish to see the ghost". Liczba życzeń zależy od mnożnika (3-5).</p>
                <div class="stats-grid">
                    <div class="stat-box"><span class="label">See Ghost</span><span class="value">Event + Polowanie</span></div>
                    <div class="stat-box"><span class="label">Sanity Zmiana</span><span class="value">Ustawia na 50%</span></div>
                </div>
                <p class="danger"><strong>Ryzyko Polowania:</strong><br>• Większość życzeń ma efekt uboczny.<br>• "I wish to see the ghost" = Natychmiastowe Polowanie.</p>
            </div>`
        }
    }
];
