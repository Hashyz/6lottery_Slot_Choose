(function() {
    // NOTE: This script picks a game completely at random.

    // This function creates a more forceful style to ensure the border is visible.
    function addHighlightStyle() {
        // Remove any old style element to ensure a fresh start
        const oldStyle = document.getElementById('random-game-highlighter-style');
        if (oldStyle) {
            oldStyle.remove();
        }
        
        const style = document.createElement('style');
        style.id = 'random-game-highlighter-style';
        // This CSS is more aggressive to override the site's default styles.
        // It applies the border directly to the image inside the selected container.
        style.innerHTML = `
            .highlight-card img {
                border: 6px solid gold !important;
                box-shadow: 0 0 25px gold !important;
                border-radius: 15px !important; /* Rounded corners for the border */
                transform: scale(1.05);
                transition: transform 0.35s ease, box-shadow 0.35s ease;
            }
        `;
        document.head.appendChild(style);
    }

    // This function selects and highlights a random game.
    function highlightRandomGame() {
        const cards = document.querySelectorAll('.onlineGames__container-list__item');
        
        if (cards.length === 0) {
            console.error("Error: Could not find any game cards with the class '.onlineGames__container-list__item'.");
            return;
        }

        // Clear any previous highlight from all cards.
        cards.forEach(card => card.classList.remove('highlight-card'));

        // Pick a new random game.
        const randomIndex = Math.floor(Math.random() * cards.length);
        const chosenCard = cards[randomIndex];

        // Apply the highlight class to the container, and the style will target the image inside.
        chosenCard.classList.add('highlight-card');
        chosenCard.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
        
        const gameName = chosenCard.querySelector('span').textContent.trim();
        console.log(`Randomly Highlighted: ${gameName}`);
        console.log("A 6px golden border and glow should now be visible on the selected game.");
    }

    // Run the functions.
    addHighlightStyle();
    highlightRandomGame();

})();
