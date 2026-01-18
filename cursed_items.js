const CURSED_ITEMS_DATA = [
    {
        name: { en: "Music Box", pl: "Pozytywka", ru: "Музыкальная шкатулка" },
        image: "https://static.wikia.nocookie.net/phasmophobia/images/5/5f/Music_box_display.jpg",
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
                    <div class="stat-box"><span class="label">Zasięg</span><span class="value">20m (Śpiew) / 5m (Podejście)</span></div>
                </div>
                <p class="danger"><strong>Wywołuje Polowanie:</strong><br>• Jeśli duch dotknie pozytywki.<br>• Jeśli rzucisz grającą pozytywkę.<br>• Jeśli gra przez pełne 30s.</p>
            </div>`,
            ru: `
            <div class="cursed-details">
                <p><strong>Эффект:</strong> При активации призрак подпевает в радиусе 20м. Можно поставить, чтобы призрак материализовался и пошел к ней.</p>
                <div class="stats-grid">
                    <div class="stat-box"><span class="label">Расход рассудка</span><span class="value">2.5% / сек</span></div>
                    <div class="stat-box"><span class="label">Радиус</span><span class="value">20м (песня) / 5м (ходьба)</span></div>
                </div>
                <p class="danger"><strong>Проклятая охота:</strong><br>• Если призрак коснется шкатулки.<br>• Если БРОСИТЬ играющую шкатулку.<br>• По окончании мелодии (30с).</p>
            </div>`
        }
    },
    {
        name: { en: "Ouija Board", pl: "Tabliczka Ouija", ru: "Доска Уиджи" },
        image: "https://static.wikia.nocookie.net/phasmophobia/images/2/2f/Ouija_Board_New.png",
        icon: "👻",
        description: {
            en: `
            <div class="cursed-details">
                <p><strong>Effect:</strong> Ask the ghost questions (Location, Age, Bone, etc.) at the cost of sanity. Must say "Goodbye" to deactivate safely.</p>
                <div class="stats-grid">
                    <div class="stat-box"><span class="label">Sanity Drain</span><span class="value">5% - 50%</span></div>
                    <div class="stat-box"><span class="label">Success Rate</span><span class="value">100%</span></div>
                </div>
                <p class="danger"><strong>Hunt Trigger:</strong><br>• If you walk away without saying "Goodbye".<br>• If you have 0% sanity when asking.<br>• Saying 'Hide and Seek'.</p>
            </div>`,
            pl: `
            <div class="cursed-details">
                <p><strong>Efekt:</strong> Pozwala zadawać duchowi pytania (Lokalizacja, Wiek, Kość) kosztem Sanity. Musisz powiedzieć "Goodbye", aby bezpiecznie ją wyłączyć.</p>
                <div class="stats-grid">
                    <div class="stat-box"><span class="label">Koszt Sanity</span><span class="value">5% - 50%</span></div>
                    <div class="stat-box"><span class="label">Skuteczność</span><span class="value">100%</span></div>
                </div>
                <p class="danger"><strong>Wywołuje Polowanie:</strong><br>• Jeśli odejdziesz bez pożegnania ("Goodbye").<br>• Jeśli masz 0% sanity zadając pytanie.<br>• Powiesz "Hide and Seek".</p>
            </div>`,
            ru: `
            <div class="cursed-details">
                <p><strong>Эффект:</strong> Задавайте вопросы (локация, кость, возраст) ценой рассудка. Нужно сказать 'Goodbye', чтобы выключить.</p>
                <div class="stats-grid">
                    <div class="stat-box"><span class="label">Расход рассудка</span><span class="value">5% - 50%</span></div>
                    <div class="stat-box"><span class="label">Шанс ответа</span><span class="value">100%</span></div>
                </div>
                <p class="danger"><strong>Проклятая охота:</strong><br>• Уйти, не сказав 'Goodbye'.<br>• Задать вопрос при 0% рассудка.<br>• Сказать 'Hide and Seek'.</p>
            </div>`
        }
    },
    {
        name: { en: "Voodoo Doll", pl: "Laleczka Voodoo", ru: "Кукла Вуду" },
        image: "https://static.wikia.nocookie.net/phasmophobia/images/e/e2/Voodoo_Doll_New.jpg",
        icon: "🧶",
        description: {
            en: `
            <div class="cursed-details">
                <p><strong>Effect:</strong> Force the ghost to interact. 10 pins total. One lucky pin triggers a hunt.</p>
                <div class="stats-grid">
                    <div class="stat-box"><span class="label">Sanity Drain</span><span class="value">5% per pin</span></div>
                    <div class="stat-box"><span class="label">Pins</span><span class="value">10</span></div>
                </div>
                <p class="danger"><strong>Hunt Trigger:</strong><br>• If the heart pin (chest) is pushed.<br>• If you use it at 0% sanity.</p>
            </div>`,
            pl: `
            <div class="cursed-details">
                <p><strong>Efekt:</strong> Zmusza ducha do interakcji. Ma 10 szpilek. Wybranie szpilki w sercu odpala polowanie.</p>
                <div class="stats-grid">
                    <div class="stat-box"><span class="label">Koszt Sanity</span><span class="value">5% / szpilka</span></div>
                    <div class="stat-box"><span class="label">Szpilki</span><span class="value">10</span></div>
                </div>
                <p class="danger"><strong>Wywołuje Polowanie:</strong><br>• Jeśli wbita zostanie szpilka w serce.<br>• Użycie przy 0% sanity.</p>
            </div>`,
            ru: `
            <div class="cursed-details">
                <p><strong>Эффект:</strong> Заставляет призрака взаимодействовать. Всего 10 иголок.</p>
                <div class="stats-grid">
                    <div class="stat-box"><span class="label">Расход рассудка</span><span class="value">5% за иглу</span></div>
                    <div class="stat-box"><span class="label">Иголки</span><span class="value">10</span></div>
                </div>
                <p class="danger"><strong>Проклятая охота:</strong><br>• Если воткнуть иглу в сердце.<br>• Использование при 0% рассудка.</p>
            </div>`
        }
    },
    {
        name: { en: "Haunted Mirror", pl: "Nawiedzone Lustro", ru: "Проклятое зеркало" },
        image: "https://static.wikia.nocookie.net/phasmophobia/images/7/7b/Cursed_Mirror.jpg",
        icon: "🪞",
        description: {
            en: `
            <div class="cursed-details">
                <p><strong>Effect:</strong> Shows exactly where the ghost room is. Sanity drains fast while looking.</p>
                <div class="stats-grid">
                    <div class="stat-box"><span class="label">Sanity Drain</span><span class="value">7.5% / sec</span></div>
                    <div class="stat-box"><span class="label">Min Drain</span><span class="value">20%</span></div>
                </div>
                <p class="danger"><strong>Hunt Trigger:</strong><br>• If your sanity hits zero while looking.<br>• Mirror shatters.</p>
            </div>`,
            pl: `
            <div class="cursed-details">
                <p><strong>Efekt:</strong> Pokazuje dokładną lokalizację pokoju ducha. Błyskawicznie zabiera sanity.</p>
                <div class="stats-grid">
                    <div class="stat-box"><span class="label">Koszt Sanity</span><span class="value">7.5% / sek</span></div>
                    <div class="stat-box"><span class="label">Min. koszt</span><span class="value">20%</span></div>
                </div>
                <p class="danger"><strong>Wywołuje Polowanie:</strong><br>• Gdy Sanity spadnie do 0 podczas patrzenia.<br>• Lustro pęka.</p>
            </div>`,
            ru: `
            <div class="cursed-details">
                <p><strong>Эффект:</strong> Показывает точно, где находится комната призрака. Быстро ест рассудок.</p>
                <div class="stats-grid">
                    <div class="stat-box"><span class="label">Расход рассудка</span><span class="value">7.5% / сек</span></div>
                    <div class="stat-box"><span class="label">Мин. расход</span><span class="value">20%</span></div>
                </div>
                <p class="danger"><strong>Проклятая охота:</strong><br>• Если рассудок упадет до 0 при использовании.<br>• Зеркало разбивается.</p>
            </div>`
        }
    },
    {
        name: { en: "Tarot Cards", pl: "Karty Tarota", ru: "Карты Таро" },
        image: "https://static.wikia.nocookie.net/phasmophobia/images/a/a7/Tarot_Cards.png",
        icon: "🃏",
        description: {
            en: `
            <div class="cursed-details">
                <p><strong>Effect:</strong> 10 random cards with unique effects (Healing, Death, Sanity, etc.).</p>
                <ul class="tarot-list">
                    <li><span class="t-red">Death</span>: Hunt</li>
                    <li><span class="t-red">Hanged Man</span>: Death</li>
                    <li><span class="t-green">Sun</span>: 100% Sanity</li>
                    <li><span class="t-blue">Moon</span>: 0% Sanity</li>
                    <li><span class="t-white">Tower</span>: Force Event</li>
                    <li><span class="t-gold">Hermit</span>: Traps Ghost</li>
                </ul>
            </div>`,
            pl: `
            <div class="cursed-details">
                <p><strong>Efekt:</strong> 10 losowych kart z unikalnymi efektami (Leczenie, Śmierć, Sanity).</p>
                <ul class="tarot-list">
                    <li><span class="t-red">Death</span>: Atak</li>
                    <li><span class="t-red">Hanged Man</span>: Śmierć</li>
                    <li><span class="t-green">Sun</span>: 100% Sanity</li>
                    <li><span class="t-blue">Moon</span>: 0% Sanity</li>
                    <li><span class="t-white">Tower</span>: Event</li>
                    <li><span class="t-gold">Hermit</span>: Więzi Ducha</li>
                </ul>
            </div>`,
            ru: `
            <div class="cursed-details">
                <p><strong>Эффект:</strong> 10 случайных карт с уникальными эффектами.</p>
                <ul class="tarot-list">
                    <li><span class="t-red">Death</span>: Охота</li>
                    <li><span class="t-red">Hanged Man</span>: Смерть</li>
                    <li><span class="t-green">Sun</span>: 100% рассудка</li>
                    <li><span class="t-blue">Moon</span>: 0% рассудка</li>
                    <li><span class="t-white">Tower</span>: Ивент</li>
                    <li><span class="t-gold">Hermit</span>: Запирает призрака</li>
                </ul>
            </div>`
        }
    },
    {
        name: { en: "Summoning Circle", pl: "Krąg Przywołań", ru: "Круг призыва" },
        image: "https://static.wikia.nocookie.net/phasmophobia/images/d/de/Sc_new1.jpg",
        icon: "🔯",
        description: {
            en: `
            <div class="cursed-details">
                <p><strong>Effect:</strong> Force the ghost to manifest within the circle for 5 seconds. Great for a photo.</p>
                <div class="stats-grid">
                    <div class="stat-box"><span class="label">Sanity Drain</span><span class="value">16% per candle</span></div>
                    <div class="stat-box"><span class="label">Total Cost</span><span class="value">80%</span></div>
                </div>
                <p class="danger"><strong>Hunt Trigger:</strong><br>• After 5 seconds of manifestation.<br>• Immediately if you have <16% sanity per candle.</p>
            </div>`,
            pl: `
            <div class="cursed-details">
                <p><strong>Efekt:</strong> Zmusza ducha do materializacji w kręgu na 5 sekund. Idealne do zdjęcia.</p>
                <div class="stats-grid">
                    <div class="stat-box"><span class="label">Koszt Sanity</span><span class="value">16% / świeca</span></div>
                    <div class="stat-box"><span class="label">Koszt Suma</span><span class="value">80%</span></div>
                </div>
                <p class="danger"><strong>Wywołuje Polowanie:</strong><br>• Po 5 sekundach materializacji.<br>• Natychmiast jeśli masz poniżej 16% sanity przy zapalaniu.</p>
            </div>`,
            ru: `
            <div class="cursed-details">
                <p><strong>Эффект:</strong> Заставляет призрака материализоваться в круге на 5 секунд. Супер для фото.</p>
                <div class="stats-grid">
                    <div class="stat-box"><span class="label">Расход рассудка</span><span class="value">16% за свечу</span></div>
                    <div class="stat-box"><span class="label">Общий расход</span><span class="value">80%</span></div>
                </div>
                <p class="danger"><strong>Проклятая охота:</strong><br>• Через 5 секунд после призыва.<br>• Сразу, если у всех <16% рассудка.</p>
            </div>`
        }
    },
    {
        name: { en: "Monkey Paw", pl: "Małpia Łapka", ru: "Обезьянья лапа" },
        image: "https://static.wikia.nocookie.net/phasmophobia/images/c/cc/Monkey_Paw.png",
        icon: "🐒",
        description: {
            en: `
            <div class="cursed-details">
                <p><strong>Effect:</strong> Grants wishes with severe consequences.</p>
                <div class="stats-grid">
                    <div class="stat-box"><span class="label">Wishes</span><span class="value">3 - 5</span></div>
                </div>
                <p class="danger"><strong>Hunt Trigger:</strong><br>• Wishing for Knowledge (20% chance).<br>• Wishing for 'Anything'.</p>
            </div>`,
            pl: `
            <div class="cursed-details">
                <p><strong>Efekt:</strong> Spełnia życzenia, ale z surowymi karami.</p>
                <div class="stats-grid">
                    <div class="stat-box"><span class="label">Życzenia</span><span class="value">3 - 5</span></div>
                </div>
                <p class="danger"><strong>Wywołuje Polowanie:</strong><br>• Życzenie wiedzy (20% szans).<br>• Życzenie 'Czegokolwiek'.</p>
            </div>`,
            ru: `
            <div class="cursed-details">
                <p><strong>Эффект:</strong> Исполняет желания, но с суровыми последствиями.</p>
                <div class="stats-grid">
                    <div class="stat-box"><span class="label">Желания</span><span class="value">3 - 5</span></div>
                </div>
                <p class="danger"><strong>Проклятая охота:</strong><br>• Желание 'Я хочу знать' (20%).<br>• Желание 'Что угодно'.</p>
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
