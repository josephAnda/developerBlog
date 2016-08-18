

//  [  ]  Implement function to automatically add code for taskbar 
//  [!!]  Make sure feautures don't break if screen is resized.
//  	[!!]  Make menu mobile-friendly	(via bootstrap)
//      [  ]  Change the threshold scroll value for different viewport sizes (if necessary)
//  [!!]  Refactor with MVC paradigm  
//  [  ]  Add story and comment adding features
//  [  ]  Add date & name features for adding stories and comments 
//  [  ]  Create picture background
//  [  ]  Design banner
//  [!!]  Create functional menu items 
//		[!!]  Create fixed position menu 
//  [!!]  Make the layout colored and semi-finalized 
//  [!!]  Host different pages by either (1)  Changing HTML or (2) Actually changing page 
(function() {
	"use strict";

	var model = {
		//taskbar: $('#taskbar'), //  <--- Deprecated.  Because the html that creates this element is inserted dynamically,
		//  This reference fails to correctly describe the element in the scroll function that is called below
		phantom: $('#phantom'),  // <---This is to keep the non-taskbar content from re-flowing once the taskbar locks via position: fixed
		
		navbarHTML: "<div><h1 id='banner'>(BANNER GOES HERE)</h1></div> \
		<nav class='navbar navbar-default' role='navigation' id='taskbar'> \
  			<div class='navbar-header'> \
   				<button type='button' class='navbar-toggle' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1'> \
				    <span class='sr-only'>Toggle navigation</span> \
				    <span class='icon-bar'></span> \
				    <span class='icon-bar'></span> \
				    <span class='icon-bar'></span>  \
    			</button> \
    			<a class='navbar-brand' href='index.html'>Home</a> \
  			</div> \
		    <div class='collapse navbar-collapse' id='bs-example-navbar-collapse-1'> \
			    <ul class='nav navbar-nav'> \
				    <li class='active'><a href='http://josephanda.github.io/front-end_portfolio/'>Portfolio</a></li> \
				    <li><a href='about.html'>About</a></li> \
				    <li><a href='mailto:anda@alumni.stanford.edu'>Contact Me</a></li> \
				    <li class='dropdown'> \
				        <a href='#' class='dropdown-toggle' data-toggle='dropdown'>Archives <b class='caret'></b></a> \
				        <ul class='dropdown-menu'> \
				            <li><a href='archives.html'>Past Week</a></li> \
				            <li><a href='archives.html'>Past Month</a></li> \
				            <li role='separator' class='divider'></li> \
				            <li><a href='archives.html'>All Time</a></li> \
				        </ul> \
				    </li> \
			    </ul> \
		    	<form class='navbar-form navbar-left' role='search' id='search'> \
		        	<div class='form-group'> \
		        		<input type='text' class='form-control' placeholder='Search'> \
		      		</div> \
		      		<button type='submit' class='btn btn-default'>Submit</button> \
		    	</form> \
		  	 </div> \
		</nav>" 
	};

	var view = {	

		scrollLock: function(taskbar, phantomTaskbar) {
			$(window).scroll(function() {    

			    var scroll = $(window).scrollTop();
			    console.log(scroll);  // <--- Useful for debugging the scroll-dependent menu-fixing 
			    
			    if (scroll >= 99) {
			        taskbar.addClass("taskbar-scroll");  //  Fixes taskbar but removes it from the flow of the document
			        phantomTaskbar.css({position: "relative"});  //  Add phantom taskbar to the flow of the document
			    } else {
			        taskbar.removeClass("taskbar-scroll");
			        phantomTaskbar.css({position: "fixed", visibility: "hidden"});  
			    }
			})
		},
		addTaskbar: function(doc) {
			doc.prepend(model.navbarHTML); 
		}
	};

	var controller = {
		init: function() {
			view.addTaskbar($('body'));
			view.scrollLock($('#taskbar'), model.phantom);
		}
	};
	
	controller.init();
}) 	();

