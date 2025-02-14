"use strict";
// A dictionary of codes -> memory data
const memories = {
    arches: {
        src: "images/arches.JPG",
        alt: "Arches National Park",
        text: "Remember our unforgettable trip to Arches National Park? The towering arches were breathtaking!",
    },
    firstHike: {
        src: "images/firstHike.JPG",
        alt: "Our First Hike",
        text: "This was our very first hike together. It might have been small, but it was the start of many adventures!",
    },
    windCave: {
        src: "images/windCave.JPG",
        alt: "Wind Cave Exploration",
        text: "Exploring Wind Cave was so thrilling—just the two of us and the echoes of our laughter underground!",
    },
};
// Grab references to relevant DOM elements
const unlockButton = document.getElementById("unlock-button");
const unlockScreen = document.getElementById("unlock-screen");
const memoryScreen = document.getElementById("memory-screen");
const memoryImage = document.getElementById("memory-image");
const memoryText = document.getElementById("memory-text");
const codeInput = document.getElementById("unlock-code");
const backButton = document.getElementById("back-button");
// Unlock button logic
unlockButton.addEventListener("click", () => {
    const userCode = codeInput.value.trim();
    console.log(userCode);
    // Check if the code matches one of our memories
    if (memories[userCode]) {
        // Populate the memory screen with the chosen memory
        memoryImage.src = memories[userCode].src;
        memoryImage.alt = memories[userCode].alt;
        memoryText.textContent = memories[userCode].text;
        // Switch screens
        unlockScreen.classList.remove("active");
        memoryScreen.classList.add("active");
    }
    else {
        // If the code is invalid, alert the user
        alert("Sorry, that code isn't recognized. Please try again!");
    }
});
// Back button logic
backButton.addEventListener("click", () => {
    // Hide memory screen, show unlock screen
    memoryScreen.classList.remove("active");
    unlockScreen.classList.add("active");
    // Optionally clear the code input
    codeInput.value = "";
});
