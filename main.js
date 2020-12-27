let image = document.querySelectorAll('.image');

let onPressedImage = () => {
    console.log('Hi');
};

for (let i = 0; i < image.length; i++){
    image[i].addEventListener('click', onPressedImage)
};