const messages = [
    "I’ve fallen deeply in love with you and I want to be the one who makes you the happiest.",
    "My life is so much brighter because I love you. ✨",
    "Every time I think about my future, you are always the person by my side.",
    "You make even the simplest moments feel extraordinary.",
    "I don't just want to be a part of your life—I want to be the person who loves you with everything I have.",
    "I love you more than words can say. ❤️"
];

const revealBtn = document.getElementById('revealBtn');
const secretContainer = document.getElementById('secretMessage');

revealBtn.addEventListener('click', function() {
    // 1. Pick a random message from the list
    const randomIndex = Math.floor(Math.random() * messages.length);
    const selectedMessage = messages[randomIndex];

    // 2. Update the text inside the div
    secretContainer.innerHTML = `<p>${selectedMessage}</p>`;

    // 3. Make sure the message is visible
    secretContainer.classList.remove('hidden');

    // 4. Change the button text
    this.innerText = "Click for more love";
});