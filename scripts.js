let clickCount = 0;
const maxClicks = 6;
const msgs = [
    "Oh no, that's not the right one...",
    "Try the other button, love.",
    "Not this one, my dear.",
    "You're almost there, sweetheart.",
    "Just one more step, darling.",
    "The answer is right beside you.",
    "👆You almost found it, my love!👆"
];

document.getElementById('no-button').addEventListener('click', function () {
    if (clickCount < maxClicks) {
        clickCount++;

        const yesButton = document.getElementById('yes-button');
        yesButton.style.padding = `${10 + clickCount * 5}px ${20 + clickCount * 10}px`;
        yesButton.style.fontSize = `${16 + clickCount * 2}px`;

        const noButton = document.getElementById('no-button');
        noButton.textContent = `${msgs[clickCount]}`;
    }
});

document.getElementById('yes-button').addEventListener('click', function () {
    const yesButton = document.getElementById('yes-button');
    const noButton = document.getElementById('no-button');
    yesButton.classList.add('hidden');
    noButton.classList.add('hidden');

    const happyTeddy = document.getElementById('happy-teddy');
    happyTeddy.style.display = 'block';
});
