
//  [  ]  Make sure feautures don't break if screen is resized.
//  	[  ]  Make menu mobile-friendly	(via bootstrap)
//  [  ]  Refactor with MVC paradigm  
//  [  ]  Add story and comment adding features
//  [  ]  Add date & name features for adding stories and comments 
//  [  ]  Create picture background
//  [  ]  Design banner
//  [  ]  Create functional menu items 
//		[!!]  Create fixed position menu 
//  [!!]  Make the layout colored and semi-finalized 
//  [  ]  Host different pages by either (1)  Changing HTML or (2) Actually changing page 

var taskbar = $('#taskbar');
var phantom = $('#phantom');

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    //console.log(scroll);  // <--- Useful for debugging the scroll-dependent menu-fixing 
    if (scroll >= 99) {
        taskbar.addClass("taskbar-scroll");
        phantom.css({position: "relative"});
    } else {
        taskbar.removeClass("taskbar-scroll");
        phantom.css({position: "fixed", visibility: "hidden"});  
    }
});