'use strict';

window.onload = function() {
  var banners  = document.querySelector('.info-two__banners');
  
  if (banners) {
    var step = 206;
    var leftArrow  = document.querySelector('.info-two__arrow-left');
    var rightArrow  = document.querySelector('.info-two__arrow-right');

    if (leftArrow) {
      leftArrow.addEventListener('click', function() {
       // Implement galery logic
      });
    }
  
    if (rightArrow) {
      rightArrow.addEventListener('click', function() {
        // Implement galery logic
     });
    }  
  }
};
