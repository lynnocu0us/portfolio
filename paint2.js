let color = "black";
let strokeSize = 10;

function changeColorAndSize(data, width) {
  color = data;
  strokeSize = width;
}
window.addEventListener("load", () => {
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext("2d");

  //resizing
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  //variables
  let painting = false;

  //functions
  function startPosition(e) {
    painting = true;
    draw(e);
  }

  function endPosition() {
    painting = false;
    ctx.beginPath();
  }

  function draw(e) {
    if (!painting) {
      return;
    }
    
    e.preventDefault();
    ctx.lineWidth = strokeSize;
    ctx.lineCap = "round";
 
    // ctx.lineTo(e.clientX, e.clientY);
    if (e.type == 'touchmove'){
      ctx.lineTo(e.touches[0].clientX, e.touches[0].clientY);
    } else if (e.type == 'mousemove'){
      ctx.lineTo(e.clientX, e.clientY);
    }
      
    ctx.stroke();
    ctx.strokeStyle = color;
    ctx.beginPath();
    
    // ctx.moveTo(e.clientX, e.clientY);
    if (e.type == 'touchmove'){
      ctx.moveTo(e.touches[0].clientX, e.touches[0].clientY);
    } else if (e.type == 'mousemove'){
      ctx.moveTo(e.clientX, e.clientY);
    }
  }

  //event listeners
  canvas.addEventListener("touchstart", startPosition);
  canvas.addEventListener("touchend", endPosition);
  canvas.addEventListener("touchmove", draw);

  
  
});

