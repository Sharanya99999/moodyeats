function getSuggestion() {
    const mood = document.getElementById('mood').value;
    const suggestionDiv = document.getElementById('suggestion');
    const vibeH2 = document.getElementById('vibe');
    const foodsDiv = document.getElementById('food-suggestions');

    if (!mood) {
        alert("Pick a mood first! 🌸");
        return;
    }

    const data = {
        happy: {
            vibe: "You’re glowing! Here’s some celebration food ✨",
            foods: ["Pizza 🍕", "Milkshake 🥤", "Pasta 🍝"]
        },
        sad: {
            vibe: "Sending you comfort food hugs 💛",
            foods: ["Chocolate 🍫", "Ice Cream 🍨", "Mac & Cheese 🧀"]
        },
        tired: {
            vibe: "Energy booster mode activated ⚡",
            foods: ["Coffee ☕", "Energy Bar 🍫", "Sandwich 🥪"]
        }
    };

    const chosen = data[mood];
    vibeH2.textContent = chosen.vibe;

    foodsDiv.innerHTML = ""; // clear old items

    chosen.foods.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        foodsDiv.appendChild(li);
    });

    suggestionDiv.classList.remove("hidden");
}
