function getPics() {} //just for this demo
const imgs = document.querySelectorAll('.gallery img');
const fullPage = document.querySelector('#fullpage');

imgs.forEach(img => {
  img.addEventListener('click', function() {
    fullPage.style.backgroundImage = 'url(' + img.src + ')';
    fullPage.style.display = 'block';
  });
});

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
