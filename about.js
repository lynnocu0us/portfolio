const images = document.querySelector(".avatar");

images.forEach(image => {
    const newUrl = image.getAttribute("data-src");
    image.src = newUrl;
}) 


if ('loading' in HTMLImageElement.prototype) {
    //Native Lazy Loading Supported!

    console.log('yay!')

    const images = document.querySelectorAll('img[loading="lazy"]')
    images.forEach(img => {
        img.src = img.dataset.src;
    })
} else {
    // Not supported!

    console.log('boo!')

    const script = document.createElement('script')
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/4.1.8/lazysizes.min.js';
    document.body.appendChild(script);
}
