window.addEventListener('load', function () {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 1000);


  var prev = document.querySelector('.arrow-left');
  var next = document.querySelector('.arrow-right');
  var slides = document.querySelectorAll('.slide');
  var i = 0;
  prev.onclick = function(){
    slides[i].classList.remove('showed');
      i--;
      if(i < 0){
          i = slides.length - 1;
      }
      slides[i].classList.add('showed');
  };

  next.onclick = function(){
    slides[i].classList.remove('showed');
      i++;
      if(i > slides.length){
          i = 0;
      }
      slides[i].classList.add('showed');
  }
})