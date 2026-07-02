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

const cardBounce = document.querySelector('.card-bounce');

cardBounce.addEventListener('pointerdown', (e) => {
    const rect = cardBounce.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const tiltX = (y - centerY) / centerY; 
    const tiltY = (x - centerX) / centerX; 
    
    const rotX = tiltX * -15; 
    const rotY = tiltY * 15; 
    
    cardBounce.style.transition = 'transform 0.1s ease-out';
    cardBounce.style.transform = `scale(0.92) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
});

const releaseBounce = () => {
    cardBounce.style.transition = 'transform 0.4s cubic-bezier(0.25, 1.5, 0.5, 1)';
    cardBounce.style.transform = 'scale(1) rotateX(0) rotateY(0)';
};

cardBounce.addEventListener('pointerup', releaseBounce);
cardBounce.addEventListener('pointerleave', releaseBounce);
cardBounce.addEventListener('pointercancel', releaseBounce);
