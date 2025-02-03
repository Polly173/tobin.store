// Set initial points
let points = 0;

// Get HTML elements
const scoreDisplay = document.getElementById('score');
const clickButton = document.getElementById('clickButton');
const item1 = document.getElementById('item1');
const item2 = document.getElementById('item2');
const item3 = document.getElementById('item3');

// Update score display function
function updateScore() {
    scoreDisplay.innerText = points;
}

// Click button functionality - add points
clickButton.addEventListener('click', () => {
    points += 1; // Earn 1 point per click
    updateScore();
});

// Shop item purchase functionality
item1.addEventListener('click', () => {
    if (points >= 10) {
        points -= 10; // Deduct points for item
        alert("You bought a T-shirt!"); // Simple feedback
        updateScore();
    } else {
        alert("Not enough points for T-shirt!");
    }
});

item2.addEventListener('click', () => {
    if (points >= 20) {
        points -= 20; // Deduct points for item
        alert("You bought a Mug!");
        updateScore();
    } else {
        alert("Not enough points for Mug!");
    }
});

item3.addEventListener('click', () => {
    if (points >= 30) {
        points -= 30; // Deduct points for item
        alert("You bought a Sticker!");
        updateScore();
    } else {
        alert("Not enough points for Sticker!");
    }
});
