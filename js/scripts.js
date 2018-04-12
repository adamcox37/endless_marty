// STRINKING HEADER //
window.addEventListener( 'load', function() {
  var box = document.getElementById('header'),
      docHeight = document.documentElement.offsetHeight;
  
  window.addEventListener( 'scroll', function() {
    // normalize scroll position as percentage
    

    // 50 here is half the scroll distance you want the animation to take place in. In this case scroll 0 to 100 is the duration of this animation. 
    var scrolled = (50-window.scrollY) / ( 50);

    // Limit the change so it doesn't become too small
    if(scrolled<0.5) {
    	scrolled = 0.5;
    } else if (scrolled > 1) {
    // or too big
    	scrolled = 1;
    }

    // computing for new css values
    var transformValue = 'scale(1,'+scrolled+')',
        offsetValue = scrolled*-20,
        paddingValue = scrolled*20,
        fontSize = 24*scrolled,
        newHeight = 100*scrolled;

        //console.log('scrolled: '+scrolled);
        //console.log('window.scrollY: '+window.scrollY)     
	      box.style.top = offsetValue+'px';
	      box.style.fontSize = fontSize+'px';
	      box.style.lineHeight = newHeight+'px';
	      box.style.paddingTop = paddingValue+'px';

  }, false);
  
}, false);


// Infinty Scroll //
//Add Img to scroll
var container= document.getElementById('container');

for(var i=1; i<=100; i++) {
    var img= document.createElement('img');
    var src= 'img/marty.jpg';
    img.src= src;
    container.appendChild(img);
}

//Clone Img scroll
var cloneImg1= document.images[0].cloneNode(false);
var cloneImg2c1= document.images[1].cloneNode(false);
var cloneImg2c2= document.images[1].cloneNode(false);
var cloneImg3c1= document.images[2].cloneNode(false);
var cloneImg3c2= document.images[2].cloneNode(false);
var cloneImg4c1= document.images[3].cloneNode(false);
var cloneImg4c2= document.images[3].cloneNode(false);
var cloneImg5= document.images[4].cloneNode(false);

container.insertBefore(cloneImg5, document.images[0]);
container.insertBefore(cloneImg4c1, document.images[0]);
container.insertBefore(cloneImg3c1, document.images[0]);
container.insertBefore(cloneImg2c1, document.images[0]);
container.appendChild(cloneImg1);
container.appendChild(cloneImg2c2);
container.appendChild(cloneImg3c2);
container.appendChild(cloneImg4c2);

//Infinte scroll
var sliderStartForward= document.images[4].getBoundingClientRect(). bottom;
var sliderEndForward= document.images[8].getBoundingClientRect().top -10;
var sliderStartBackwards= document.images[4].getBoundingClientRect().top;

container.scrollBottom= sliderStartForward;

container.addEventListener('scroll', scrolling);

function scrolling() {
    if(container.scrollBottom < 1) {
        container.scrollBottom= sliderStartBackwards;
    }
}

if(container.scrollBottom > sliderEndForward) {
    container.scrollBottom = sliderStartForward;
}



















