const starsContainer = document.getElementById('stars-container');
const starCount = 150; 

for (let i = 0; i < starCount; i++) {
    const star = document.createElement('span');
    star.classList.add('star');
    star.innerHTML = '✦'; 

    const angle = Math.random() * Math.PI * 2;
    // Радиус разлета от 150 до 450 пикселей от центра экрана
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