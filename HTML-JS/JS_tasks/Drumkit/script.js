const boxes = document.querySelectorAll('.box');

function playSound(audio) {
    audio.currentTime = 0;
    audio.play();
}

boxes.forEach(box => {
    const audio = box.querySelector('audio');
    box.addEventListener('click', () => {
        playSound(audio);
        box.classList.add('active');
        setTimeout(() => box.classList.remove('active'), 100);
    });
});

document.addEventListener('keydown', (event) => {
    const key = event.key.toUpperCase();
    const box = document.getElementById(`${key}1`);
    if (box) {
        const audio = box.querySelector('audio');
        playSound(audio);
        box.classList.add('active');
        setTimeout(() => box.classList.remove('active'), 100);
    }
});
