
(function ($) {
    "use strict";

    /*================ Background Image Maker ======================*/

    $('.background-image-maker').each(function () {
        var imgURL = $(this).next('.holder-image').find('img').attr('src');
        $(this).css('background-image', 'url(' + imgURL + ')');
    });

/*==============================================================
     Tab Next Previous 
     ============================================================= */
    $('.tab-next').on('click', function () {        
     
        var $tab= $(this).attr('data-tab');
        $('.'+$tab).click();
        return false;

    });
    /*==============================================================
     Sidechat 
     ============================================================= */
    $('.setting').on('click', function () {
        $('#sidechat').toggleClass('active');

    });
    /*==============================================================
     Sidebar 
     ============================================================= */

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $('#content').toggleClass('active');
    });
    $('#menu').metisMenu().show();

    /*==============================================================
     Back To Top
     =============================================================*/


    $('.scrollup').on('click', function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
/*==============================================================
 Slimscroll Chat
 =============================================================*/
		$('.scrollbarcheck').slimScroll({
            height: '100px'
        });
		
        $('.scrollerchat').slimScroll({
            height: '456px'
        });

 
        $('.sidebar-scrollarea').slimScroll({
            height: '100vh'
        });
   
    $('#mysideTabContent').slimScroll({
        height: '100vh'
    });
	
	$(function(){
	// tooltip
    $('[data-toggle="tooltip"]').tooltip();
    $('[rel=tooltip]').tooltip({ trigger: "hover" });
	});

    $(window).on("scroll", function () {
        /*==============================================================
         Back To Top
         =============================================================*/
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }

        /*==============================================================
         Header Fixed Scroll
         =============================================================*/
        if ($(window).scrollTop() > 0) {
            $("#header-fix").addClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
            $("#header-fix").removeClass("active");
        }
    });

})(jQuery);







