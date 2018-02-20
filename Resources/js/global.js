// Global Javascript Initialization
var Global = function() {
  'use strict';

    var buttons = {};

    var text_container = document.getElementById('productText');

    var ids =['vulneniDebeliTsvetni','pokrivki_chervena','debeli_estestveni','pokrivki_transilvanska','pokrivki_bqla',
        'pokrivki_zelena','pokrivki_oranjeva','pokrivki_ekru','pokrivki_sinia','pokrivki_karirana','pokrivki_all','pamuk_kare','pamuk_jakard',
        'olekoteni','agneshki','vuzglavnici','torbichki','all'];

    var pokrivki_only = ['pokrivki','pokrivki_transilvanska','pokrivki_karirana','pokrivki_all', 'pokrivki_bqla', 'pokrivki_zelena', 'pokrivki_oranjeva', 'pokrivki_ekru', 'pokrivki_sinia', 'pokrivki_chervena'];

    // Add active class to the current button (highlight it)
    var products = document.getElementsByClassName("filter_active");

    //select the buttons
    for (var z = 0; z < ids.length; z++) {
            buttons[z]= document.getElementById(ids[z]);

    }

    //add event listeners
    for (var k = 0; k < Object.keys(buttons).length; k++) {
        (function(){
            buttons[k].addEventListener('click', click, false);
        })();
    }

    //handle click
    function click(event)
    {

        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      load_text(this.id);
    }



    //change text
    function load_text(elementId){
        console.log("clicked");

        if (pokrivki_only.indexOf(elementId)> -1)
        {
            text_container.innerText = "Fețele de masă cu motive populare sunt împodobite cu motive populare tradiționale românești și balcanice. Am elaborat două modele de fețe de masă tradiționale – modelul Dunărean și cel Transilvănean. Motivele decorative ale modelului dunărean sunt caracteristice pentru România de sud - Valahia (Muntenia și Oltenia). \n \n" +
                "Modelul transilvănean este  inspirat de motivele tradiționale din Transilvania. Fețele de masă sunt bine acceptate atât de străinii care vizitează țară, încât și de românii. Clienții principali ai companiei noastre sunt comercianții orientați către comerțul cu suvenire și restaurantele tradiționale. \n";
        }
        else if (elementId === "debeli_estestveni")
        {
            text_container.innerText = "Societatea Blaiv oferă o mare varietate de pături: din bumbac, din lână, pături ușoare și altele. Materiile păturilor provin mai ales din produse ecologice – bumbac și lână, Din acest motiv, păturile noastre sunt comercializate oriunde în lume. Compania noastră comercializează păturile în România cu succes. Clienții noștri sunt mai ales din domeniul textilelor de casă, suvenirelor și designul interior. \n \n" +
                "Fabricate doar cu culori naturale, din lână albă și neagră, fără coloranți și materiale artificiali și chimice. Păturile se încadrează în categoria „Pături groase”. Au fost spălate în apă curată de munte, ceea ce garantează durabilitatea, rezistența și dimensiunile lor. 100 % lână.   \n";
        }
        else if (elementId === "vulneniDebeliTsvetni")
        {
            text_container.innerText = "Societatea Blaiv oferă o mare varietate de pături: din bumbac, din lână, pături ușoare și altele. Materiile păturilor provin mai ales din produse ecologice – bumbac și lână, Din acest motiv, păturile noastre sunt comercializate oriunde în lume. Compania noastră comercializează păturile în România cu succes. Clienții noștri sunt mai ales din domeniul textilelor de casă, suvenirelor și designul interior. \n \n" +
                                    "Potrivite pentru lunile de iarnă reci. Produse din lână de înaltă calitate. Păturile se încadrează în categoria „Pături groase”. Au fost spălate în apă curată de munte, ceea ce garantează durabilitatea, rezistența și dimensiunile lor. 100 % lână.  \n";
        }
        else if (elementId === "pamuk_kare")
        {
            text_container.innerText = "Numeroase culori proaspete și variate care poartă simțul verii. Sunt fabricate din bumbac de înaltă calitate. Bumbacul este albit și vopsit printr-o tehnologie inofensivă pentru a garanta calitatea și proprietățile bune ale păturilor. \n";
        }
        else if (elementId === "pamuk_jakard")
        {
            text_container.innerText = "Pături din bumbac jaquard – 100 % bumbac. Culori de vară proaspete și variate. Greutatea lor aproximativă este 2 kg, ceea ce le face potrivite atât pentru vremea caldă, încât și pentru vremea rece. Păturile au două fețe – combinația culorilor de pe fiecare față este diferită. ";
        }
        else if (elementId === "olekoteni")
        {
            text_container.innerText = "Datorită greutății și compoziției sale, păturile sunt potrivite atât pentru lunile de vară, încât și pentru iernile reci. Păturile au greutate aproximativă de 1,3-2,00 kg. Le fabricăm în variantele 100 % lână și 60 % lână, 40% poliester. ";
        }
        else if (elementId === "agneshki")
        {
            text_container.innerText = "Virgin wool  este lâna obținută din prima rasa a mielului. Aceasta este lâna cea mai moale, cea mai fină și cu cea mai înaltă calitate. Conținut 70 % lână de miel, 30 % poliester. ";
        }
        else if (elementId === "vuzglavnici")
        {
            text_container.innerText = "vuzglavniciTekst ?????????????????";
        }
        else if (elementId === "torbichki")
        {
            text_container.innerText = "torbichki ??????????????????????";
        }
        else if (elementId === "all")
        {
            text_container.innerText = "all text ???????????????????????";
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
