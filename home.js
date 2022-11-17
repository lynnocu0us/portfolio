const percent = document.querySelector(".percent");
let counter = 0;
setInterval(()=>{
    if(counter == 100){
        clearInterval();
    }else{
        counter+=1;
        percent.textContent = counter + "%";
    }
}, 24);


setTimeout(() => {
    const box = document.getElementById('preloader');
    preloader.style.display = 'none';
}, 4000); 


