// Animación de corazones
function createHearts() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    document.body.appendChild(heart);
  
    setTimeout(() => {
      heart.remove();
    }, 5000);
  }
  
  setInterval(createHearts, 300);
  
  // Interactividad
  const btnYes = document.getElementById('btnYes');
  const btnNo = document.getElementById('btnNo');
  const confetti = document.getElementById('confetti');
  
  btnYes.addEventListener('click', () => {
    confetti.classList.remove('hidden');
    btnYes.style.display = 'none';
    btnNo.style.display = 'none';
  });
  
  btnNo.addEventListener('click', () => {
    btnNo.style.position = 'absolute';
    btnNo.style.left = Math.random() * 80 + 'vw';
    btnNo.style.top = Math.random() * 80 + 'vh';
  });