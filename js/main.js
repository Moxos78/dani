(function($) {

	"use strict";

	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   $.Scrollax();


   var burgerMenu = function() {

		$('.js-colorlib-nav-toggle').on('click', function(event){
			event.preventDefault();
			var $this = $(this);

			if ($('body').hasClass('offcanvas')) {
				$this.removeClass('active');
				$('body').removeClass('offcanvas');	
			} else {
				$this.addClass('active');
				$('body').addClass('offcanvas');	
			}
		});
	};
	burgerMenu();

	// Click outside of offcanvass
	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#colorlib-aside, .js-colorlib-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-colorlib-nav-toggle').removeClass('active');
			
	    	}
	    	
	    }
		});

		$(window).scroll(function(){
			if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-colorlib-nav-toggle').removeClass('active');
			
	    	}
		});

	};
	mobileMenuOutsideClick();

	var carousel = function() {
		$('.home-slider').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:false,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:1
	      },
	      1000:{
	        items:1
	      }
	    }
		});

		$('.author-slider').owlCarousel({
			autoplay: true,
			loop: true,
			items:1,
			margin: 30,
			stagePadding: 0,
			nav: true,
			dots: true,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 1
				},
				1000:{
					items: 1
				}
			}
		});

	};
	carousel();

	

	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();

	var counter = function() {
		
		$('#section-counter').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();


	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    // mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });




})(jQuery);


var datos = [
    {
        "code": "CJDS",
        "dato": "Estimados",
        "Nombre": "Cristian Jauregui Donaire y Sra."
    },
    {
        "code": "JVYG",
        "dato": "Estimados",
        "Nombre": "Jorge Vargas y Yolanda Guerrero"
    },
    {
        "code": "AVS",
        "dato": "Estimados",
        "Nombre": "Alan Vismark y Sra"
    },
    {
        "code": "OTRA",
        "dato": "Estimados",
        "Nombre": "Osmar Tito Romero y Acompañante "
    },
    {
        "code": "ETTNC",
        "dato": "Queridos",
        "Nombre": "Erlan Tapia Tejerina y Natali Cardozo"
    },
    {
        "code": "CCJO",
        "dato": "Estimados",
        "Nombre": "Constancio Condori y Justina Ordoñez "
    },
    {
        "code": "HCOS",
        "dato": "Estimados",
        "Nombre": "Huascar Condori Ordoñez y Sra."
    },
    {
        "code": "APPC",
        "dato": "Estimados",
        "Nombre": "Armando Paredes y Paola Condori"
    },
    {
        "code": "FMMC",
        "dato": "Estimados",
        "Nombre": "Freddy Meneses y Mayda Condori"
    },
    {
        "code": "ERMNC",
        "dato": "Estimados",
        "Nombre": "Efrain Rafael Mamani y Nohelia Condori"
    },
    {
        "code": "NFA",
        "dato": "Estimados",
        "Nombre": "Norah Fernandez y Acompañante"
    },
    {
        "code": "RDIM",
        "dato": "Estimados",
        "Nombre": "Rodolfo Dávila y Isabel Menacho"
    },
    {
        "code": "MDMF",
        "dato": "Estimados",
        "Nombre": "Mauricio Dávila y Marlene Figueroa"
    },
    {
        "code": "AT",
        "dato": "Adorada Madre",
        "Nombre": "Anyhelina Tejerina"
    },
    {
        "code": "MAA",
        "dato": "Estimada",
        "Nombre": "Maria de los Angeles Aparicio"
    },
    {
        "code": "AS",
        "dato": "Estimado",
        "Nombre": "Alejandro Sandoval"
    },
    {
        "code": "JL",
        "dato": "Estimado",
        "Nombre": "Jhonny López"
    },
    {
        "code": "MN",
        "dato": "Estimado",
        "Nombre": "Marcos Narvaez"
    },
    {
        "code": "RS",
        "dato": "Estimado",
        "Nombre": "Raquel Solano"
    },
    {
        "code": "NOA",
        "dato": "Estimados",
        "Nombre": "Noemi Ortega y Acompañante"
    },
    {
        "code": "LSCMEU",
        "dato": "Estimados",
        "Nombre": "Luis Sanchez Cari y Marcela Egüez"
    },
    {
        "code": "WOAS",
        "dato": "Estimados",
        "Nombre": "William Ortega y Alejandra Sánchez"
    },
    {
        "code": "NDA",
        "dato": "Estimados",
        "Nombre": "Norma Dávila y Acompañante"
    },
    {
        "code": "CD",
        "dato": "Estimada",
        "Nombre": "Cristina Donaire"
    },
    {
        "code": "ES",
        "dato": "Estimada",
        "Nombre": "Elena Sánchez"
    },
    {
        "code": "LEC",
        "dato": "Querido",
        "Nombre": "Luis Ernesto Coro"
    },
    {
        "code": "DMA",
        "dato": "Estimado",
        "Nombre": "Diego Mamani Aguilar "
    },
    {
        "code": "RSA",
        "dato": "Estimados",
        "Nombre": "Rafael Sandoval y Acompañante "
    },
    {
        "code": "JFT",
        "dato": "Estimados",
        "Nombre": "Joaquin fernández y Flora Terrazas"
    },
    {
        "code": "METD",
        "dato": "Estimados",
        "Nombre": "Marcelo Egüez y Teresa Dávila"
    },
    {
        "code": "MMS",
        "dato": "Estimados",
        "Nombre": "Marcos Montellanos y Sra."
    },
    {
        "code": "EM",
        "dato": "Estimada",
        "Nombre": "Edith Martinez"
    },
    {
        "code": "BQA",
        "dato": "Estimados",
        "Nombre": "Bernabé Quiñones y Acompañante"
    },
    {
        "code": "LE",
        "dato": "Estimada",
        "Nombre": "Lourdes Estefano"
    },
    {
        "code": "SZ",
        "dato": "Estimada",
        "Nombre": "Sra. Zaida"
    },
    {
        "code": "ATP",
        "dato": "Querido Padre",
        "Nombre": "Armando Tapia Pimentel"
    },
    {
        "code": "GGLO",
        "dato": "Estimados",
        "Nombre": "Guzmán Gonzales y Lucía Ortega"
    },
    {
        "code": "LFWMF",
        "dato": "Estimados",
        "Nombre": "Luis Fernando Wayar y Maira Flores"
    },
    {
        "code": "GS",
        "dato": "Estimados",
        "Nombre": "Gonzalo y Sra."
    }
];

// Función para obtener el valor del parámetro 'code' de la URL
function obtenerCodigoDeURL() {
	var urlParams = new URLSearchParams(window.location.search);
	return urlParams.get('code');
}

// Función para buscar el código en los datos
function buscarDatosPorCodigo(codigo) {
	return datos.find(dato => dato.code === codigo);
}

// Función para actualizar el contenido de la etiqueta <h3>
function actualizarNombreEnH3() {
	var codigoEnURL = obtenerCodigoDeURL();

	if (codigoEnURL) {
		var datoEncontrado = buscarDatosPorCodigo(codigoEnURL);

		if (datoEncontrado) {
			// Actualizar el contenido de la etiqueta <h3> con el nombre encontrado
			document.getElementById('nombre').textContent = datoEncontrado.Nombre;
			document.getElementById('adjetivo').textContent = datoEncontrado.dato;
			
		} else {
			console.error("No se encontraron datos para el código proporcionado en la URL.");
		}
	} else {
		console.error("No se proporcionó un código en la URL.");
	}
}

actualizarNombreEnH3();