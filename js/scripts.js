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
        newHeight = 150*scrolled;

        //console.log('scrolled: '+scrolled);
        //console.log('window.scrollY: '+window.scrollY)     
	      box.style.top = offsetValue+'px';
	      box.style.fontSize = fontSize+'px';
	      box.style.lineHeight = newHeight+'px';
	      box.style.paddingTop = paddingValue+'px';

  }, false);
  
}, false);


// Infinty Scroll //