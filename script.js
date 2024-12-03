const dynamicText = document.getElementById('dynamic-text');
const phrases = ['Organized', 'Produced', 'Presented'];  // Sequence of phrases
let currentPhraseIndex = 0; // Start with the first phrase

function typeWriterEffect() {
    // Get the current phrase to type
    const phrase = phrases[currentPhraseIndex];

    let currentText = dynamicText.textContent;
    let index = currentText.length;

    // Backspace effect
    function eraseText() {
        if (index > 0) {
            dynamicText.textContent = currentText.slice(0, index - 1);
            index--;
            setTimeout(eraseText, 100); // Speed of erasing
        } else {
            // After erasing, move to the next phrase
            currentPhraseIndex++;
            if (currentPhraseIndex < phrases.length) {
                typeText(phrases[currentPhraseIndex]); // Type the next phrase
            } else {
                // Reset to first phrase after reaching the end
                currentPhraseIndex = 0; 
                setTimeout(() => {
                    dynamicText.textContent = phrases[currentPhraseIndex]; // Show first phrase
                    setTimeout(typeWriterEffect, 1000); // Restart animation after a delay
                }, 1000);
            }
        }
    }

    // Type new text
    function typeText(newPhrase) {
        let typingIndex = 0;
        dynamicText.textContent = ''; // Clear current text

        function type() {
            if (typingIndex < newPhrase.length) {
                dynamicText.textContent += newPhrase.charAt(typingIndex);
                typingIndex++;
                setTimeout(type, 150); // Speed of typing
            } else {
                // After typing, wait and start the backspacing effect again
                setTimeout(eraseText, 1000); // Delay before erasing
            }
        }

        type();
    }

    eraseText(); // Start the backspacing effect initially
}

// Initialize the animation with the first phrase
dynamicText.textContent = phrases[0];  // Start with 'Organized' showing initially
setTimeout(typeWriterEffect, 1000); // Start the animation after a short delay
