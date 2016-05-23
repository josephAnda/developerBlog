//  [  ]  Add story and comment adding features
//  [  ]  Add date & name features for adding stories and comments 
//  [  ]  Create picture background
//  [  ]  Design banner
//  [  ]  Create functional menu items 
//		[!!]  Create fixed position menu 
//  [!!]  Make the layout colored and semi-finalized 

var taskbar = $('#taskbar');
var phantom = $('#phantom');

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    console.log(scroll);

    if (scroll >= 71) {
        taskbar.addClass("taskbar-scroll");
        phantom.visibility = 'visible';
        phantom.css({position: "relative"});
    } else {
        taskbar.removeClass("taskbar-scroll");
        phantom.visibility = 'hidden'; 
        phantom.css({position: "fixed"});  
    }
});