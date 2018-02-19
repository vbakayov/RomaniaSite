// Global Javascript Initialization
var Global = function() {
  'use strict';
    //select the buttons
    var buttons = {};
    buttons[0] = document.getElementById( 'pokrivki' );
    buttons[1]= document.getElementById( 'vulneniDebeliTsvetni' );
    buttons[2] = document.getElementById('pokrivki_chervena');
    buttons[3] = document.getElementById('debeli_estestveni');
    buttons[4] = document.getElementById('pokrivki_transilvanska');
    buttons[5] = document.getElementById('pokrivki_bqla');
    buttons[6] = document.getElementById('pokrivki_zelena');
    buttons[7] = document.getElementById('pokrivki_oranjeva');
    buttons[8] = document.getElementById('pokrivki_ekru');
    buttons[9] = document.getElementById('pokrivki_sinia');
    buttons[10] = document.getElementById('pokrivki_karirana');
    buttons[11] = document.getElementById('pokrivki_all');
    buttons[12] = document.getElementById('pamuk_kare');
    buttons[13] = document.getElementById('pamuk_jakard');
    buttons[14] = document.getElementById('olekoteni');
    buttons[15] = document.getElementById('agneshki');
    buttons[16] = document.getElementById('vuzglavnici');
    buttons[17] = document.getElementById('torbichki');
    buttons[18] = document.getElementById('all');
    buttons[19] = document.getElementById('service'); //drugi

    var text_container = document.getElementById('productText');
    var dunavski = ['pokrivki_bqla', 'pokrivki_zelena', 'pokrivki_oranjeva', 'pokrivki_ekru', 'pokrivki_sinia', 'pokrivki_chervena'];


    //add event listeners
    for (var k = 0; k < Object.keys(buttons).length; k++) {
        (function(){
            console.log(buttons[k]);
            buttons[k].addEventListener('click', click, false);
        })();
    }

    //handle click
    function click(event)
    {
      load_text(this.id);
    }



    //change text
    function load_text(elementId){
        console.log("clicked");

        if (elementId === "pokrivki_all")
        {
            text_container.innerText = "Fețele de masă cu motive populare sunt împodobite cu motive populare tradiționale românești și balcanice. Am elaborat două modele de fețe de masă tradiționale – modelul Dunărean și cel Transilvănean. Motivele decorative ale modelului dunărean sunt caracteristice pentru România de sud - Valahia (Muntenia și Oltenia). \n \n" +
                "Modelul transilvănean este  inspirat de motivele tradiționale din Transilvania. Fețele de masă sunt bine acceptate atât de străinii care vizitează țară, încât și de românii. Clienții principali ai companiei noastre sunt comercianții orientați către comerțul cu suvenire și restaurantele tradiționale. \n"

        }
        else if(elementId === "pokrivki_transilvanska"){
            text_container.innerText = "Ștergarul transilvănean este inspirat de motivele tradiționale din Transilvania."

        }
        else if (dunavski.indexOf(elementId)> -1){
            text_container.innerText = "Motivele decorative ale modelului dunărean sunt caracteristice pentru România de sud - Valahia ( Muntenia și Oltenia). ";
        }
        else if (elementId === "pokrivki_karirana"){
            text_container.innerText = "Careul este un motiv care poate fi găsit în toate desenurilor populare încă din timpurile vechi.";
        }
        else if (elementId === "vulneniDebeli")
        {
            text_container.innerText = "vulneniDebeliTekst";
            console.log("vulneni debeli clicked clicked");

        }
        else if(elementId === "all"){
            // jQuery('#all').addClass('cbp-filter-item-active');
        }


    }

  // Bootstra Components
  var handleBootstrapComponents = function() {
    // Bootstrap Carousel
    $('.carousel').carousel({
      interval: 5000,
      pause: 'hover'
    });

    // Tooltips
    $('.tooltips').tooltip();
    $('.tooltips-show').tooltip('show');
    $('.tooltips-hide').tooltip('hide');
    $('.tooltips-toggle').tooltip('toggle');
    $('.tooltips-destroy').tooltip('destroy');

    // Popovers
    $('.popovers').popover();
    $('.popovers-show').popover('show');
    $('.popovers-hide').popover('hide');
    $('.popovers-toggle').popover('toggle');
    $('.popovers-destroy').popover('destroy');
  }

  // Scroll To Section
  var handleScrollToSection = function() {
    $(function() {
      $('a[href*=#js__scroll-to-]:not([href=#js__scroll-to-])').on('click', function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 90
            }, 1000);
            return false;
          }
        }
      });
    });
  }

  // Handle Promo Section
  var handlePromoSection = function() {
    $('.js__fullwidth-img').each(function() {
      $(this).css('background-image', 'url(' + $(this).children('img').attr('src') + ')');
      $(this).children('img').hide();
    });
  }

  // Handle Overlay
  var handleOverlay = function() {
    var overlay = $('.js__bg-overlay'),
      headerOverlay = $('.js__header-overlay'),
      trigger = $('.js__trigger');

    trigger.on('click', function() {
      overlay.toggleClass('-is-open');
      headerOverlay.toggleClass('-is-open');
      trigger.toggleClass('-is-active');
    });
  }

  // Vertical Center Aligned
  // Note! This works only with promo block and background image via CSS.
  var handleVerticalCenterAligned = function() {
    $('.js__ver-center-aligned').each(function() {
      $(this).css('padding-top', $(this).parent().height() / 2 - $(this).height() / 2);
    });
    $(window).resize(function() {
      $('.js__ver-center-aligned').each(function() {
        $(this).css('padding-top', $(this).parent().height() / 2 - $(this).height() / 2);
      });
    });
  }

  // handle group element heights
  var handleEqualHeight = function() {
   $('[data-auto-height]').each(function() {
      var parent = $(this);
      var items = $('[data-height]', parent);
      var height = 0;
      var mode = parent.attr('data-mode');
      var offset = parseInt(parent.attr('data-offset') ? parent.attr('data-offset') : 0);

      items.each(function() {
        if ($(this).attr('data-height') == "height") {
          $(this).css('height', '');
        } else {
          $(this).css('min-height', '');
        }

        var height_ = (mode == 'base-height' ? $(this).outerHeight() : $(this).outerHeight(true));
        if (height_ > height) {
          height = height_;
        }
      });

      height = height + offset;

      items.each(function() {
        if ($(this).attr('data-height') == "height") {
          $(this).css('height', height);
        } else {
          $(this).css('min-height', height);
        }
      });

      if(parent.attr('data-related')) {
        $(parent.attr('data-related')).css('height', parent.height());
      }
   });
  }

  return {
    init: function() {
      handleBootstrapComponents(); // initial setup for Bootstrap Components
      handleScrollToSection(); // initial setup for Scroll To Section
      handlePromoSection(); // initial setup for Promo Section
      handleOverlay(); // initial setup for Overlay
      handleVerticalCenterAligned(); // initial setup for Vertical Center Aligned
      handleEqualHeight(); // initial setup for Equal Height
    }
  }
}();

$(document).ready(function() {
  Global.init();
});
