var clicks = 0;
var level = 1;
var cost = 10;

//setup the initial display

document.getElementById("lv").innerText = ("Level: " + level);
document.getElementById("upgrader").innerText = ("Cost: " + cost);

// Increments clicks based on the current level and updates the display

function addclick() {
    clicks += level;
    document.getElementById("clicker").innerText = ("Clicks: " + clicks);
}

// Handles upgrading the level if sufficient clicks are available

function upgrade() {
    if (clicks >= cost || clicks == cost) {
        clicks -= cost;
        level++;
        cost *= 2;
        document.getElementById("upgrader").innerText = ("Cost: " + cost);
        document.getElementById("lv").innerText = ("Level: " + level);
        document.getElementById("clicker").innerText = ("Clicks: " + clicks);
    } else {
        alert("Not enough clicks!");
    }
}
