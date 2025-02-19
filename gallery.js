document.addEventListener("DOMContentLoaded", () => {
    const sliderImages = document.querySelectorAll(".slider-img");
    const gallery = document.getElementById("gallery");
    const galleryContainer = document.getElementById("gallery-container");
    const selectMessage = document.getElementById("select-message");
    const galleryImages = document.querySelectorAll(".gallery-image");
    const trainerInfo = document.querySelectorAll(".trainer-info");

    // Mappage des images et des informations (prénom et âge)
    const galleryMapping = {
        0: {
            images: ["images/entraineurs/coach1.jpg", "images/entraineurs/coach2.jpg"],
            info: ["Cécile, 25 ans", "Yann, 26 ans"]
        },
        1: {
            images: ["images/entraineurs/coach3.jpg", "images/entraineurs/coach4.jpg"],
            info: ["Johan, 22 ans", "Priscillia, 31 ans"]
        },
        2: {
            images: ["images/entraineurs/coach5.jpg", "images/entraineurs/coach6.jpg"],
            info: ["Anna, 27 ans", "Guillaume, 32 ans"]
        }
    };

    // Initialisation de l'affichage
    galleryContainer.classList.add('initial'); // Si vous voulez une classe pour la gestion du début
    gallery.style.display = "none"; // Galerie cachée au début
    selectMessage.style.display = "block"; // Message visible au début

    // Mettre à jour les images et les informations lors du clic sur le slider
    sliderImages.forEach((slider, index) => {
        slider.addEventListener("click", () => {
            // Afficher la galerie et cacher le message de sélection
            gallery.style.display = "flex";
            selectMessage.style.display = "none";

            // Mettre à jour les images de la galerie
            galleryImages[0].src = galleryMapping[index].images[0];
            galleryImages[1].src = galleryMapping[index].images[1];

            // Mettre à jour les informations sous les images
            trainerInfo[0].textContent = galleryMapping[index].info[0];
            trainerInfo[1].textContent = galleryMapping[index].info[1];
        });
    });
});