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
                    <div class="stat-box"><span class="label">Sanity Drain</span><span class="value">2.5% / sec</span></div>
                    <div class="stat-box"><span class="label">Total Drain</span><span class="value">~75%</span></div>
                </div>
                <div class="stats-grid">
                    <div class="stat-box"><span class="label">Detection Radius</span><span class="value">20m</span></div>
                    <div class="stat-box"><span class="label">Safe Duration</span><span class="value">30 seconds</span></div>
                </div>
                
                <div class="wish-section" style="border-left: 3px solid #87ceeb;">
                    <h4>⚙️ How It Works</h4>
                    <p>If the ghost is within 5m, it will fully manifest and walk towards the box. Playing continuously attracts the ghost to your location.</p>
                </div>

                <div class="wish-section" style="border-left: 3px solid #ff6b9d;">
                    <h4>⚠️ Hunt Triggers</h4>
                    <div class="wish-item">
                        <p><strong>Ghost Touches You</strong></p>
                        <p>Immediate cursed hunt if ghost reaches you or the box.</p>
                    </div>
                    <div class="wish-item">
                        <p><strong>Playing Too Long</strong></p>
                        <p>Hunt starts automatically after 30 seconds of continuous play.</p>
                    </div>
                    <div class="wish-item">
                        <p><strong>Throwing While Playing</strong></p>
                        <p>Triggers hunt. Dropping safely (not throwing) is safe.</p>
                    </div>
                    <div class="wish-item">
                        <p><strong>0% Sanity</strong></p>
                        <p>Using at zero sanity causes immediate hunt.</p>
                    </div>
                </div>
            </div>`,
            pl: `
            <div class="cursed-details">
                <p><strong>Efekt:</strong> Zmusza ducha do śpiewania, ujawniając jego pozycję. Pozwala łatwo zlokalizować ducha i zrobić mu zdjęcie bez pełnego ataku.</p>
                <div class="stats-grid">
                    <div class="stat-box"><span class="label">Koszt Sanity</span><span class="value">2.5% / sek</span></div>
                    <div class="stat-box"><span class="label">Całkowity Koszt</span><span class="value">~75%</span></div>
                </div>
                <div class="stats-grid">
                    <div class="stat-box"><span class="label">Promień Wykrycia</span><span class="value">20m</span></div>
                    <div class="stat-box"><span class="label">Bezpieczny Czas</span><span class="value">30 sekund</span></div>
                </div>
                
                <div class="wish-section" style="border-left: 3px solid #87ceeb;">
                    <h4>⚙️ Jak Działa</h4>
                    <p>Jeśli duch jest bliżej niż 5m, zmaterializuje się i będzie szedł w stronę pozytywki. Ciągła gra przyciąga ducha do Twojej lokacji.</p>
                </div>

                <div class="wish-section" style="border-left: 3px solid #ff6b9d;">
                    <h4>⚠️ Wywołuje Polowanie</h4>
                    <div class="wish-item">
                        <p><strong>Duch Dotknie Cię</strong></p>
                        <p>Natychmiast przeklęte polowanie gdy duch dotknie Cię lub pudełko.</p>
                    </div>
                    <div class="wish-item">
                        <p><strong>Za Długa Gra</strong></p>
                        <p>Polowanie zaczyna się automatycznie po 30 sekundach ciągłej gry.</p>
                    </div>
                    <div class="wish-item">
                        <p><strong>Rzucenie Podczas Gry</strong></p>
                        <p>Wywołuje polowanie. Porzucenie bezpiecznie (nie rzucanie) jest OK.</p>
                    </div>
                    <div class="wish-item">
                        <p><strong>0% Sanity</strong></p>
                        <p>Użycie przy zerowym sanity powoduje natychmiast polowanie.</p>
                    </div>
                </div>

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
                    <div class="stat-box"><span class="label">Response Rate</span><span class="value">100% Guaranteed</span></div>
                </div>

                <div class="wish-section" style="border-left: 3px solid #87ceeb;">
                    <h4>⚙️ Usage</h4>
                    <p>Right-click to activate, then use your microphone or UI to ask questions. <strong>You MUST say "Goodbye"</strong> to end the session properly.</p>
                </div>

                <div class="wish-section" style="border-left: 3px solid #f7b731;">
                    <h4>✅ Safe Questions</h4>
                    <div class="wish-item">
                        <p><strong>Location</strong></p>
                        <p>Ask where the ghost currently is.</p>
                    </div>
                    <div class="wish-item">
                        <p><strong>Bone Position</strong></p>
                        <p>Ask where the ghost bones are hidden.</p>
                    </div>
                    <div class="wish-item">
                        <p><strong>Age & Death Info</strong></p>
                        <p>Ask about the ghost's age or cause of death.</p>
                    </div>
                </div>

                <div class="wish-section" style="border-left: 3px solid #ff6b9d;">
                    <h4>⚠️ Hunt Triggers</h4>
                    <div class="wish-item">
                        <p><strong>No Goodbye</strong></p>
                        <p>If you leave without saying "Goodbye", board breaks and hunt starts.</p>
                    </div>
                    <div class="wish-item">
                        <p><strong>Low Sanity</strong></p>
                        <p>Asking with insufficient sanity causes board to shatter and hunt.</p>
                    </div>
                    <div class="wish-item">
                        <p><strong>"Hide and Seek"</strong></p>
                        <p>Saying this phrase triggers a 5 second countdown to hunt.</p>
                    </div>
                    <div class="wish-item">
                        <p><strong>"Knock Knock"</strong></p>
                        <p>Playing this game with the board triggers immediate hunt.</p>
                    </div>
                </div>
            </div>`,
            pl: `
            <div class="cursed-details">
                <p><strong>Efekt:</strong> Bezpośrednia komunikacja z duchem. Pytaj o lokalizację, kość, wiek lub przyczynę śmierci.</p>
                <div class="stats-grid">
                    <div class="stat-box"><span class="label">Koszt Sanity</span><span class="value">5% - 50%</span></div>
                    <div class="stat-box"><span class="label">Odpowiedź</span><span class="value">100% Gwarantowana</span></div>
                </div>

                <div class="wish-section" style="border-left: 3px solid #87ceeb;">
                    <h4>⚙️ Użycie</h4>
                    <p>Kliknij PPM aby aktywować, następnie używaj mikrofonu lub UI do zadawania pytań. <strong>MUSISZ powiedzieć "Goodbye"</strong> aby prawidłowo zakończyć sesję.</p>
                </div>

                <div class="wish-section" style="border-left: 3px solid #f7b731;">
                    <h4>✅ Bezpieczne Pytania</h4>
                    <div class="wish-item">
                        <p><strong>Lokalizacja</strong></p>
                        <p>Pytaj gdzie aktualnie przebywa duch.</p>
                    </div>
                    <div class="wish-item">
                        <p><strong>Pozycja Kości</strong></p>
                        <p>Pytaj gdzie ukryte są kości ducha.</p>
                    </div>
                    <div class="wish-item">
                        <p><strong>Wiek i Śmierć</strong></p>
                        <p>Pytaj o wiek ducha lub przyczynę śmierci.</p>
                    </div>
                </div>

                <div class="wish-section" style="border-left: 3px solid #ff6b9d;">
                    <h4>⚠️ Wywołuje Polowanie</h4>
                    <div class="wish-item">
                        <p><strong>Brak Goodbye</strong></p>
                        <p>Jeśli odejdziesz bez "Goodbye", tablica pęka i zaczyna się polowanie.</p>
                    </div>
                    <div class="wish-item">
                        <p><strong>Niskie Sanity</strong></p>
                        <p>Pytanie przy niewystarczającym sanity powoduje pęknięcie i polowanie.</p>
                    </div>
                    <div class="wish-item">
                        <p><strong>"Hide and Seek"</strong></p>
                        <p>Powiedzenie tej frazy uruchamia 5-sekundowy odliczanie do polowania.</p>
                    </div>
                    <div class="wish-item">
                        <p><strong>"Knock Knock"</strong></p>
                        <p>Gra w tę grę z tablicą uruchamia natychmiastowe polowanie.</p>
                    </div>
                </div>
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
                    <div class="stat-box"><span class="label">Sanity Cost</span><span class="value">5% / Pin</span></div>
                    <div class="stat-box"><span class="label">Total Pins</span><span class="value">10 Pins</span></div>
                </div>

                <div class="wish-section" style="border-left: 3px solid #87ceeb;">
                    <h4>⚙️ How It Works</h4>
                    <p>Press a button to push one pin into the doll, forcing a ghost interaction. Each pin has a small chance (~9%) to be the heart pin (instant death trigger).</p>
                </div>

                <div class="wish-section" style="border-left: 3px solid #4ecdc4;">
                    <h4>👻 Pin Effects</h4>
                    <div class="wish-item">
                        <p><strong>Standard Pins (9/10)</strong></p>
                        <p>Cause various ghost interactions - knocking, manifestations, or events.</p>
                    </div>
                    <div class="wish-item">
                        <p><strong>Heart Pin (1/10)</strong></p>
                        <p>Causes full manifestation AND immediate cursed hunt.</p>
                    </div>
                </div>

                <div class="wish-section" style="border-left: 3px solid #ff6b9d;">
                    <h4>⚠️ Hunt Triggers</h4>
                    <div class="wish-item">
                        <p><strong>Heart Pin</strong></p>
                        <p>~9% chance each pin is the heart. Triggers immediate cursed hunt.</p>
                    </div>
                    <div class="wish-item">
                        <p><strong>Low Sanity</strong></p>
                        <p>Using with less than 5% sanity causes ALL pins to push at once!</p>
                    </div>
                </div>
            </div>`,
            pl: `
            <div class="cursed-details">
                <p><strong>Efekt:</strong> Wymusza interakcje ducha. Każde użycie wbija jedną z 10 szpilek w lalkę.</p>
                <div class="stats-grid">
                    <div class="stat-box"><span class="label">Koszt Sanity</span><span class="value">5% / Szpilka</span></div>
                    <div class="stat-box"><span class="label">Ilość Szpilek</span><span class="value">10 Szpilek</span></div>
                </div>

                <div class="wish-section" style="border-left: 3px solid #87ceeb;">
                    <h4>⚙️ Jak Działa</h4>
                    <p>Naciśnij przycisk aby wbić jedną szpilkę w lalkę, wymuszając interakcję ducha. Każda szpilka ma małą szansę (~9%) być szpilką w sercu (natychmiastowy atak).</p>
                </div>

                <div class="wish-section" style="border-left: 3px solid #4ecdc4;">
                    <h4>👻 Efekty Szpilek</h4>
                    <div class="wish-item">
                        <p><strong>Zwykłe Szpilki (9/10)</strong></p>
                        <p>Powodują różne interakcje ducha - pukanie, manifestacje lub eventy.</p>
                    </div>
                    <div class="wish-item">
                        <p><strong>Szpilka w Sercu (1/10)</strong></p>
                        <p>Powoduje pełną manifestację I natychmiastowe przeklęte polowanie.</p>
                    </div>
                </div>

                <div class="wish-section" style="border-left: 3px solid #ff6b9d;">
                    <h4>⚠️ Wywołuje Polowanie</h4>
                    <div class="wish-item">
                        <p><strong>Szpilka w Sercu</strong></p>
                        <p>~9% szansa że każda szpilka będzie sercem. Uruchamia natychmiastowe polowanie.</p>
                    </div>
                    <div class="wish-item">
                        <p><strong>Niskie Sanity</strong></p>
                        <p>Użycie mając mniej niż 5% sanity powoduje że WSZYSTKIE szpilki wbijają się naraz!</p>
                    </div>
                </div>
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
                    <div class="stat-box"><span class="label">Initial Cost</span><span class="value">20% Sanity</span></div>
                    <div class="stat-box"><span class="label">Continuous Drain</span><span class="value">7.5% / sec</span></div>
                </div>

                <div class="wish-section" style="border-left: 3px solid #87ceeb;">
                    <h4>⚙️ Strategy</h4>
                    <p><strong>Quick glance</strong> to identify the room's furniture and layout, then immediately stop looking. The sanity drain is EXTREMELY aggressive - do not stare for long.</p>
                </div>

                <div class="wish-section" style="border-left: 3px solid #4ecdc4;">
                    <h4>👁️ What You See</h4>
                    <div class="wish-item">
                        <p><strong>Real-Time View</strong></p>
                        <p>Live feed of the ghost's current favorite room.</p>
                    </div>
                    <div class="wish-item">
                        <p><strong>Room Identification</strong></p>
                        <p>Spot furniture and layout to identify which room it is.</p>
                    </div>
                </div>

                <div class="wish-section" style="border-left: 3px solid #ff6b9d;">
                    <h4>⚠️ Hunt Triggers</h4>
                    <div class="wish-item">
                        <p><strong>0% Sanity While Looking</strong></p>
                        <p>If sanity reaches 0% while looking at mirror, glass shatters immediately.</p>
                    </div>
                    <div class="wish-item">
                        <p><strong>Hunt From Ghost Location</strong></p>
                        <p>Hunt begins directly from the ghost's current position.</p>
                    </div>
                </div>
            </div>`,
            pl: `
            <div class="cursed-details">
                <p><strong>Efekt:</strong> Patrzenie w lustro pokazuje na żywo obraz z ulubionego pokoju ducha.</p>
                <div class="stats-grid">
                    <div class="stat-box"><span class="label">Koszt Początkowy</span><span class="value">20% Sanity</span></div>
                    <div class="stat-box"><span class="label">Ciągła Strata</span><span class="value">7.5% / sek</span></div>
                </div>

                <div class="wish-section" style="border-left: 3px solid #87ceeb;">
                    <h4>⚙️ Strategia</h4>
                    <p><strong>Szybkie spojrzenie</strong> aby zidentyfikować meble i układ pokoju, następnie natychmiast przestań patrzeć. Utrata sanity jest NIEZWYKLE agresywna - nie patrz zbyt długo.</p>
                </div>

                <div class="wish-section" style="border-left: 3px solid #4ecdc4;">
                    <h4>👁️ Co Widzisz</h4>
                    <div class="wish-item">
                        <p><strong>Transmisja Na Żywo</strong></p>
                        <p>Obraz na żywo z obecnego ulubionego pokoju ducha.</p>
                    </div>
                    <div class="wish-item">
                        <p><strong>Identyfikacja Pokoju</strong></p>
                        <p>Dostrzeż meble i układ aby zidentyfikować który to pokój.</p>
                    </div>
                </div>

                <div class="wish-section" style="border-left: 3px solid #ff6b9d;">
                    <h4>⚠️ Wywołuje Polowanie</h4>
                    <div class="wish-item">
                        <p><strong>0% Sanity Podczas Patrzenia</strong></p>
                        <p>Jeśli sanity osiągnie 0% podczas patrzenia, szkło pęka natychmiast.</p>
                    </div>
                    <div class="wish-item">
                        <p><strong>Polowanie Z Lokacji Ducha</strong></p>
                        <p>Polowanie zaczyna się bezpośrednio z pozycji ducha.</p>
                    </div>
                </div>
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
                
                <div class="wish-section" style="border-left: 3px solid #ff6b9d;">
                    <h4>🔴 Dangerous Cards</h4>
                    <div class="wish-item">
                        <p><strong>The Hanged Man</strong></p>
                        <p>Instant Death (very rare)</p>
                    </div>
                    <div class="wish-item">
                        <p><strong>Death</strong></p>
                        <p>Cursed Hunt (60s)</p>
                    </div>
                </div>
                
                <div class="wish-section" style="border-left: 3px solid #f7b731;">
                    <h4>⚠️ Mixed Effects</h4>
                    <div class="wish-item">
                        <p><strong>The Devil</strong></p>
                        <p>Ghost Event</p>
                    </div>
                    <div class="wish-item">
                        <p><strong>The Moon</strong></p>
                        <p>-100% Sanity (0%)</p>
                    </div>
                    <div class="wish-item">
                        <p><strong>The Tower</strong></p>
                        <p>Interaction + 2x Activity (20s)</p>
                    </div>
                    <div class="wish-item">
                        <p><strong>Wheel of Fortune</strong></p>
                        <p>±25% Sanity (random)</p>
                    </div>
                </div>
                
                <div class="wish-section" style="border-left: 3px solid #4ecdc4;">
                    <h4>✅ Beneficial Cards</h4>
                    <div class="wish-item">
                        <p><strong>The Sun</strong></p>
                        <p>+100% Sanity</p>
                    </div>
                    <div class="wish-item">
                        <p><strong>The Hermit</strong></p>
                        <p>Traps Ghost (1 min)</p>
                    </div>
                    <div class="wish-item">
                        <p><strong>The High Priestess</strong></p>
                        <p>Revives Dead Player</p>
                    </div>
                </div>
                
                <div class="wish-section" style="border-left: 3px solid #87ceeb;">
                    <h4>😴 Special Cards</h4>
                    <div class="wish-item">
                        <p><strong>The Fool</strong></p>
                        <p>No Effect (always during hunt)</p>
                    </div>
                </div>
                
                <p class="info"><strong>Tip:</strong> Cards drawn during a hunt always become The Fool. Green burn = good, Red burn = bad.</p>
            </div>`,
            pl: `
            <div class="cursed-details">
                <p><strong>Efekt:</strong> 10 losowych kart z unikalnymi efektami. Wyciągnięcie wszystkich 10 wydłuża przyszłe polowania o 20 sekund. Karty płoną różnymi kolorami.</p>
                
                <div class="wish-section" style="border-left: 3px solid #ff6b9d;">
                    <h4>🔴 Niebezpieczne Karty</h4>
                    <div class="wish-item">
                        <p><strong>The Hanged Man</strong></p>
                        <p>Natychmiastowa Śmierć (bardzo rzadka)</p>
                    </div>
                    <div class="wish-item">
                        <p><strong>Death</strong></p>
                        <p>Przeklęte Polowanie (60s)</p>
                    </div>
                </div>
                
                <div class="wish-section" style="border-left: 3px solid #f7b731;">
                    <h4>⚠️ Mieszane Efekty</h4>
                    <div class="wish-item">
                        <p><strong>The Devil</strong></p>
                        <p>Ghost Event</p>
                    </div>
                    <div class="wish-item">
                        <p><strong>The Moon</strong></p>
                        <p>-100% Sanity (0%)</p>
                    </div>
                    <div class="wish-item">
                        <p><strong>The Tower</strong></p>
                        <p>Interakcja + 2x Aktywność (20s)</p>
                    </div>
                    <div class="wish-item">
                        <p><strong>Wheel of Fortune</strong></p>
                        <p>±25% Sanity (losowo)</p>
                    </div>
                </div>
                
                <div class="wish-section" style="border-left: 3px solid #4ecdc4;">
                    <h4>✅ Korzystne Karty</h4>
                    <div class="wish-item">
                        <p><strong>The Sun</strong></p>
                        <p>+100% Sanity</p>
                    </div>
                    <div class="wish-item">
                        <p><strong>The Hermit</strong></p>
                        <p>Więzi Ducha (1 min)</p>
                    </div>
                    <div class="wish-item">
                        <p><strong>The High Priestess</strong></p>
                        <p>Wskrzesza Martwego Gracza</p>
                    </div>
                </div>
                
                <div class="wish-section" style="border-left: 3px solid #87ceeb;">
                    <h4>😴 Specjalne Karty</h4>
                    <div class="wish-item">
                        <p><strong>The Fool</strong></p>
                        <p>Brak Efektu (zawsze podczas polowania)</p>
                    </div>
                </div>
                
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
                
                <div class="wish-section" style="border-left: 3px solid #87ceeb;">
                    <h4>⚙️ How It Works</h4>
                    <div class="wish-item">
                        <p><strong>Activation</strong></p>
                        <p>Lights candles using a lighter. Each candle costs 16% sanity.</p>
                    </div>
                    <div class="wish-item">
                        <p><strong>Manifestation</strong></p>
                        <p>Ghost appears inside the circle, paralyzed for 5 seconds after full lighting.</p>
                    </div>
                </div>
                
                <div class="wish-section" style="border-left: 3px solid #f7b731;">
                    <h4>⏱️ Timeline</h4>
                    <div class="wish-item">
                        <p><strong>Grace Period</strong></p>
                        <p>0 seconds - hunt starts immediately after manifestation ends.</p>
                    </div>
                    <div class="wish-item">
                        <p><strong>Paralysis Duration</strong></p>
                        <p>5 seconds of complete ghost immobility for prepared players.</p>
                    </div>
                </div>
                
                <div class="wish-section" style="border-left: 3px solid #ff6b9d;">
                    <h4>⚠️ Hunt Triggers</h4>
                    <div class="wish-item">
                        <p><strong>Fully Lighting the Circle</strong></p>
                        <p>Hunt starts after 5 seconds of manifestation (after 5th candle is lit).</p>
                    </div>
                    <div class="wish-item">
                        <p><strong>Insufficient Sanity</strong></p>
                        <p>Attempting to light a candle with insufficient sanity starts hunt instantly.</p>
                    </div>
                </div>
            </div>`,
            pl: `
            <div class="cursed-details">
                <p><strong>Efekt:</strong> Zapal 5 świec, by przywołać ducha. Pojawi się w środku na 5s (zamrożony), po czym zaatakuje.</p>
                <div class="stats-grid">
                    <div class="stat-box"><span class="label">Koszt / Świeca</span><span class="value">16% Sanity</span></div>
                    <div class="stat-box"><span class="label">Koszt Suma</span><span class="value">80% Suma</span></div>
                </div>
                
                <div class="wish-section" style="border-left: 3px solid #87ceeb;">
                    <h4>⚙️ Jak Działa</h4>
                    <div class="wish-item">
                        <p><strong>Aktywacja</strong></p>
                        <p>Zapal świece zapalniczką. Każda świeca kosztuje 16% sanity.</p>
                    </div>
                    <div class="wish-item">
                        <p><strong>Manifestacja</strong></p>
                        <p>Duch pojawia się w środku kręgu, zamrożony na 5 sekund po zapaleniu wszystkich świec.</p>
                    </div>
                </div>
                
                <div class="wish-section" style="border-left: 3px solid #f7b731;">
                    <h4>⏱️ Oś Czasu</h4>
                    <div class="wish-item">
                        <p><strong>Okres Przygotowania</strong></p>
                        <p>0 sekund - polowanie zaczyna się natychmiast po zakończeniu manifestacji.</p>
                    </div>
                    <div class="wish-item">
                        <p><strong>Czas Zamrożenia</strong></p>
                        <p>5 sekund całkowitej immobilizacji ducha dla przygotowanych graczy.</p>
                    </div>
                </div>
                
                <div class="wish-section" style="border-left: 3px solid #ff6b9d;">
                    <h4>⚠️ Wywołuje Polowanie</h4>
                    <div class="wish-item">
                        <p><strong>Pełne Zapalenie Kręgu</strong></p>
                        <p>Polowanie zaczyna się po 5 sekundach manifestacji (po zapaleniu 5. świecy).</p>
                    </div>
                    <div class="wish-item">
                        <p><strong>Zbyt Niskie Sanity</strong></p>
                        <p>Próba zapalenia świecy przy zbyt niskim sanity rozpoczyna polowanie natychmiast.</p>
                    </div>
                </div>
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
                <p><strong>Effect:</strong> Powerful item granting wishes that manipulate the ghost, players, or environment. Each wish comes with permanent negative side effects for the contract.</p>
                <div class="stats-grid">
                    <div class="stat-box"><span class="label">Wishes Available</span><span class="value">3 - 5 (by difficulty multiplier)</span></div>
                    <div class="stat-box"><span class="label">Multiplier 0x-1x</span><span class="value">5 wishes</span></div>
                </div>
                <div class="stats-grid">
                    <div class="stat-box"><span class="label">Multiplier 1.01x-2x</span><span class="value">4 wishes</span></div>
                    <div class="stat-box"><span class="label">Multiplier 2.01x+</span><span class="value">3 wishes</span></div>
                </div>
                
                <div class="wish-section">
                    <h4>⚙️ Usage & Mechanics</h4>
                    <p>Hold and press <strong>Primary Use</strong> to open wish menu (or use voice chat). Menu shows 3 categories with wish options. <strong>Voice recognition available.</strong></p>
                    <p>Paw fingers curl as wishes are used. When all fingers are bent, no more wishes available. Fingers twitch when valid phrases detected or entering/exiting investigation area.</p>
                </div>

                <div class="wish-section" style="border-left: 3px solid #ff6b9d;">
                    <h4>👻 Ghost Category Wishes</h4>
                    <div class="wish-item">
                        <p><strong>'I wish to see the ghost'</strong></p>
                        <p>Summons ghost event at its location, locks exits for 5s, then cursed hunt with dark fog vision for wisher.</p>
                    </div>
                    <div class="wish-item">
                        <p><strong>'I wish for activity' / 'I wish the ghost would do something'</strong></p>
                        <p>Doubles all ghost activity for 2 min, breaks fuse box permanently, locks doors for 2 min.</p>
                    </div>
                    <div class="wish-item">
                        <p><strong>'I wish the ghost was trapped' / 'I wish to trap the ghost'</strong></p>
                        <p>Applies cleansing effect, teleports ghost to favorite room, locks connected doors 1 min (25% chance doors unlock early). Ghost cannot hunt/roam during this period.</p>
                    </div>
                </div>

                <div class="wish-section" style="border-left: 3px solid #4ecdc4;">
                    <h4>🧑 Player Category Wishes</h4>
                    <div class="wish-item">
                        <p><strong>'I wish for sanity' / 'I wish to be sane'</strong></p>
                        <p>Sets all players to 50% sanity, but passive drain multiplied by 1.5x for rest of contract. Ghost's favorite room randomized.</p>
                    </div>
                    <div class="wish-item">
                        <p><strong>'I wish to be safe'</strong></p>
                        <p>Unblocks nearest hiding spot but breaks room lights. For rest of contract, ghost hears wisher and senses their electronics at any distance.</p>
                    </div>
                    <div class="wish-item">
                        <p><strong>'I wish to leave'</strong></p>
                        <p>Unlocks all exits (even during hunt). Wisher's speed reduced for 5s, vision reduced during this time.</p>
                    </div>
                </div>

                <div class="wish-section" style="border-left: 3px solid #f7b731;">
                    <h4>✨ Other Wishes</h4>
                    <div class="wish-item">
                        <p><strong>'I wish for life' / 'I wish to revive my friend'</strong></p>
                        <p>Revives first deceased player (50% chance wisher dies instead). Cannot be used if no player is dead.</p>
                    </div>
                    <div class="wish-item">
                        <p><strong>'I wish for knowledge'</strong></p>
                        <p>Removes one incorrect evidence and associated ghost types. Ghost teleports near wisher and starts cursed hunt. Vision dark fog and hearing muffled until death or end of contract.</p>
                    </div>
                    <div class="wish-item">
                        <p><strong>'I wish for [weather]'</strong> (Clear Sky, Fog, Rain, Snow, Sunrise)</p>
                        <p>Changes weather as desired. All players temporarily blinded, wisher loses 25% sanity. Cannot be used below 25% sanity.</p>
                    </div>
                    <div class="wish-item">
                        <p><strong>'I wish for anything'</strong></p>
                        <p>Randomly grants one unused wish.</p>
                    </div>
                </div>

                <p class="danger"><strong>⚠️ Important:</strong> Each wish used only once per contract. Wish tags found scattered around Sunny Meadows (optional to find). Effects stack throughout the contract.</p>
            </div>`,
            pl: `
            <div class="cursed-details">
                <p><strong>Efekt:</strong> Potężny przedmiot dający życzenia, które manipulują duchem, graczami lub otoczeniem. Każde życzenie ma stałe negatywne efekty na resztę kontraktu.</p>
                <div class="stats-grid">
                    <div class="stat-box"><span class="label">Dostępne Życzenia</span><span class="value">3 - 5 (zależnie od mnożnika)</span></div>
                    <div class="stat-box"><span class="label">Mnożnik 0x-1x</span><span class="value">5 życzeń</span></div>
                </div>
                <div class="stats-grid">
                    <div class="stat-box"><span class="label">Mnożnik 1.01x-2x</span><span class="value">4 życzenia</span></div>
                    <div class="stat-box"><span class="label">Mnożnik 2.01x+</span><span class="value">3 życzenia</span></div>
                </div>

                <div class="wish-section">
                    <h4>⚙️ Użycie & Mechanika</h4>
                    <p>Przytrzymaj i naciśnij <strong>główny przycisk</strong>, by otworzyć menu (lub użyj głosu). Menu pokazuje 3 kategorie z opcjami. <strong>Dostępne rozpoznawanie głosu.</strong></p>
                    <p>Palce łapki zginają się wraz z użytymi życzeniami. Gdy wszystkie palce są zgięte, więcej życzeń niedostępne. Palce drgają gdy wykryje prawidłową frazę lub wejście/wyjście z obszaru śledztwa.</p>
                </div>

                <div class="wish-section" style="border-left: 3px solid #ff6b9d;">
                    <h4>👻 Życzenia o Ducha</h4>
                    <div class="wish-item">
                        <p><strong>'Chcę zobaczyć ducha'</strong></p>
                        <p>Przywołuje event ducha w jego lokacji, blokuje wyjścia na 5s, następnie przeklęte polowanie z ciemną mgłą dla życzącego.</p>
                    </div>
                    <div class="wish-item">
                        <p><strong>'Chcę aktywności' / 'Chciałbym, żeby duch coś zrobił'</strong></p>
                        <p>Podwaja całą aktywność ducha przez 2 min, trwale niszczy bezpieczniki, blokuje drzwi na 2 min.</p>
                    </div>
                    <div class="wish-item">
                        <p><strong>'Chcę uwięzić ducha' / 'Chcę zatnąć ducha'</strong></p>
                        <p>Stosuje efekt oczyszczenia, teleportuje ducha do ulubionego pokoju, blokuje połączone drzwi na 1 min (25% szans na wcześniejsze otwarcie). Duch nie atakuje/wędruje w tym czasie.</p>
                    </div>
                </div>

                <div class="wish-section" style="border-left: 3px solid #4ecdc4;">
                    <h4>🧑 Życzenia o Gracza</h4>
                    <div class="wish-item">
                        <p><strong>'Chcę sanity' / 'Chcę być zdrowy psychicznie'</strong></p>
                        <p>Ustawia całą drużynę na 50% sanity, ale pasywna utrata pomnożona przez 1.5x do końca kontraktu. Ulubiony pokój ducha jest losowany na nowo.</p>
                    </div>
                    <div class="wish-item">
                        <p><strong>'Chcę być bezpieczny'</strong></p>
                        <p>Odblokowuje najbliższe miejsce ukrycia, ale niszczy światła w pokoju. Do końca kontraktu duch słyszy życzącego i wyczuwa jego elektronikę na dowolnej odległości.</p>
                    </div>
                    <div class="wish-item">
                        <p><strong>'Chcę wyjść'</strong></p>
                        <p>Odblokowuje wszystkie wyjścia (nawet podczas polowania). Prędkość życzącego zmniejszona na 5s, wizja też ograniczona w tym czasie.</p>
                    </div>
                </div>

                <div class="wish-section" style="border-left: 3px solid #f7b731;">
                    <h4>✨ Pozostałe Życzenia</h4>
                    <div class="wish-item">
                        <p><strong>'Chcę życia' / 'Chcę wskrzesić przyjaciela'</strong></p>
                        <p>Wskrzesza pierwszego martwego gracza (50% szans że życzący umrze zamiast tego). Nie można użyć jeśli żaden gracz nie jest martwy.</p>
                    </div>
                    <div class="wish-item">
                        <p><strong>'Chcę wiedzy'</strong></p>
                        <p>Usuwa jedno błędne dowód i powiązane typy duchów. Duch teleportuje się blisko życzącego i zaczyna przeklęte polowanie. Ciemna mgła w oczach i przytłumiony dźwięk do śmierci lub końca kontraktu.</p>
                    </div>
                    <div class="wish-item">
                        <p><strong>'Chcę [pogodę]'</strong> (Czyste Niebo, Mgła, Deszcz, Śnieg, Wschód)</p>
                        <p>Zmienia pogodę na życzenie. Wszyscy gracze tymczasowo oślepieni, życzący traci 25% sanity. Nie można użyć poniżej 25% sanity.</p>
                    </div>
                    <div class="wish-item">
                        <p><strong>'Chcę czegokolwiek'</strong></p>
                        <p>Losowo przyznaje jedno nieużyte życzenie.</p>
                    </div>
                </div>

                <p class="danger"><strong>⚠️ Ważne:</strong> Każde życzenie dostępne raz na kontrakt. Tagi życzeń można znaleźć rozrzucone w Sunny Meadows (opcjonalnie). Efekty kumulują się przez cały kontrakt.</p>
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
