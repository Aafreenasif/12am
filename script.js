const celebrateImg = document.getElementById('celebrateImg');
const message = document.getElementById('message');

// Add bounce class to start animation
celebrateImg.classList.add('bounce');

celebrateImg.addEventListener('click', () => {
    // Trigger confetti
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: [ '#f15bb5', '#f4d35e', '#00f5d4', '#ff6f61', '#1e90ff' ]
    });

    // Display the message with a delay
    setTimeout(() => {
        message.style.display = 'block';
        message.style.opacity = 1;
    }, 1000); // Delay for 1 second
});
