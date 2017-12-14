const app = function(){
  const canvas = document.querySelector('canvas');
  const context = canvas.getContext('2d');

  let brushSize = 5;

  const colorPicker = document.querySelector('#colour-picker');
  const changeColour = function(){
    context.fillStyle = this.value;
    // console.log("this.value", this.value);
  }
  colorPicker.addEventListener('change', changeColour);

  const brushSizes = document.querySelector('#brush-size');
  for (let i=1; i<51; i++){
    const option = document.createElement('option');
    option.value = i;
    option.innerText = i;
    brushSizes.appendChild(option);
  }

  brushSizes.addEventListener('change', function(event) {
    brushSize = this.value;
  });

  canvas.addEventListener('click', function(){
    drawCircle(event.x, event.y, brushSize);
  });

  const drawCircle = function(x, y, radius){
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI, true);
    context.fill();
  }

}

document.addEventListener('DOMContentLoaded', app)
