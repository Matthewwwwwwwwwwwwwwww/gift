/* Базовые настройки страницы */
body {
    margin: 0;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #040220;
    font-family: 'Golos Text', sans-serif;
    color: #ffffff;
    overflow: hidden; 
    position: relative;
}

/* === СЛОЙ 1: ЗВЕЗДЫ === */
#stars-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1; 
    pointer-events: none; 
}

.star {
    position: absolute;
    top: 50%;  
    left: 50%; 
    color: #FFD700;
    font-size: 14px;
    opacity: 0;
    margin-top: -7px;
    margin-left: -7px;
    animation: sparkle 3s ease-out infinite;
    animation-delay: var(--delay);
}

@keyframes sparkle {
    0% {
        transform: translate(0px, 0px) scale(0) rotate(0deg);
        opacity: 0;
    }
    15% {
        opacity: 1; 
    }
    80% {
        opacity: 1;
    }
    100% {
        transform: translate(var(--tx), var(--ty)) scale(var(--scale)) rotate(180deg);
        opacity: 0; 
    }
}

/* === СЛОЙ 2: КАРТОЧКА И АНИМАЦИИ === */
.card-wrapper {
    position: relative;
    z-index: 10; 
    /* ДОБАВЛЕНО: Дает браузеру понимание глубины пространства для наших нажатий */
    perspective: 1000px; 
    animation: float 4s ease-in-out infinite;
}

@keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
}

/* --- Настройки пружинистого тапа/клика --- */
.card-bounce {
    transform-style: preserve-3d;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    /* Убрали жесткие transition, так как скрипт будет задавать их на лету */
}

/* Состояние, когда карточка нажата (класс добавляется через JS) */
.card-bounce.is-pressed {
    /* Быстрое сжатие */
    transform: scale(0.92);
    transition: transform 0.1s ease-out;
}

/* Сама карточка */
.card {
    width: 320px;
    aspect-ratio: 3 / 4;
    background: #1d1962;
    border-radius: 24px;
    /* Было: padding: 30px; Стало: 30px сверху/с боков и 60px снизу */
    padding: 30px 30px 50px 30px; 
    border: 1px solid rgba(30, 144, 255, 0); 
    transform-style: preserve-3d;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    animation: border-flicker 2.5s ease-in-out infinite;
}

@keyframes border-flicker {
    0%, 100% {
        border-color: rgba(218, 255, 30, 0.2);
    }
    25% {
        border-color: rgba(229, 255, 30, 0.1);
    }
    50% {
        border-color: rgba(250, 240, 135, 0.4);
    }
    75% {
        border-color: rgba(255, 229, 30, 0.2);
    }
}

/* === КОНТЕЙНЕР ДЛЯ ТОРТА И СВЕЧЕНИЯ === */
.cake-container {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    transform: translateZ(50px); 
}

.card-img {
    width: 100%;
    height: 180px;
    object-fit: contain; 
    position: relative;
    z-index: 2; 
    margin-bottom: 0;
    transform: scale(1.3); 
}

.glow-effect {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 210px;
    height: 210px;
    z-index: 1; 
    background: radial-gradient(circle, rgba(135, 206, 250, 0.6) 0%, rgba(30, 144, 255, 0.2) 50%, rgba(0, 0, 0, 0) 70%);
    filter: blur(20px);
    animation: candle-flicker 2.5s ease-in-out infinite;
}

@keyframes candle-flicker {
    0%, 100% {
        transform: translate(-50%, -50%) scale(1);
        opacity: 0.7;
    }
    25% {
        transform: translate(-52%, -49%) scale(0.92);
        opacity: 0.55;
    }
    50% {
        transform: translate(-49%, -51%) scale(1.1);
        opacity: 0.85;
    }
    75% {
        transform: translate(-51%, -48%) scale(0.97);
        opacity: 0.65;
    }
}

/* === ОФОРМЛЕНИЕ ТЕКСТА === */
.card-content {
    transform: translateZ(30px);
}

.card-content h2 { 
    margin: 0 0 10px; 
    font-size: 28px; 
    font-weight: 600; 
    text-align: center; 
}

.card-content p { 
    font-size: 15px; 
    color: #d9ebff; 
    margin-bottom: 20px;
    font-weight: 300;  
    line-height: 1.6; 
    text-align: center; 
}

.details { 
    display: flex; 
    flex-direction: column; 
    font-weight: 200; 
    gap: 10px; 
    font-size: 15px;
    opacity: 1;
    align-items: center; 
    text-align: center;  
}
