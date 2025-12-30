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
        date: "15 января",
        title: "Наше случайное чудо",
        description: "Тот самый день, когда наши пути пересеклись. Ты уронила книгу, а я поднял не просто книгу — судьбу. В твоих глазах было столько света, что даже зимний вечер показался летним.",
        quote: "«Случайности — это псевдонимы Бога, когда он не хочет подписываться своим именем»",
        photos: 5,
        image: "https://i.yapx.ru/cdER7.jpg",
        color: "#FF6B93"
    },
    {
        id: 2,
        name: "Февраль",
        date: "14 февраля",
        title: "Первое признание",
        description: "День, когда слова «я тебя люблю» перестали быть просто словами. Мы шли по пустынному парку, и снег падал так медленно, как будто время остановилось специально для нас.",
        quote: "«Любовь — это когда кто-то может дать тебе почувствовать себя собой и при этом — лучшей версией себя»",
        photos: 8,
        image: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?ixlib=rb-1.2.1&auto=format&fit=crop&w-600&q=80",
        color: "#FF8E53"
    },
    {
        id: 3,
        name: "Март",
        date: "8 марта",
        title: "Цветы среди снега",
        description: "Ты сказала, что не любит срезанные цветы, потому что им больно. Тогда я принес цветок в горшке — фиалку. Она до сих пор цветёт у тебя на окне, как и наша любовь.",
        quote: "«Настоящая любовь расцветает даже в самых суровых условиях»",
        photos: 3,
        image: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        color: "#36D7B7"
    },
    {
        id: 4,
        name: "Апрель",
        date: "1 апреля",
        title: "День смеха и правды",
        description: "Я решил пошутить, сказав, что встретил свою бывшую. Твоё лицо было таким искренним, что я сразу признался — это шутка. А потом ты целый день придумывала мне самые нелепые «мести».",
        quote: "«Самые лучшие шутки — те, после которых хочется обнять»",
        photos: 7,
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        color: "#A363D9"
    },
    {
        id: 5,
        name: "Май",
        date: "9 мая",
        title: "Первое путешествие",
        description: "Всего 200 км от города, но казалось, что мы в другом мире. Лес, костёр, песни под гитару и твоя голова на моём плече. Именно тогда я понял — дом это не место, а человек.",
        quote: "«Путешествовать — значит жить вдвойне»",
        photos: 12,
        image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        color: "#FFD166"
    },
    {
        id: 6,
        name: "Июнь",
        date: "22 июня",
        title: "Ночь у костра",
        description: "Самая короткая ночь в году, но самая длинная в наших воспоминаниях. Мы не спали до утра, разговаривали обо всём на свете. Ты рассказывала о своих мечтах, и я хотел сделать их реальностью.",
        quote: "«Некоторые разговоры стоят тысячи обычных слов»",
        photos: 15,
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        color: "#06D6A0"
    },
    {
        id: 7,
        name: "Июль",
        date: "15 июля",
        title: "День, когда ты плакала",
        description: "Ты получила плохие новости и разрыдалась у меня на плече. В тот момент я поклялся, что буду всегда рядом в трудные минуты. И что твои слёзы — это моя ответственность превратить в улыбки.",
        quote: "«Сила отношений проверяется не в радости, а в печали»",
        photos: 4,
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        color: "#118AB2"
    },
    {
        id: 8,
        name: "Август",
        date: "3 августа",
        title: "Звёздный дождь",
        description: "Мы лежали на крыше и считали падающие звёзды. Ты загадала желание, а я — просто смотрел на тебя. Иногда кажется, что все звёзды с того вечера теперь живут в твоих глазах.",
        quote: "«Иногда нужно смотреть не на звёзды, а на того, кто смотрит на них с тобой»",
        photos: 9,
        image: "https://images.unsplash.com/photo-1532978379173-523e6a4a115e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        color: "#9B5DE5"
    },
    {
        id: 9,
        name: "Сентябрь",
        date: "1 сентября",
        title: "Начало нового",
        description: "Ты поступила в университет, а я — нашёл новую работу. Мы оба боялись перемен, но держались за руки и шли вперёд. Страшно не тогда, когда меняешься, а когда меняешься один.",
        quote: "«Лучшее впереди — особенно если ты рядом»",
        photos: 6,
        image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        color: "#F15BB5"
    },
    {
        id: 10,
        name: "Октябрь",
        date: "21 октября",
        title: "Твой день рождения",
        description: "19 лет — возраст, когда детство уже позади, а взрослость ещё впереди. Я видел, как ты становишься той удивительной женщиной, которой всегда хотела быть. И гордился каждой твоей чертой.",
        quote: "«Стареть — обязательно, взрослеть — нет. Рад, что ты выбираешь второе»",
        photos: 20,
        image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        color: "#00BBF9"
    },
    {
        id: 11,
        name: "Ноябрь",
        date: "7 ноября",
        title: "День тишины",
        description: "Мы целый день молчали. Не потому что поссорились, а потому что иногда слова не нужны. Просто готовили вместе, читали, смотрели в окно. И это было идеально.",
        quote: "«Тишина между нами была такой же содержательной, как и слова»",
        photos: 2,
        image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        color: "#00F5D4"
    },
    {
        id: 12,
        name: "Декабрь",
        date: "31 декабря",
        title: "Обещание вечности",
        description: "Под бой курантов мы загадали желания. Моё было простым — чтобы каждый следующий Новый год встречать с тобой. Потому что ты — моё самое большое чудо.",
        quote: "«Новый год — это не смена даты, а возможность начать новую главу с тем, кто делает твою жизнь книгой, а не страницей»",
        photos: 18,
        image: "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        color: "#FF9E00"
    }
];

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    createCalendar();
    createSnowflakes();
    createFireworks();
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
const SECRET_CODE = "0101"; // Например, 15 марта = 1503

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
