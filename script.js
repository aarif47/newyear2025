function greetUser() {
    const nameInput = document.getElementById('nameInput');
    const name = nameInput.value.trim();
    const message = document.querySelector('.new-year-message');
    
    if (name) {
        message.textContent = `🎉 Happy New Year ${2025} ${name}! 🎉`;
    } else {
        message.textContent = `🎉 Happy New Year ${2025}! 🎉`;
    }
    
    message.style.animation = 'none'; // Reset animation
    message.offsetHeight; // Trigger reflow
    message.style.animation = 'fadeIn 2s forwards'; // Fade in the personalized message
    startCelebration(); // Start the celebration animations
}

function startCelebration() {
    for (let i = 0; i < 15; i++) { // Create 15 surprise elements
        createSurpriseElement();
    }
}

function createSurpriseElement() {
    const surpriseTypes = ['balloon', 'cake', 'bird'];
    const type = surpriseTypes[Math.floor(Math.random() * surpriseTypes.length)];
    const surpriseElement = document.createElement('div');
    surpriseElement.className = `${type} surprise`;
    surpriseElement.style.left = Math.random() * 100 + 'vw';

    // Set random colors for balloons
    if (type === 'balloon') {
        surpriseElement.style.backgroundColor = getRandomColor();
    } else if (type === 'cake') {
        surpriseElement.style.backgroundImage = "url('https://img.icons8.com/ios/50/000000/birthday-cake.png')";
    } else if (type === 'bird') {
        surpriseElement.style.backgroundImage = "url('https://img.icons8.com/ios/50/000000/bird.png')";
    }

    document.body.appendChild(surpriseElement);

    // Remove the element after the animation
    setTimeout(() => {
        surpriseElement.remove();
    }, 4000);
}

function getRandomColor() {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F033FF', '#FF33A6', '#33FFF0'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Automatically start the celebration when the page loads
window.onload = startCelebration;

