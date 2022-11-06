const images = [
    "https://p4.wallpaperbetter.com/wallpaper/648/347/704/apple-ios-mountains-and-galaxy-hd-wallpaper-wallpaper-preview.jpg",
    "https://p4.wallpaperbetter.com/wallpaper/384/818/513/himalayas-clouds-landscape-snow-wallpaper-preview.jpg",
    "https://p4.wallpaperbetter.com/wallpaper/725/705/172/earth-from-space-4k-wallpaper-preview.jpg",
    "https://p4.wallpaperbetter.com/wallpaper/245/498/403/digital-space-universe-4k-8k-wallpaper-preview.jpg",
    "https://p4.wallpaperbetter.com/wallpaper/508/247/647/space-stars-carina-nebula-nebula-wallpaper-preview.jpg",
    "https://p4.wallpaperbetter.com/wallpaper/772/465/287/abstract-digital-art-space-stars-wallpaper-preview.jpg",
    "https://p4.wallpaperbetter.com/wallpaper/508/247/647/space-stars-carina-nebula-nebula-wallpaper-preview.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");
//console.log(chosenImage);
bgImage.src = chosenImage;

document.body.appendChild(bgImage);

