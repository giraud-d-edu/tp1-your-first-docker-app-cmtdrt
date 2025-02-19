/*document.addEventListener("DOMContentLoaded", function () {
    const equipementContainer = document.querySelector('.equipement-images');

    // Liste des fichiers d'images à afficher (en attendant une solution côté serveur)
    const equipementImages = [
        "images/equipements/eq1.jpg",
        "images/equipements/eq2.jpg",
        "images/equipements/eq3.jpg",
        "images/equipements/eq4.jpg",
        "images/equipements/eq5.jpg",
        "images/equipements/eq6.jpg",
        "images/equipements/eq7.jpg"
    ];

    // Ajout des images dans le carrousel
    equipementImages.forEach(imageSrc => {
        const img = document.createElement('img');
        img.src = imageSrc;
        img.alt = "Équipement";
        equipementContainer.appendChild(img);
    });

    // Pour créer un défilement infini, on duplique les images pour créer l'effet de boucle
    const imagesClone = equipementContainer.innerHTML;
    equipementContainer.innerHTML += imagesClone;  // Duplication du contenu
});*/