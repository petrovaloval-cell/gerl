// YouTube плеер
let youtubePlayer;
let isYouTubePlaying = false;

// Загружаем YouTube API
function loadYouTubeAPI() {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

// Инициализация плеера
function onYouTubeIframeAPIReady() {
    youtubePlayer = new YT.Player('youtube-player', {
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    console.log("YouTube плеер готов");
    // Автозапуск (может быть заблокирован браузером)
    setTimeout(() => {
        event.target.playVideo().catch(e => {
            console.log("Автозапуск YouTube заблокирован");
        });
    }, 2000);
}

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
        isYouTubePlaying = true;
        document.getElementById('music-icon').className = 'fas fa-volume-up';
        document.querySelector('.music-control').classList.add('pulse');
    } else if (event.data == YT.PlayerState.PAUSED) {
        isYouTubePlaying = false;
        document.getElementById('music-icon').className = 'fas fa-volume-mute';
        document.querySelector('.music-control').classList.remove('pulse');
    }
}

// Управление YouTube музыкой
function toggleMusic() {
    if (youtubePlayer) {
        if (isYouTubePlaying) {
            youtubePlayer.pauseVideo();
        } else {
            youtubePlayer.playVideo();
        }
    }
}

// Вызываем загрузку API при загрузке страницы
window.addEventListener('load', loadYouTubeAPI);
// Данные календаря - ЗДЕСЬ ВЫ МЕНЯЕТЕ ВСЁ ПОД СЕБЯ!
const monthsData = [
    {
        id: 1,
        name: "Январь",
        date: "1 января",
        title: "Наше случайное чудо",
        description: "Первый месяц 2025 года мы встретили вместе. Холодные январские дни согревались твоими улыбками и смехом. Мы строили планы на год вперёд, и каждый из них включал в себя друг друга.",
        quote: "«Главное воспоминание месяца - Новогодняя ночь, когда мы загадывали желания под бой курантов.»",
        photos: 5,
        image: "https://i.yapx.ru/cdyQD.jpg",
        color: "#FF6B93"
    },
    {
        id: 2,
        name: "Февраль",
        date: "14 февраля",
        title: "Месяц праздников",
        description: "В День всех влюблённых ты подарила мне камеру. А через две неделю, в мой день рождения, ты устроила лучший подарок, который я никогда не забуду.",
        quote: "«Главное воспоминание месяца - Мой день рождения, подъём на Москву-Сити.»",
        photos: 8,
        image: "https://i.yapx.ru/cdyIa.jpg",
        color: "#FF8E53"
    },
    {
        id: 3,
        name: "Март",
        date: "8 марта",
        title: "Цветы среди снега",
        description: "На 8 Марта я подарил тебе цветы. И мы гуляли каждый день, наблюдая, как город просыпается, а наши разговоры становились длиннее с каждым закатом.",
        quote: "«Главное воспоминание месяца - солнечная поездка в Дмитров»",
        photos: 3,
        image: "https://i.yapx.ru/cdyS9.jpg",
        color: "#36D7B7"
    },
    {
        id: 4,
        name: "Апрель",
        date: "1 апреля",
        title: "День смеха и правды",
        description: "Я решил пошутить, сказав, что встретил свою бывшую. Твоё лицо было таким искренним, что я сразу признался — это шутка. А потом ты целый день придумывала мне самые нелепые «мести».",
        quote: "«Главное воспоминание месяца - поход на матч РПЛ Локомотив-Зенит, это было мощьно.»",
        photos: 7,
        image: "https://i.yapx.ru/cdyYz.jpg",
        color: "#A363D9"
    },
    {
        id: 5,
        name: "Май",
        date: "9 мая",
        title: "Первое Солнце",
        description: "На 9 Мая мы ели шашлыки с друзьми. В эти первые по-настоящему тёплые дни мы просто жили: гуляли до утра, пили чай на балконе и ловили моменты, которые пахли будущим.",
        quote: "«Главное воспоминание месяца - поход на самое высокое колесо обозрения - Солнце Москвы»",
        photos: 12,
        image: "https://i.yapx.ru/cdyci.jpg",
        color: "#FFD166"
    },
    {
        id: 6,
        name: "Июнь",
        date: "19 июня",
        title: "Наш год",
        description: "Мы отметили наш первый в красивейшем парке с незабываемым квестом. А в другие дни ходили по музеям, и в каждом зале я находил что-то, что напоминало мне о тебе.",
        quote: "«Главное воспоминание месяца - путешествие по парку Коломенское»",
        photos: 15,
        image: "https://i.yapx.ru/cdyjQ.jpg",
        color: "#06D6A0"
    },
    {
        id: 7,
        name: "Июль",
        date: "- июля",
        title: "Месяц разлук",
        description: "Ты уехала к родным, а я погрузился в учёбу — мы переписывались каждый день, отправляя друг другу фото: ты — закаты над полями, я — конспекты на столе. И даже на расстоянии мы чувствовали, как растёт эта тихая тоска, которая сделала встречу в августе самым сладким моментом года.

",
        quote: "«Главное воспоминание месяца - расстояние между Москвой и Новороссийском»",
        photos: 4,
        image: "https://i.yapx.ru/cdyoM.jpg",
        color: "#118AB2"
    },
    {
        id: 8,
        name: "Август",
        date: "16 августа",
        title: "Звёздный дождь",
        description: "Мы ворвались к тебе в полночь с шариками и тортом. Твои глаза сначала округлились от неожиданности, а потом засветились счастьем, пока друзья хором кричали 'С днём рождения!'. В тот момент я понял, что самые тёплые моменты — это когда радость разделяют те, кто тебя по-настоящему любит.",
        quote: "«Главное воспоминание месяца - твой день Рождения»",
        photos: 9,
        image: "https://i.yapx.ru/cdyu7.jpg",
        color: "#9B5DE5"
    },
    {
        id: 9,
        name: "Сентябрь",
        date: "1 сентября",
        title: "Начало нового",
        description: "Мы вернулись в университетские коридоры. Между парами делились новостями за лето.",
        quote: "«Главное воспоминание месяца - прогулки в парках»",
        photos: 6,
        image: "https://i.yapx.ru/cdywO.jpg",
        color: "#F15BB5"
    },
    {
        id: 10,
        name: "Октябрь",
        date: "29 октября",
        title: "Учебная суета",
        description: "Мы выполняли задания из 'Книги свиданий': кормили уток в парке, искали самый вкусный чизкейк в городе, танцевали под дождём. Каждое выполненное задание было не просто галочкой, а новой историей в нашей коллекции моментов, которые пахли опавшей листвой и счастьем.",
        quote: "«Главное воспоминание месяца - невероятная постановка 'Любовь без Памяти'»",
        photos: 20,
        image: "https://i.yapx.ru/cdyzc.jpg",
        color: "#00BBF9"
    },
    {
        id: 11,
        name: "Ноябрь",
        date: "16 ноября",
        title: "День прогулки",
        description: "За окном — слякоть и тусклые фонари, но ты в ярком свитере и с термосом какао. Ты смеялась над лужами, в которые я чуть не угодил, и в этот момент я понял: ноябрь не серый, когда в нём есть твои улыбки.",
        quote: "«Главное воспоминание месяца - очень долгая поездка до Вани»",
        photos: 2,
        image: "https://i.yapx.ru/cdy0w.jpg",
        color: "#00F5D4"
    },
    {
        id: 12,
        name: "Декабрь",
        date: "31 декабря",
        title: "Обещание вечности",
        description: "Под бой курантов мы загадали желания. Моё было простым — чтобы каждый следующий Новый год встречать с тобой. Потому что ты — моё самое большое чудо.",
        quote: "«Главное воспоминание месяца - МЫ»",
        photos: 18,
        image: "https://i.yapx.ru/cdy1K.jpg",
        color: "#FF9E00"
    }
];

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    createCalendar();
    createSnowflakes();
    createFireworks();
    //startCountdown();
});

// Создание календаря
function createCalendar() {
    const grid = document.querySelector('.calendar-grid');
    grid.innerHTML = '';
    
    monthsData.forEach(month => {
        const card = document.createElement('div');
        card.className = 'month-card';
        card.innerHTML = `
            <div class="month-number">${month.id}</div>
            <h3 class="month-name">${month.name}</h3>
            <div class="month-date">${month.date}</div>
            <p class="month-preview">${month.description.substring(0, 80)}...</p>
            <div class="memory-counter">
                <i class="far fa-image"></i>
                <span>${month.photos}</span> фото
            </div>
        `;
        
        card.addEventListener('click', () => openMonthModal(month));
        grid.appendChild(card);
    });
}

// Открытие модального окна месяца
function openMonthModal(month) {
    document.getElementById('modal-title').textContent = `${month.name}: ${month.title}`;
    document.getElementById('modal-date').textContent = month.date;
    document.getElementById('modal-description').textContent = month.description;
    document.getElementById('modal-quote').textContent = month.quote;
    document.getElementById('modal-photos').textContent = month.photos;
    document.getElementById('modal-img').src = month.image;
    
    const modal = document.getElementById('month-modal');
    modal.style.display = 'flex';
    
    // Анимация
    modal.style.animation = 'none';
    setTimeout(() => {
        modal.style.animation = 'modalAppear 0.5s ease';
    }, 10);
}

// Закрытие модального окна
function closeModal() {
    document.getElementById('month-modal').style.display = 'none';
}

// Запуск путешествия
function startJourney() {
    document.querySelector('.calendar-section').scrollIntoView({
        behavior: 'smooth'
    });
}

// Музыка
let isMusicPlaying = false;
const music = document.getElementById('bg-music');
const musicIcon = document.getElementById('music-icon');

function toggleMusic() {
    if (isMusicPlaying) {
        music.pause();
        musicIcon.className = 'fas fa-volume-mute';
    } else {
        music.play().catch(e => console.log("Автозапуск заблокирован браузером"));
        musicIcon.className = 'fas fa-volume-up';
    }
    isMusicPlaying = !isMusicPlaying;
}

// Секретный код (замени 0101 на настоящую дату ДДММ)
const SECRET_CODE = "1906"; // Например, 15 марта = 1503

function openEnvelope() {
    document.getElementById('secret-modal').style.display = 'block';
}

function checkCode() {
    const input = document.getElementById('secret-code').value;
    const errorMsg = document.getElementById('code-error');
    
    if (input === SECRET_CODE) {
        document.getElementById('secret-modal').style.display = 'none';
        document.getElementById('letter').style.display = 'block';
        document.getElementById('letter').scrollIntoView({behavior: 'smooth'});
        errorMsg.textContent = '';
        
        // Запуск конфетти
        createConfetti();
    } else {
        errorMsg.textContent = 'Неверный код. Попробуй ещё раз!';
        document.getElementById('secret-code').style.borderColor = '#ff4757';
        setTimeout(() => {
            document.getElementById('secret-code').style.borderColor = '#ff6b93';
        }, 1000);
    }
}

// Счётчик до следующего Нового года
function startCountdown() {
    function updateCountdown() {
        const now = new Date();
        const nextYear = now.getFullYear() + 1;
        const nextNewYear = new Date(nextYear, 0, 1, 0, 0, 0);
        const diff = nextNewYear - now;
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        
        document.getElementById('days').textContent = String(days).padStart(3, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    }
    
    updateCountdown();
    setInterval(updateCountdown, 60000);
}
// Снежинки
function createSnowflakes() {
    const container = document.querySelector('.snowflakes');
    for (let i = 0; i < 50; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.style.width = snowflake.style.height = Math.random() * 5 + 3 + 'px';
        snowflake.style.left = Math.random() * 100 + '%';
        snowflake.style.top = Math.random() * 100 + '%';
        snowflake.style.animationDelay = Math.random() * 5 + 's';
        snowflake.style.animationDuration = Math.random() * 3 + 5 + 's';
        container.appendChild(snowflake);
    }
}

// Фейерверк
function createFireworks() {
    const container = document.querySelector('.fireworks');
    for (let i = 0; i < 20; i++) {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.width = firework.style.height = Math.random() * 10 + 5 + 'px';
        firework.style.left = Math.random() * 100 + '%';
        firework.style.top = Math.random() * 100 + '%';
        firework.style.background = getRandomColor();
        firework.style.animation = `pulse ${Math.random() * 2 + 1}s infinite`;
        container.appendChild(firework);
    }
}

// Конфетти
function createConfetti() {
    const colors = ['#FF6B93', '#FF8E53', '#36D7B7', '#9B5DE5', '#00BBF9'];
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-20px';
        confetti.style.zIndex = '9999';
        confetti.style.opacity = '0.8';
        
        document.body.appendChild(confetti);
        
        // Анимация падения
        const animation = confetti.animate([
            { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
            { transform: `translateY(${window.innerHeight + 20}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
        ], {
            duration: Math.random() * 3000 + 2000,
            easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
        });
        
        animation.onfinish = () => confetti.remove();
    }
}

function getRandomColor() {
    const colors = ['#FF6B93', '#FF8E53', '#36D7B7', '#9B5DE5', '#00BBF9'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Закрытие модального окна при клике вне его
window.onclick = function(event) {
    const modal = document.getElementById('month-modal');
    if (event.target === modal) {
        closeModal();
    }
};
