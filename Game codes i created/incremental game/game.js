// ============================
// MAIN GAME VARIABLES
// ============================
let points = 0;

let pointsPerSecond = 0;

let upgrade1Cost = 10;
// Prestige
let prestigePoints = 0;

// ============================
// UPDATE DISPLAY
// ============================
function updateUI() {
    document.getElementById("points").textContent = points.toFixed(0);
    document.getElementById("pps").textContent = pointsPerSecond.toFixed(1);
    document.getElementById("upgrade1-cost").textContent = upgrade1Cost;
    document.getElementById("upgrade2-cost").textContent = upgrade2Cost;
    document.getElementById("upgrade3-cost").textContent = upgrade3Cost;
    document.getElementById("prestige-points").textContent = prestigePoints;
}

// ============================
// MANUAL CLICK BUTTON
// ============================
document.getElementById("click-btn").addEventListener("click", () => {
    points += 1; // <-- CUSTOMIZE manual gain here
    updateUI();
});

// ============================
// UPGRADE 1
// ============================
document.getElementById("upgrade1-btn").addEventListener("click", () => {
    if (points >= upgrade1Cost) {
        points -= upgrade1Cost;
        pointsPerSecond += 1; // <-- CUSTOMIZE upgrade effect
        upgrade1Cost = Math.floor(upgrade1Cost * 1.5); // <-- CUSTOMIZE scaling
        updateUI();
    }
});

// ============================
// CUSTOM UPGRADE AREA
// Add your own upgrades here
// ============================
// Example template:

let upgrade2Cost = 100;
document.getElementById("upgrade2-btn").addEventListener("click", () => {
    if (points >= upgrade2Cost) {
        points -= upgrade2Cost;
        pointsPerSecond += 5; // <-- your effect
        upgrade2Cost *= 2;    // <-- your scaling
        updateUI();
    }
});
let upgrade3Cost = 500;
document.getElementById("upgrade3-btn").addEventListener("click", () => {
    if (points >= upgrade3Cost) {
        points -= upgrade3Cost;
        pointsPerSecond += 10; // <-- your effect
        upgrade3Cost *= 2.5;    // <-- your scaling
        updateUI();
    }
});
// ============================
// PASSIVE INCOME LOOP
// ============================
setInterval(() => {
    points += pointsPerSecond / 10; // 10 ticks per second
    updateUI();
}, 100);


// ============================
// UPGRADES MILESTONE MODIFIERS
// ===========================
function applyMilestoneModifiers() {
        if (upgrade1Cost(points) == 10) {
        pointsPerSecond *= 1.2;
    } if (upgrade2Cost == 100) {
        pointsPerSecond *= 1.5;
    } if (upgrade3Cost == 500) {
        pointsPerSecond *= 2;
    }
}
// ============================
// PRESTIGE SYSTEM
// ============================
document.getElementById("prestige-btn").addEventListener("click", () => {
    if (points >= 1000) { // <-- CUSTOMIZE prestige requirement
        prestigePoints += Math.floor(points / 1000); // <-- CUSTOMIZE reward formula
        points = 0;
        pointsPerSecond = 0;

        // OPTIONAL: apply prestige multipliers
        // Example:
        pointsPerSecond *= (1 + prestigePoints * 0.1);
        updateUI();
    }
});
