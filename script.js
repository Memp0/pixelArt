let pixels = document.querySelectorAll('.pixel');
let colors = document.querySelector('.colors');
let eraser = document.querySelector('.eraser-checkbox');
let clear = document.querySelector('.clear');

for(let pixel of pixels) {
   pixel.onclick = function() {
      if(eraser.checked) {
         pixel.style.backgroundColor = 'white';
      } else {
      pixel.style.backgroundColor = colors.value;
      }
   };
}

clear.onclick = function() {
   for(let pixel of pixels) {
      pixel.style.backgroundColor = 'white';
   }
};