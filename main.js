let images = document.querySelectorAll('.image');

let onPressedImage = (e) => {
    images.forEach((image) => {
        image.classList.remove("active");
    })
    e.target.classList.add("active");
};

for (image of images){
    image.addEventListener('click', onPressedImage)
};