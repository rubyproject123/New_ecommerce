;(function($, window, undefined) {
    // outside the scope of the jQuery plugin to
    // keep track of all dropdowns
    var $allDropdowns = $();

    // if instantlyCloseOthers is true, then it will instantly
    // shut other nav items when a new one is hovered over
    $.fn.dropdownHover = function(options) {

        // the element we really care about
        // is the dropdown-toggle's parent
        $allDropdowns = $allDropdowns.add(this.parent());

        return this.each(function() {
            var $this = $(this),
                $parent = $this.parent(),
                defaults = {
                    delay: 100,
                    instantlyCloseOthers: true
                },
                data = {
                    delay: $(this).data('delay'),
                    instantlyCloseOthers: $(this).data('close-others')
                },
                settings = $.extend(true, {}, defaults, options, data),
                timeout;

            $parent.hover(function(event) {
                // so a neighbor can't open the dropdown
                if(!$parent.hasClass('open') && !$this.is(event.target)) {
                    return true;
                }

                if(settings.instantlyCloseOthers === true)
                    $allDropdowns.removeClass('open');

                window.clearTimeout(timeout);
                $parent.addClass('open');
            }, function() {
                timeout = window.setTimeout(function() {
                    $parent.removeClass('open');
                }, settings.delay);
            });

            // this helps with button groups!
            $this.hover(function() {
                if(settings.instantlyCloseOthers === true)
                    $allDropdowns.removeClass('open');

                window.clearTimeout(timeout);
                $parent.addClass('open');
            });

            // handle submenus
            $parent.find('.dropdown-submenu').each(function(){
                var $this = $(this);
                var subTimeout;
                $this.hover(function() {
                    window.clearTimeout(subTimeout);
                    $this.children('.dropdown-menu').show();
                    // always close submenu siblings instantly
                    $this.siblings().children('.dropdown-menu').hide();
                }, function() {
                    var $submenu = $this.children('.dropdown-menu');
                    subTimeout = window.setTimeout(function() {
                        $submenu.hide();
                    }, settings.delay);
                });
            });
        });
    };

	//added by Dipak---------------------//
	
    $(document).ready(function() {
		
		var scroll_top = $(this).scrollTop();
               if (scroll_top > 16) {//height of header
                 $('.navbar').addClass('sticky');
              } else {
              $('.navbar').removeClass('sticky');
              };
			  
        $('[data-hover="dropdown"]').dropdownHover();
		
		
		
		$('.popover-toggle').popover('show');	

		
		
		
		
		
		
		
    });
		
	//------------------------added by Dipak//
	
		//added by Priyanka----------
		$(document).ready(function() {
				$('#list').click(function(event){event.preventDefault();$('#products .item').addClass('list-group-item');});
				$('#grid').click(function(event){event.preventDefault();$('#products .item').removeClass('list-group-item');$('#products .item').addClass('grid-group-item');});				
				
				$('.btn').button()
		});
		//added by Priyanka ends----------
	
	 $(window).load(function() {
		$('.banner-slideshow').flexslider({
			controlNav: false,
			touch: false
		});
		
		
		var init3ProductSlider = $('.3-product-slider').flexslider({
									animation: "slide",
									animationLoop: false,
									itemWidth:240,
									maxItems: 3,
									minItems: 3,
									touch: false
						
								});
		
		
		var init4ProductSlider =  $('.4-product-slider').flexslider({
									animation: "slide",
									animationLoop: false,
									itemWidth:200,
									maxItems: 4,
									minItems: 4,
									touch: false
						
								});

		var initSingleProductSlider = $('.single-product-slider').flexslider({
										animation: "slide",
										animationLoop: false,
										maxItems: 1,
										minItems: 1,
										controlNav: false,
										touch: false
							
									});
		
		$('.thumbnail-slider').flexslider({
				animation: "fade",
				animationLoop: true,
				controlNav: false,
				touch: false,
				slideshow:false,
				sync: ".thumbnail-slider-thumbs"
			});
			
			$('.thumbnail-slider-thumbs').flexslider({
				animation: "slide",
				animationLoop: true,
				controlNav: false,
				itemWidth:120,
				slideshow:false,
				touch: false,
				asNavFor: '.thumbnail-slider'
			});
		
		
		
		$('.nav-tabs a').each(function() {
			var $this = $(this);
			$this.click(function (e) {
				e.preventDefault();
				$this.tab('show');
				setTimeout(function(){
					
				//$($this.attr('href')).find('.flexslider').data('flexslider').resize();
				//$('.flexslider').data('flexslider').resize();
				init3ProductSlider.resize();
				
				}, 500);
				
				
			});
		});

		
	  });
	  
	  
})(jQuery, this);