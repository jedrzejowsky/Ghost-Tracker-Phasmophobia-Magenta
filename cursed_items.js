const CURSED_ITEMS_DATA = [
    {
        name: { en: "Music Box", pl: "Pozytywka", ru: "Музыкальная шкатулка" },
        image: "https://static.wikia.nocookie.net/phasmophobia/images/5/5f/Music_box_display.jpg/revision/latest/scale-to-width-down/1000?cb=20230131144318",
        icon: "🎶",
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
            </div>`,
            ru: `
            <div class="cursed-details">
                <p><strong>Эффект:</strong> Призрак поет, если он в пределах 20м. Призрак выходит и идет к шкатулке (идеально для фото).</p>
                <div class="stats-grid">
                    <div class="stat-box"><span class="label">Рассудок</span><span class="value">-2.5% / сек</span></div>
                    <div class="stat-box"><span class="label">Радиус</span><span class="value">20м (Пение) / 5м (Ходьба)</span></div>
                </div>
                <p class="danger"><strong>Начало охоты:</strong><br>• Если призрак коснется шкатулки.<br>• Если БРОСИТЬ играющую шкатулку.<br>• Если мелодия доиграет до конца (30с).</p>
            </div>`
        }
    },
    {
        name: { en: "Ouija Board", pl: "Tablica Ouija", ru: "Доска Уиджи" },
        image: "https://static.wikia.nocookie.net/phasmophobia/images/2/2f/Ouija_Board_New.png/revision/latest?cb=20211210172553",
        icon: "☠️",
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
            </div>`,
            ru: `
            <div class="cursed-details">
                <p><strong>Эффект:</strong> Вопросы: "Where are you?" (Комната), "Bone" (Кость), или "Hide and Seek" (Прятки - охота).</p>
                <div class="stats-grid">
                    <div class="stat-box"><span class="label">Локация</span><span class="value">-50% Рассудка</span></div>
                    <div class="stat-box"><span class="label">Обычный вопрос</span><span class="value">-5% / -20% Рассудка</span></div>
                </div>
                <p class="danger"><strong>Начало охоты:</strong><br>• Вопрос без достаточного рассудка.<br>• Уход без "Goodbye".<br>• Вопрос "Hide and Seek".</p>
            </div>`
        }
    },
    {
        name: { en: "Voodoo Doll", pl: "Lalka Voodoo", ru: "Кукла Вуду" },
        image: "https://static.wikia.nocookie.net/phasmophobia/images/e/e2/Voodoo_Doll_New.jpg/revision/latest?cb=20211210173413",
        icon: "🧸",
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
            </div>`,
            ru: `
            <div class="cursed-details">
                <p><strong>Эффект:</strong> Втыкайте иголки (1-10) для взаимодействия. Случайные иголки.</p>
                <div class="stats-grid">
                    <div class="stat-box"><span class="label">Обычная игла</span><span class="value">-5% Рассудка</span></div>
                    <div class="stat-box"><span class="label">Сердце</span><span class="value">-10% Рассудка</span></div>
                </div>
                <p class="danger"><strong>Начало охоты:</strong><br>• Игла в сердце (случайно или нет).<br>• Использование при <5% рассудка.</p>
            </div>`
        }
    },
    {
        name: { en: "Haunted Mirror", pl: "Nawiedzone Lustro", ru: "Проклятое Зеркало" },
        image: "https://static.wikia.nocookie.net/phasmophobia/images/7/7b/Cursed_Mirror.jpg/revision/latest?cb=20220303041525",
        icon: "🪞",
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
            </div>`,
            ru: `
            <div class="cursed-details">
                <p><strong>Эффект:</strong> Показывает комнату призрака в реальном времени.</p>
                <div class="stats-grid">
                    <div class="stat-box"><span class="label">Активация</span><span class="value">-20% (Сразу)</span></div>
                    <div class="stat-box"><span class="label">Трата</span><span class="value">-7.5% / сек</span></div>
                </div>
                <p class="danger"><strong>Начало охоты:</strong><br>• Если рассудок упадет до 0% во время просмотра.</p>
            </div>`
        }
    },
    {
        name: { en: "Summoning Circle", pl: "Krąg Przywołań", ru: "Круг Призыва" },
        image: "https://static.wikia.nocookie.net/phasmophobia/images/d/de/Sc_new1.jpg/revision/latest/scale-to-width-down/1000?cb=20231230161505",
        icon: "🕯️",
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
            </div>`,
            ru: `
            <div class="cursed-details">
                <p><strong>Эффект:</strong> Зажгите 5 свечей для ПРИЗЫВА. Призрак заперт на 5 секунд (время для фото).</p>
                <div class="stats-grid">
                    <div class="stat-box"><span class="label">Цена свечи</span><span class="value">-16% Рассудка</span></div>
                    <div class="stat-box"><span class="label">Всего</span><span class="value">-80% Рассудка</span></div>
                </div>
                <p class="danger"><strong>Начало охоты:</strong><br>• СРАЗУ после 5 секунд ловушки.<br>• Если зажечь последнюю свечу с <16% рассудка.</p>
            </div>`
        }
    },
    {
        name: { en: "Tarot Cards", pl: "Karty Tarot", ru: "Карты Таро" },
        image: "https://static.wikia.nocookie.net/phasmophobia/images/a/a7/Tarot_Cards.png/revision/latest?cb=20211210181436",
        icon: "🃏",
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
            </div>`,
            ru: `
            <div class="cursed-details">
                <p><strong>Эффект:</strong> 10 случайных карт.</p>
                <ul class="tarot-list">
                    <li><span class="t-red">Wheel (Красн)</span>: -25% Рассудка</li>
                    <li><span class="t-green">Wheel (Зел)</span>: +25% Рассудка</li>
                    <li><span class="t-blue">Tower</span>: Взаимодействие</li>
                    <li><span class="t-purple">Death</span>: Проклятая Охота</li>
                    <li><span class="t-white">Moon</span>: 0% Рассудка</li>
                    <li><span class="t-gold">Sun</span>: 100% Рассудка</li>
                    <li><span class="t-cyan">High Priestess</span>: Возрождение</li>
                    <li><span class="t-fail">Hanged Man</span>: МГНОВЕННАЯ СМЕРТЬ</li>
                </ul>
            </div>`
        }
    },
    {
        name: { en: "Monkey Paw", pl: "Małpia Łapa", ru: "Обезьянья Лапа" },
        image: "https://static.wikia.nocookie.net/phasmophobia/images/c/cc/Monkey_Paw.png/revision/latest?cb=20230228154004",
        icon: "🐾",
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
            </div>`,
            ru: `
            <div class="cursed-details">
                <p><strong>Эффект:</strong> Исполняет желания. "I wish to see the ghost". 3-5 желаний.</p>
                <div class="stats-grid">
                    <div class="stat-box"><span class="label">Увидеть</span><span class="value">Ивент + Охота</span></div>
                    <div class="stat-box"><span class="label">Рассудок</span><span class="value">Станет 50%</span></div>
                </div>
                <p class="danger"><strong>Начало охоты:</strong><br>• "I wish to see the ghost" = Мгновенная охота.<br>• Желания часто имеют плохие последствия.</p>
            </div>`
        }
    }
];
