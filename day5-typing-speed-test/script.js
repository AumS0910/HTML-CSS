const typingText = document.querySelector('.typing-text p');
const userInput = document.querySelector('.input-field');
const timeDisplay = document.querySelector('.time span b');
const mistakesDisplay = document.querySelector('.mistakes span');
const wpmDisplay = document.querySelector('.wpm span');
const cpmDisplay = document.querySelector('.cpm span');
const resetBtn = document.querySelector('.reset-btn');

let timer;
let maxTime = 60;
let timeLeft = maxTime;
let charIndex = 0;
let mistakes = 0;
let isTyping = false;

function loadRandomText() {
    const texts = [
        "The quick brown fox jumps over the lazy dog.",
        "Typing speed tests are a fun way to improve your keyboard skills.",
        "Practice makes perfect, so keep typing to get better!",
        "JavaScript is a versatile programming language used for web development.",
        "Consistent practice can significantly enhance your typing speed and accuracy."
    ];
    const randomIndex = Math.floor(Math.random() * texts.length);
    typingText.innerHTML = '';
    for (const char of texts[randomIndex]) {
        typingText.innerHTML += `<span>${char}</span>`;
    }
    typingText.querySelectorAll('span')[0].classList.add('active');
}
loadRandomText();

function initTyping() {
    const characters = typingText.querySelectorAll('span');
    const typedChar = userInput.value.charAt(charIndex);

    if (charIndex < characters.length && timeLeft > 0) {
        if (!isTyping) {
            timer = setInterval(initTimer, 1000);
            isTyping = true;
        }

        if (typedChar === characters[charIndex].innerText) {
            characters[charIndex].classList.add('correct');
        } else {
            characters[charIndex].classList.add('incorrect');
            mistakes++;
            mistakesDisplay.innerText = mistakes;
        }
        characters[charIndex].classList.remove('active');
        charIndex++;
        if (charIndex < characters.length) {
            characters[charIndex].classList.add('active');
        }

        // Update CPM & WPM
        const cpm = charIndex - mistakes;
        const wpm = Math.round(((cpm / 5) / (maxTime - timeLeft)) * 60);
        cpmDisplay.innerText = cpm;
        wpmDisplay.innerText = wpm > 0 && wpm !== Infinity ? wpm : 0;
    }
}

function initTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        timeDisplay.innerText = `${timeLeft}s`;
    } else {
        clearInterval(timer);
    }
}

function resetGame() {
    loadRandomText();
    clearInterval(timer);
    timeLeft = maxTime;
    charIndex = mistakes = 0;
    userInput.value = '';
    timeDisplay.innerText = `${timeLeft}s`;
    mistakesDisplay.innerText = 0;
    wpmDisplay.innerText = 0;
    cpmDisplay.innerText = 0;
    isTyping = false;
}

userInput.addEventListener('input', initTyping);
resetBtn.addEventListener('click', resetGame);
