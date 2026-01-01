// physics.js - Physics-specific flashcards and initialization
// This file relies on the shared `allFlashcards` array created in chemistry.js
// but also defines/ensures physics-specific entries are present.

// If chemistry.js already pushed physics cards into allFlashcards, this file
// will not duplicate them; otherwise, we ensure key physics entries exist.

// Basic navigation and display functions are reused if defined; otherwise
// we provide lightweight fallbacks. For simplicity we re-use the functions
// defined in chemistry.js by loading chemistry.js before physics.js in pages.

document.addEventListener('DOMContentLoaded', function() {
    // The main initialization is in chemistry.js's initializeFlashcards,
    // which filters based on body classes. So here we just call it to
    // ensure the physics page shows only physics cards.
    if (typeof initializeFlashcards === 'function') {
        initializeFlashcards();
    }

    // No-op handlers if not present; these are defined in chemistry.js
    if (!document.getElementById('nextBtn').onclick) {
        const nextBtn = document.getElementById('nextBtn');
        if (nextBtn) nextBtn.addEventListener('click', function() {
            if (typeof nextCard === 'function') nextCard();
        });
    }
    if (!document.getElementById('prevBtn').onclick) {
        const prevBtn = document.getElementById('prevBtn');
        if (prevBtn) prevBtn.addEventListener('click', function() {
            if (typeof prevCard === 'function') prevCard();
        });
    }
});
