// === 1. ГЕНЕРАЦИЯ ЗВЕЗД (ФОН) ===
const starsContainer = document.getElementById('stars-container');
const starCount = 150; 

for (let i = 0; i < starCount; i++) {
    const star = document.createElement('span');
    star.classList.add('star');
    star.innerHTML = '✦'; 

    const angle = Math.random() * Math.PI * 2;
    const radius = 150 + Math.random() * 300; 
    
    const tx = Math.cos(angle) * radius;
    const ty = Math.sin(angle) * radius;

    const delay = Math.random() * 3; 
    const scale = 0.3 + Math.random() * 0.9; 

    star.style.setProperty('--tx', `${tx}px`);
    star.style.setProperty('--ty', `${ty}px`);
    star.style.setProperty('--delay', `${delay}s`);
    star.style.setProperty('--scale', scale);

    starsContainer.appendChild(star);
}

// === 2. УМНОЕ 3D-ПРОДАВЛИВАНИЕ КАРТОЧКИ ===
const cardBounce = document.querySelector('.card-bounce');

cardBounce.addEventListener('pointerdown', (e) => {
    // Получаем текущие размеры и позицию карточки на экране
    const rect = cardBounce.getBoundingClientRect();
    
    // Находим координаты клика/касания внутри самой карточки
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Вычисляем отклонение от центра (значения от -1 до 1)
    // Если нажать в самый верх, tiltX будет -1. В самый низ: 1.
    const tiltX = (y - centerY) / centerY; 
    const tiltY = (x - centerX) / centerX; 
    
    // Умножаем на силу продавливания (15 градусов)
    // Математика осей: инвертируем X, но оставляем Y, чтобы край уходил НАЗАД от пальца
    const rotX = tiltX * -15; 
    const rotY = tiltY * 15; 
    
    // Устанавливаем резкую анимацию для нажатия и применяем вычисленные углы
    cardBounce.style.transition = 'transform 0.1s ease-out';
    cardBounce.style.transform = `scale(0.92) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
});

// Функция возврата карточки в исходное положение
const releaseBounce = () => {
    // Делаем возврат плавным и пружинистым (cubic-bezier)
    cardBounce.style.transition = 'transform 0.4s cubic-bezier(0.25, 1.5, 0.5, 1)';
    // Сбрасываем наклон и масштаб
    cardBounce.style.transform = 'scale(1) rotateX(0) rotateY(0)';
};

// Отпускаем палец/мышь — карточка отпружинивает обратно
cardBounce.addEventListener('pointerup', releaseBounce);
// На случай, если нажали и увели курсор/палец за пределы карточки
cardBounce.addEventListener('pointerleave', releaseBounce);
// На случай системного прерывания (например, свайп по экрану или звонок)
cardBounce.addEventListener('pointercancel', releaseBounce);
