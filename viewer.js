// Extension Twitch - Duc Speacker
// Logique de chargement pour l'extension de panneau

document.addEventListener('DOMContentLoaded', function() {
    console.log('Extension Duc Speacker chargée avec succès');
    
    // Vérification que l'extension est bien chargée dans l'environnement Twitch
    if (window.Twitch && window.Twitch.ext) {
        console.log('Environnement Twitch détecté');
        
        // Initialisation de l'extension Twitch
        window.Twitch.ext.onAuthorized(function(auth) {
            console.log('Extension autorisée:', auth);
        });
        
        window.Twitch.ext.onError(function(err) {
            console.error('Erreur extension Twitch:', err);
        });
    } else {
        console.log('Extension chargée en mode développement (hors Twitch)');
    }
    
    // Animation d'apparition du texte
    const coucouText = document.querySelector('.coucou-text');
    if (coucouText) {
        coucouText.style.opacity = '0';
        coucouText.style.transform = 'scale(0.8)';
        
        setTimeout(() => {
            coucouText.style.transition = 'all 0.8s ease-out';
            coucouText.style.opacity = '1';
            coucouText.style.transform = 'scale(1)';
        }, 200);
    }
}); 