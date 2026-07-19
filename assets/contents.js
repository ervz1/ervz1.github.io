const photos = ["DSCF0123.JPG", "DSCF0168.JPG", "DSCF0188.JPG", "DSCF0267.JPG", "DSCF0269.JPG", "DSCF0277.JPG", "DSCF0310.JPG", "DSCF0362.JPG", "DSCF0382.JPG", "DSCF0385.JPG", "DSCF0407.JPG", "DSCF0425.JPG", "DSCF0499.JPG", "DSCF0529.JPG", "DSCF0542.JPG", "DSCF0561.JPG", "DSCF0783.JPG", "DSCF0852.JPG", "DSCF0855.JPG", "DSCF1008.JPG", "DSCF1099.JPG", "DSCF1117.JPG", "DSCF1304.JPG", "DSCF1500.JPG", "DSCF1539.JPG", "DSCF1557.JPG", "DSCF1559.JPG", "DSCF1560.JPG", "DSCF1570.JPG", "DSCF3155.JPG", "DSCF3199.JPG", "DSCF3200.JPG", "DSCF3207.JPG", "DSCF3222.JPG", "DSCF3243.JPG", "DSCF3248.JPG", "DSCF4006.JPG", "DSCF4158.JPG", "DSCF4162.JPG", "DSCF4270.JPG", "DSCF6028.JPG", "DSCF6035.JPG", "DSCF6077.JPG", "DSCF6089.JPG", "DSCF6097.JPG", "DSCF6098.JPG", "DSCF6314.JPG", "DSCF6337.JPG", "DSCF6366.JPG", "DSCF6397.JPG", "DSCF6405.JPG", "DSCF6419.JPG", "DSCF6463.JPG", "DSCF6473.JPG", "DSCF6502.JPG", "DSCF7317.JPG", "DSCF7341.JPG", "DSCF7343.JPG", "DSCF7373.JPG"]
let photoObj = ""
photos.forEach(photo => {
    // let openImg = `newWindow('${photo}', '${photo}', 'gallery.svg', '<img class=fullImgContent src=/assets/photos/${photo}>')`
    photoObj += `<img class="galleryImg" onclick="openImg('${photo}')" src="/assets/photos/${photo}">`
});

window.addEventListener('DOMContentLoaded', () => {
  photos.forEach(photo => {
        let img = new Image()
        img.loading = "lazy"
        img.src = `/assets/photos/${photo}`
  })
})

const winContents = {
    "info": {
        "title": "info",
        "icon": "info.svg",
        "content": {
            "en": `Welcome to my website! Here are some of my projects:<br><br>
<- <a href='https://passwordpassword.online' target='_blank'>passwordpassword.online</a> - A webapp/forum/imageboard created by a friend and me. Inspired by <a href="https://en.wikipedia.org/wiki/Milk_Outside_a_Bag_of_Milk_Outside_a_Bag_of_Milk" target="_blank">MOABOM</a>, <a href="https://en.wikipedia.org/wiki/Serial_Experiments_Lain" target="_blank">SEL</a>, and the <a href="https://laingame.net/about.html" target="_blank">SELPS1</a> game.<br><br>
<- ppmonitor - An ESP32 portable IoT device capable of displaying metrics from passwordpassword.online. A text file reader and device settings menu are included.<br><br>
<- A 2D <a href="https://youtu.be/AiCPtLuKr0Y?si=323hNd3_RCziiZZR" target="_blank">flanki</a> game made in C++ using the SFML library. Created with my classmates as an IT class project while studying at AGH.<br><br>
<- Selected photography: Street photography, architecture, b&w, brutalism.<br><br>
Feel free to explore this website to find out more!<br><br>
Click the "<b>EN</b>" icon in the bottom-right corner to change the content language.`,
            "pl": `Witaj na mojej stronie! Oto kilka z moich projektów:<br><br>
<- <a href='https://passwordpassword.online' target='_blank'>passwordpassword.online</a> - Aplikacja webowa/forum/imageboard stworzona przeze mnie i mojego znajomego. Zainspirowana <a href="https://en.wikipedia.org/wiki/Milk_Outside_a_Bag_of_Milk_Outside_a_Bag_of_Milk" target="_blank">MOABOM</a>, <a href="https://en.wikipedia.org/wiki/Serial_Experiments_Lain" target="_blank">SEL</a> oraz grą <a href="https://laingame.net/about.html" target="_blank">SELPS1</a>.<br><br>
<- <a>ppmonitor</a> - Przenośne urządzenie IoT na ESP32 potrafiące wyświetlać statystyki z passwordpassword.online. Zawiera czytnik plików tekstowych i menu ustawień urządzenia.<br><br>
<- Gra 2D <a href="https://youtu.be/AiCPtLuKr0Y?si=323hNd3_RCziiZZR" target="_blank">flanki</a> napisana w C++ z użyciem biblioteki SFML. Stworzona z kolegami z grupy jako projekt z informatyki podczas studiów na AGH.<br><br>
<- Wybrane fotografie: Fotografia uliczna, architektura, czerń i biel, brutalizm.<br><br>
Śmiało eksploruj tę stronę, aby dowiedzieć się więcej!<br><br>
Kliknij ikonę "<b>PL</b>" w prawym dolnym rogu, aby zmienić język treści.`,
            "ru": `Добро пожаловать на мой сайт! Вот некоторые из моих проектов:<br><br>
<- <a href='https://passwordpassword.online' target='_blank'>passwordpassword.online</a> - Веб-приложение/форум/имиджборд, созданное мной и моим другом. Вдохновлено <a href="https://en.wikipedia.org/wiki/Milk_Outside_a_Bag_of_Milk_Outside_a_Bag_of_Milk" target="_blank">MOABOM</a>, <a href="https://en.wikipedia.org/wiki/Serial_Experiments_Lain" target="_blank">SEL</a> и игрой <a href="https://laingame.net/about.html" target="_blank">SELPS1</a>.<br><br>
<- <a>ppmonitor</a> - Портативное IoT-устройство на базе ESP32, способное отображать метрики с passwordpassword.online. Включает программу для чтения текстовых файлов и меню настроек устройства.<br><br>
<- 2D игра <a href="https://youtu.be/AiCPtLuKr0Y?si=323hNd3_RCziiZZR" target="_blank">flanki</a>, написанная на C++ с использованием библиотеки SFML. Создана вместе с одногруппниками как проект по информатике во время учебы в AGH.<br><br>
<- Избранные фотографии: Уличная фотография, архитектура, ч/б, брутализм.<br><br>
Не стесняйтесь исследовать этот сайт, чтобы узнать больше!<br><br>
Нажмите на значок "<b>RU</b>" в правом нижнем углу, чтобы изменить язык.`
        },
        "properties": {
            "size": {x:620, y:540},
            "pos": {x: 100, y:50}
        }
    },
    "ppo": {
        "fast": true,
        "title": "password password",
        "icon": "terminal.svg",
        "properties": {
            "size": {x:600, y:500}
        },
        "content": {
            "en": `<a href='https://passwordpassword.online' target='_blank'>passwordpassword.online</a> - a hobby project that became canon.<br><br>

A web application taking the form of an interactive terminal, built from scratch with a friend using the <b>socket.io</b> library and deployed on <b>Azure</b>. We started in high school – for me, it was my first serious encounter with web development. Initially, I was responsible for the design and UI, but over time I also took over writing the application logic.<br><br>
The platform is currently live and continuously developed, maintaining a community of tens of active users.<br><br>

<b>Greatest achievement:</b><br>
I decided to present a working prototype to <a href="https://x.com/nkt_krkv" target="_blank">Nikita</a> (the creator of the game <i>Milk outside a bag of milk</i>). The reaction was so positive that the creator funded our work and recognized the website as the <b>official continuation of the game</b> in his universe. In March 2024, the site was opened to the community.<br><br>

<b>Key technical solutions:</b><br>
- <b>Image processing:</b> Automatic pixelation and on-the-fly application of a 3-color palette. This ensures consistency with the game's style and drastically reduces file sizes on the server.<br>
- <b>Custom session system:</b> Account-less login based on IP addresses. An automatic mechanism releases the assigned nickname after 7 days of user inactivity.<br>
- <b>Admin Panel:</b> A custom-built system for managing the application – file structure preview, live statistics (number of active users), time logs, and moderation tools (bans, content deletion).<br>
- <b>Environment & WebGL:</b> The app features an integrated music player, mini-games, a custom "3-color paint", and a screensaver generated using shaders (OpenGL).<br>
- <b>Interactive terminal:</b> Discovering the lore and communicating with the community takes place through a virtual operating system with a proprietary text formatting (markup) system.`,
            "pl": `<a href='https://passwordpassword.online' target='_blank'>passwordpassword.online</a> - hobbistyczny projekt, który został kanonem.<br><br>

Aplikacja webowa w formie interaktywnego terminala, stworzona od zera wspólnie z kolegą w oparciu o bibliotekę <b>socket.io</b> i wdrożona na <b>Azure</b>. Zaczęliśmy w liceum – dla mnie był to pierwszy poważny kontakt z web developmentem. Początkowo odpowiadałem za design i UI, a z czasem przejąłem również pisanie logiki aplikacji.<br><br>
Platforma jest obecnie aktywna i stale rozwijana, utrzymując społeczność kilkudziesięciu aktywnych użytkowników.<br><br>

<b>Największy sukces:</b><br>
Zdecydowałem się zaprezentować działający prototyp <a href="https://x.com/nkt_krkv" target="_blank">Nikicie</a> (twórcy gry <i>Milk outside a bag of milk</i>). Reakcja była na tyle pozytywna, że twórca dofinansował naszą pracę i uznał stronę za <b>oficjalną kontynuację gry</b> w swoim uniwersum. W marcu 2024 strona została otwarta dla społeczności.<br><br>

<b>Kluczowe rozwiązania techniczne:</b><br>
- <b>Przetwarzanie obrazów:</b> Automatyczna pikselizacja i nakładanie 3-kolorowej palety w locie. Gwarantuje to spójność ze stylem gry i drastycznie redukuje rozmiar plików na serwerze.<br>
- <b>Customowy system sesji:</b> Logowanie bezklasyczne (account-less) oparte na adresach IP. Automatyczny mechanizm zwalnia przypisany nick po 7 dniach nieaktywności użytkownika.<br>
- <b>Panel Administracyjny:</b> Zbudowany od zera system do zarządzania aplikacją – podgląd struktury plików, statystyki live (liczba aktywnych osób), logi czasowe oraz narzędzia do moderacji (bany, usuwanie treści).<br>
- <b>Środowisko i WebGL:</b> Aplikacja zawiera zintegrowany odtwarzacz muzyki, minigry, autorski "3-kolorowy paint" oraz wygaszacz ekranu generowany za pomocą shaderów (OpenGL).<br>
- <b>Interaktywny terminal:</b> Odkrywanie lore i komunikacja ze społecznością odbywa się poprzez wirtualny system operacyjny z autorskim systemem formatowania tekstu (markup).`,
            "ru": `<a href='https://passwordpassword.online' target='_blank'>passwordpassword.online</a> - хобби-проект, ставший каноном.<br><br>

Веб-приложение в виде интерактивного терминала, созданное с нуля вместе с другом на базе библиотеки <b>socket.io</b> и развернутое на <b>Azure</b>. Мы начали еще в старшей школе – для меня это был первый серьезный опыт в веб-разработке. Изначально я отвечал за дизайн и UI, а со временем также взял на себя написание логики приложения.<br><br>
Платформа в настоящее время работает и постоянно развивается, поддерживая сообщество из десятков активных пользователей.<br><br>

<b>Главное достижение:</b><br>
Я решил показать рабочий прототип <a href="https://x.com/nkt_krkv" target="_blank">Никите</a> (создателю игры <i>Milk outside a bag of milk</i>). Реакция была настолько позитивной, что разработчик профинансировал нашу работу и признал сайт <b>официальным продолжением игры</b> в своей вселенной. В марте 2024 года сайт был открыт для сообщества.<br><br>

<b>Ключевые технические решения:</b><br>
- <b>Обработка изображений:</b> Автоматическая пикселизация и наложение 3-цветной палитры на лету. Это гарантирует соответствие стилю игры и значительно уменьшает размер файлов на сервере.<br>
- <b>Кастомная система сессий:</b> Вход без аккаунта (account-less), основанный на IP-адресах. Автоматический механизм освобождает закрепленный никнейм после 7 дней неактивности пользователя.<br>
- <b>Панель администратора:</b> Система управления приложением, созданная с нуля – просмотр структуры файлов, живая статистика (количество активных пользователей), логи времени и инструменты модерации (баны, удаление контента).<br>
- <b>Среда и WebGL:</b> Приложение включает в себя встроенный музыкальный плеер, мини-игры, авторский "3-цветный paint" и заставку, генерируемую с помощью шейдеров (OpenGL).<br>
- <b>Интерактивный терминал:</b> Изучение лора и общение с сообществом происходит через виртуальную операционную систему с авторской системой форматирования текста (markup).`
        } 
    },
    "ppom": {
        "fast": true,
        "title": "ppmonitor",
        "icon": "fpga.svg",
        "properties": {
            "size": {x:600, y:500}
        },
        "content":{
            "en": `<u>ppmonitor</u> - portable IoT device (ESP32).<br><br>

A project resulting from combining my two biggest passions: programming and electronics (circuit design, soldering). It is a physical status monitor built from scratch for my passwordpassword.online application. The device's form factor is inspired by tools like the <i>Flipper Zero</i> – it is fully portable and can be clipped to a belt, for example.<br><br>

<b>Key hardware and software features:</b><br>
- <b>Network communication (Wi-Fi):</b> The device fetches and parses data from the website's API, displaying live stats: the number of online users, the last 5 commands used in the terminal, and the total pool of uploaded files.<br>
- <b>TextReader module:</b> A built-in feature that allows for remote reading of the latest text uploaded to the server directly on the device's screen.<br>
- <b>Minimalist UI:</b> I designed a custom navigation system for the device and its features, entirely operated using just 2 physical buttons.<br>
- <b>Configuration and power optimization:</b> A dedicated settings screen (display brightness control, data refresh interval, sleep mode). I also implemented an animated screensaver (classic bouncing "DVD" logo logic), the activation of which automatically pauses HTTP requests, effectively saving energy and server resources.`,
            "pl": `<u>ppmonitor</u> - przenośne urządzenie IoT (ESP32).<br><br>

Projekt będący efektem połączenia moich dwóch największych pasji: programowania oraz elektroniki (projektowanie układów, lutowanie). Jest to zbudowany od zera, fizyczny monitor stanu dla mojej aplikacji passwordpassword.online. Urządzenie formą nawiązuje do narzędzi typu <i>Flipper Zero</i> – jest w pełni przenośne, z możliwością przypięcia np. do paska.<br><br>

<b>Kluczowe funkcje sprzętowe i programowe:</b><br>
- <b>Komunikacja sieciowa (Wi-Fi):</b> Urządzenie pobiera i parsuje dane z API strony, wyświetlając na żywo: liczbę użytkowników online, 5 ostatnich komend użytych w terminalu oraz całkowitą pulę wgranych plików.<br>
- <b>Moduł TextReader:</b> Wbudowana funkcja pozwalająca na zdalne odczytanie bezpośrednio na ekranie urządzenia treści ostatniego tekstu wgranego na serwer.<br>
- <b>Minimalistyczne UI:</b> Skonstruowałem autorski system nawigacji po urządzeniu i jego funkcjach, oparty w całości na obsłudze zaledwie 2 przycisków fizycznych.<br>
- <b>Konfiguracja i optymalizacja zasilania:</b> Dedykowany ekran ustawień (kontrola jasności wyświetlacza, interwał odświeżania danych, tryb uśpienia). Zaimplementowałem również wygaszacz ekranu z animacją (logika klasycznego odbijającego się logo "DVD"), którego aktywacja automatycznie wstrzymuje żądania HTTP, skutecznie oszczędzając energię i zasoby serwera.`,
            "ru": `<u>ppmonitor</u> - портативное IoT-устройство (ESP32).<br><br>

Проект, ставший результатом объединения двух моих главных увлечений: программирования и электроники (проектирование схем, пайка). Это созданный с нуля физический монитор состояния для моего приложения passwordpassword.online. Форм-фактор устройства вдохновлен такими инструментами, как <i>Flipper Zero</i> – оно полностью портативное, с возможностью крепления, например, к ремню.<br><br>

<b>Ключевые аппаратные и программные функции:</b><br>
- <b>Сетевая связь (Wi-Fi):</b> Устройство получает и анализирует данные из API сайта, отображая в реальном времени: количество пользователей онлайн, 5 последних команд, использованных в терминале, и общее количество загруженных файлов.<br>
- <b>Модуль TextReader:</b> Встроенная функция, позволяющая удаленно читать последний загруженный на сервер текст прямо на экране устройства.<br>
- <b>Минималистичный UI:</b> Я разработал авторскую систему навигации по устройству и его функциям, полностью основанную на управлении всего двумя физическими кнопками.<br>
- <b>Конфигурация и оптимизация энергопотребления:</b> Выделенный экран настроек (управление яркостью дисплея, интервал обновления данных, спящий режим). Я также реализовал анимированную заставку (логика классического прыгающего логотипа "DVD"), активация которой автоматически приостанавливает HTTP-запросы, эффективно экономя энергию и ресурсы сервера.`
        } 
    },
    "flanki": {
        "fast": true,
        "title": "flanki 2D",
        "icon": "gamepad.svg",
        "properties": {
            "size": {x:600, y:500}
        },
        "content": {
            "en": `<a href="https://github.com/ervz1/projekt_pi" target="_blank">flanki</a> - 2D game in C++ (SFML).<br><br>

A team academic project developed at AGH. We created a complete 2D arcade game with physics elements. In the project, I acted as the team leader (Lead Developer) – I initialized the repository, prepared the file architecture for the team, and coordinated the module integration process up to the final release.<br><br>

<b>My main technical tasks:</b><br>
- <b>Architecture and Integration:</b> Laying the project's foundation, managing the application window (scaling, states), and connecting the logic and physics code with the graphical interface.<br>
- <b>Graphics and Assets:</b> Designing and drawing the entire visual setting of the game from scratch (characters, backgrounds, interactive objects).<br>
- <b>UI and Customization:</b> Building the Main Menu and an advanced character appearance modification system (dynamic color palettes, wardrobe changes).<br>
- <b>State Management (I/O):</b> Implementation of a persistent save and load system for character configuration using local files.`,
            "pl": `<u>flanki</u> - gra 2D w C++ (SFML).<br><br>

Zespołowy projekt akademicki zrealizowany na AGH. Stworzyliśmy kompletną, zręcznościową grę 2D z elementami fizyki. W projekcie pełniłem rolę lidera zespołu (Lead Developer) – zainicjowałem repozytorium, przygotowałem architekturę plików dla zespołu i koordynowałem proces łączenia modułów aż do finalnego wydania.<br><br>

<b>Moje główne zadania techniczne:</b><br>
- <b>Architektura i Integracja:</b> Postawienie fundamentów projektu, zarządzanie oknem aplikacji (skalowanie, stany) oraz łączenie kodu logiki i fizyki z interfejsem graficznym.<br>
- <b>Grafika i Assety:</b> Zaprojektowanie i narysowanie od zera całej oprawy wizualnej gry (postacie, tła, interaktywne obiekty).<br>
- <b>UI i Customizacja:</b> Zbudowanie Menu Głównego oraz zaawansowanego systemu modyfikacji wyglądu bohatera (dynamiczne palety kolorów, zmiany elementów garderoby).<br>
- <b>Zarządzanie Stanem (I/O):</b> Implementacja systemu trwałego zapisu i odczytu konfiguracji postaci z plików lokalnych.`,
            "ru": `<u>flanki</u> - 2D игра на C++ (SFML).<br><br>

Командный академический проект, реализованный в AGH. Мы создали полноценную 2D аркадную игру с элементами физики. В проекте я выступал в роли лидера команды (Lead Developer) – инициировал репозиторий, подготовил файловую архитектуру для команды и координировал процесс интеграции модулей вплоть до финального релиза.<br><br>

<b>Мои основные технические задачи:</b><br>
- <b>Архитектура и интеграция:</b> Закладка фундамента проекта, управление окном приложения (масштабирование, состояния) и связывание кода логики и физики с графическим интерфейсом.<br>
- <b>Графика и ассеты:</b> Проектирование и отрисовка с нуля всего визуального оформления игры (персонажи, фоны, интерактивные объекты).<br>
- <b>UI и кастомизация:</b> Создание Главного меню и продвинутой системы изменения внешности героя (динамичные цветовые палитры, смена элементов гардероба).<br>
- <b>Управление состоянием (I/O):</b> Реализация системы постоянного сохранения и загрузки конфигурации персонажа из локальных файлов.`
        }
    },
    "photos": {
        "fast": true,
        "title": "my photos",
        "icon": "gallery.svg",
        "properties": {
            "size": {x:848, y:500}
        },
        "content": {
            "nolang": `${photoObj}`
        }
    },
    "player": {
        "title": "player",
        "icon": "radio.svg",
        "content": {
            "nolang": `
                <div class='player'>
                    <div id="playerTitle">-</div>
                    <input id="playerSlider" type="range" max="1" value="0" step="any">
                    <div class="playerButtons">
                        <div class="playerTime" id="playerProgress">--:--</div>
                        <div class="img-button" onclick="playerControls('prev')"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><polygon points="496 400 256 256 496 112 496 400"/><polygon points="256 400 16 256 256 112 256 400"/></svg></div>
                        <div class="img-button" id='playerPlayPause' onclick="playPause()"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48ZM200,344V168l144,88Z"/></svg></div>
                        <div class="img-button" onclick="playerControls('next')"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><polygon points="16 400 256 256 16 112 16 400"/><polygon points="256 400 496 256 256 112 256 400"/></svg></div>
                        <div class="playerTime" id="playerDuration">--:--</div>
                    </div>
                </div>`
        },
        "properties": {
            "size": {x: 350, y: 160},
            "noresize": true,
            "nomaximize": true,
            "nodeskbutton": true,
            "preventclose": true
        }
    }
}