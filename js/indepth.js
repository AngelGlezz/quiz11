
var ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
var ventana_ancho = $(window).width();
var disable=true;
var active_ace=false;
var input_text=false;
var input_text2=false;
var input_goles=false;
var input_radio=false;
var tenis_name="";
var respuestas_array = new Array();
var final_time = 0;
var aciertos = 0;


var maxTime = 30;
var time = maxTime;
var time_out=0;

$('#dial').knob({
  readOnly : true,
  thickness : 0.2,
  max : maxTime,
  width: 45,
  height: 45,
  inputColor: "#fff",
  fgColor: "#fff",
  bgColor: "rgb(48, 103, 165)",
  angleArc: "360",
  rotation: "anticlockwise",
  displayPrevious: true,
  fontWeight: 16,
  
});

var intervalo;

$("#indepth_contador_circle input").css("margin-top",0);

$("#indepth_boton_empezar").on("click",function(){
	$("#indepth_boton_empezar").click(false);
	 ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	 
	 var data = {
				  "preguntas": [
				    {
				      "pregunta": "¿Cuál fue el último resultado de México en Columbus?",
				      "respuestas": [
				        {
				          "respuesta": "1-0",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "3-1",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "1-2",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "2-0",
				          "tipo": "true"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Cuántas veces ganó el Tri en Columbus tras su inauguración en 2009 en eliminatorias?",
				      "respuestas": [
				        {
				          "respuesta": "Una",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Ninguna",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Dos",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Tres",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": " ¿Cuál es el resultado más recurrente en Columbus entre México y E.U.A.?",
				      "respuestas": [
				        {
				          "respuesta": "1-0",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "1-1",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "2-0",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "1-2",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Qué jugador norteamericano le ha metido más goles al Tri en Columbus?",
				      "respuestas": [
				        {
				          "respuesta": "Donovan",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Dempsey",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Jones",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Bradley",
				          "tipo": "true"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Cuántos goles le ha metido Dempsey a México en Columbus?",
				      "respuestas": [
				        {
				          "respuesta": "0",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "3",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "2",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "1",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Qué jugador del Tri anotó en Columbus?",
				      "respuestas": [
				        {
				          "respuesta": "Chicharito",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Cuauhtémoc",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Borgetti",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Ninguno",
				          "tipo": "true"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Cuántos goles ha anotado el Tri en Columbus?",
				      "respuestas": [
				        {
				          "respuesta": "2",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "1",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "0",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "3",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Cuál es el balance del Tri en Columbus en cuatro partidos de eliminatoria?",
				      "respuestas": [
				        {
				          "respuesta": "Cuatro derrotas",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Cuatro victorias",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Dos empates y dos derrotas",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Dos victorias y dos empates",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿En qué año fue el último donde México no perdió como visita en eliminatorias contra E.U.A.?",
				      "respuestas": [
				        {
				          "respuesta": "2001",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "2005",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "2009",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "1997",
				          "tipo": "true"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿En qué estadio estadounidense obtuvo México su último empate (1997)?",
				      "respuestas": [
				        {
				          "respuesta": "Rose Bowl",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Foxbrough",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Memorial Coliseum",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Memorial Stadium",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Quiénes anotaron los goles en el empate a dos goles en 1997?",
				      "respuestas": [
				        {
				          "respuesta": "Cuauhtémoc y Luis García",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Luis Hernández y Ramon Ramírez",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Hermosillo y Luis Hernández",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Peláez y Cuauhtémoc",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Cuándo fue la última vez que México le ganó a E.U.A. en las eliminatorias como visita?",
				      "respuestas": [
				        {
				          "respuesta": "1972",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "2001",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "1993",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "2005",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Cuál fue el marcador de ese partido?",
				      "respuestas": [
				        {
				          "respuesta": "0-1",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "1-2",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "0-2",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "1-3",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Quién fue el último seleccionado expulsado en Columbus?",
				      "respuestas": [
				        {
				          "respuesta": "Cuauhtémoc",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Raúl Rodrigo Lara",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Rafael Márquez",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Ignacio Ambriz",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "Último jugador nacionalizado que jugó en Columbus",
				      "respuestas": [
				        {
				          "respuesta": "Leandro",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Guille Franco",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Sinha",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Chaco Giménez",
				          "tipo": "true"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Qué portero mexicano ha sufrido más derrotas en Columbus?",
				      "respuestas": [
				        {
				          "respuesta": "Ochoa",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Corona",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Oswaldo Sánchez",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Jorge Campos",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Quién fue el último técnico de México en Columbus?",
				      "respuestas": [
				        {
				          "respuesta": "Chepo de la Torre",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Piojo Herrera",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Eriksson",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Luis Fernando Tena",
				          "tipo": "true"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Qué jugador anotó el último gol contra México?",
				      "respuestas": [
				        {
				          "respuesta": "Donovan",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Dempsey",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Johnson",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Jones",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Quién falló un penal en la última victoria de Estados Unidos allá?",
				      "respuestas": [
				        {
				          "respuesta": "Chicharito",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Dempsey",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Rafa Márquez",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Donovan",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Cuántos goles le faltan a Chicharito para empatar a Borgetti?",
				      "respuestas": [
				        {
				          "respuesta": "2",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "0",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "1",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "3",
				          "tipo": "false"
				        }
				      ]
				    }
				  ]
				};
		  preguntas=data.preguntas;
		 
		 $("#indepth_pregunta_cont").html("");
		 
		 $.each(preguntas, function( i, item ) {
			 
			var div=' <div class="indepth_pregunta_item"><div class="indepth_pregunta">'+(i+1)+'- '+item.pregunta+'</div><div class="indepth_pregunta_main"><div class="indepth_pregunta_img"><img src="'+urlIndepth+'images/preguntas/'+(i+1)+'.jpg" /></div><div class="indepth_respuestas_cont" num="'+i+'">';
				
			var div_items="";
			$.each(item.respuestas, function( j, items ) {
				div_items+='<div class="indepth_respuesta_item active" num="'+j+'">'+items.respuesta+'</div>';
			});						
										
			var div_fin='</div></div></div>';
			 
			 $("#indepth_pregunta_cont").append(div+div_items+div_fin);			 
		 });
		 
		 $("#indepth_page1").css({
			"top":ventana_alto-100,
			"visibility":"visible",
			"height": "auto"
		});
		
		$("#nav-bar-stats,#top-bar-wrapper,#body-wrapper").hide();
		
		$("#indepth_page1").show();
		
		$("#indepth_page1").animate({
			top: 0
		},2000, function(){
			$("#indepth_tiempo_cont").css("position","fixed");
			intervalo=setInterval(function() {
			  if(time<=0){
			  	clearInterval(intervalo);
			  	finish_test();
			 }	
			  time--;
			  $('#dial')
			        .val(time)
			        .trigger('change');
			}, 1000);
		});
		
		$(document).on("click",".indepth_respuesta_item",function(){
				
			var respuesta_cont = $(this).parent();
			var pregunta_num = respuesta_cont.attr("num");
			var respuesta_num = $(this).attr("num");
			var pregunta_obj = preguntas[pregunta_num];
			var respuesta_obj = pregunta_obj.respuestas[respuesta_num];
			
			tipo= (respuesta_obj.tipo === "true");
			
			if(tipo){
				$(this).addClass("bien");
				respuestas_array[pregunta_num]=true;
			}else{
				$(this).addClass("mal");
				respuestas_array[pregunta_num]=false;
			}
			
			respuesta_cont.find('.indepth_respuesta_item').removeClass("active").addClass("disable");
			respuesta_cont.find('.indepth_respuesta_item').click(false);
						
						
						
			if(preguntas.length == respuestas_array.length){
				final_time = time;
				respuestas_num=0;
				
					$.each(respuestas_array, function( i, item ) {
					  	if(item!=undefined)
					  		respuestas_num++;
				  	});
				  	
				 console.log("respuestas " + respuestas_num);
				 console.log(respuestas_num);
				
				if(respuestas_num == preguntas.length){
					clearInterval(intervalo);
					window.setTimeout(finish_test, 700);
				}
				
			}
			
		});
		
		
});


$('#dial')
        .val(99)
        .trigger('change');


function finish_test(){
	
	 ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();;
	var ventana_ancho = $(window).width();
	
	
	
	$("#indepth_resultados").css({
		"visibility": "visible",
		"position":"fixed",
		"top": 0,
		"left": -ventana_ancho
	});
  	
  	$("#indepth_resultados").animate({
	  	"left": 0
  	},2000, function(){
	  	$("html, body, #indepth_page1").css("overflow","hidden");
  	});

  	$.each(respuestas_array, function( i, item ) {
	  	if(item){
		  	aciertos++;
	  	}
  	});
  	
  	aficionado="";
  	msg="";

  	if(aciertos<=5){
	  	aficionado="";
	  	msg="jugaste como nunca y perdiste como nunca, ¡eres una vergüenza!";
  	}
  	
  	if(aciertos<=10 && aciertos >= 6){
	  	aficionado="";
	  	msg="seguro eres uno de esos que se alegra cuando pierde el Tri , pero bien que estás al pendiente";
  	}

  	if(aciertos>=11 && aciertos<=15){
	  	aficionado="";
	  	msg="eres un digno fan del Tri, ¡no bajes los brazos!";
  	}

  	if(aciertos>=16 && aciertos<=20){
	  	aficionado="";
	  	msg="la bendición de Chichadios está contigo, eres un verdadero fan.";
  	}
  	
  	$("#indepth_aciertos").html(aciertos);
  	$("#indepth_aciertos_text").html(msg);
  	$("#tipo_aficionado").html( aficionado );
  	
}



$('.indepth_num').keydown(function(event) {
	// Allow special chars + arrows 
	if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9  || event.keyCode == 27 || event.keyCode == 13 || (event.keyCode == 65 && event.ctrlKey === true)  || (event.keyCode >= 35 && event.keyCode <= 39)){
	        return;
	}else {
	    // If it's not a number stop the keypress
	    if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
	        event.preventDefault(); 
	    }   
	}

});

$('.idepth_marcador, .idepth_marcador2').keydown(function(event) {
	// Allow special chars + arrows 
	if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9  || event.keyCode == 27 || event.keyCode == 13 || (event.keyCode == 65 && event.ctrlKey === true)  || (event.keyCode >= 35 && event.keyCode <= 39)){
	        return;
	}else {
	    // If it's not a number stop the keypress
	    if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
	        event.preventDefault(); 
	    }   
	}
});


$('.indepth_num').keyup(function(event) {
	
	if(parseInt($(".indepth_num").val())>0){
		input_goles=true;
	}else{
		input_goles=false;
	}
	indepth_comprobar();

});


$('.idepth_marcador').keyup(function(event) {
	if($(this).val()!="" ){
		input_text=true;
	}else{
		input_text=false;
	}
	
	indepth_comprobar();
});

$('.idepth_marcador2').keyup(function(event) {
	if($(this).val()!="" ){
		input_text2=true;
	}else{
		input_text2=false;
	}
	
	indepth_comprobar();
});


var indepth_comprobar = function(){
	console.log(input_text + " - " + input_text2 + " - " + input_goles);
	
	if(input_text && input_text2 && input_goles){
		$(".indepth_boton").removeClass("disable");
		disable=false;
	}else{
		$(".indepth_boton").addClass("disable");
		disable=true;
	}
	
	console.log(disable);
}


var indepth_sizeAdjust = function(firstTime){
	$(".indepth_page").each(function(){
		if($(this).attr("resize") == "true"){
			var h = parseInt($(this).width(),10) / $(this).attr("width") * $(this).attr("height");
			$(this).css("height", h + "px");
		}else if(firstTime && $(this).attr("resize") == "false"){
			$(".indepth_background", $(this)).css("min-width", $(this).attr("width") + "px");
			$(this).css("height", $(this).attr("height") + "px");
		}
	})
}

var indepth_preloadImgs = function(){
	$("img[over]").each(function(){
		$(this).attr("out", $(this).attr("src"));
		$(this).on("mouseenter", function(){
			$(this).attr("src", $(this).attr("over"));
		}).on("mouseleave", function(){
			$(this).attr("src", $(this).attr("out"));
		}).css("cursor", "pointer");

		var tmp = $("<img/>");
		tmp.attr("src", $(this).attr("over"));
		tmp.css({"position":"absolute", "top":"-9999px", "left":"-9999px"})
		tmp.appendTo("body");
	});
}

   
 function loadDisqus(source, identifier, url) {
if (window.DISQUS) {
   jQuery('#disqus_thread').insertAfter(source);
   /** if Disqus exists, call it's reset method with new parameters **/

    DISQUS.reset({
  reload: true,
  config: function () { 
   this.page.identifier = identifier.toString();    //important to convert it to string
   this.page.url = url;
  }
 });
} else {
//insert a wrapper in HTML after the relevant "show comments" link
	source.append('<div id="disqus_thread"></div>');
   //jQuery('<div id="disqus_thread"></div>').insertAfter(source);
   disqus_identifier = identifier; //set the identifier argument
   disqus_url = url; //set the permalink argument
   disqus_per_page=3;
   //append the Disqus embed script to HTML
   var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
   dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
   jQuery('head').append(dsq);
}
};


$(document).ready(function(){
	indepth_sizeAdjust(true);
	indepth_preloadImgs();
	ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	ventana_ancho = $(window).width();
	
	$("#indepth_cover").css({
		"width": (ventana_ancho)+"px",
		"height": (ventana_alto-100)+"px"	
	})
		
	$("#indepth_resultados").css({
		"width":ventana_ancho+"px",
		"height":ventana_alto+"px"
	});

$("#indepth_twittear").click(function(){

	if(!disable){

		
		var text = encodeURIComponent("Mi predicción es: E.U.A. "+$("input[name=goleador]").val()+"-"+$("input[name=goleador2]").val())+ " México primer gol al minuto "+$("input[name=goles_anotados]").val()+" @juanfutbol";
		var url = encodeURIComponent("http://juanfutbol.com/indepth/pizzafut-doscero");
		window.open("https://twitter.com/share?text="+text+"&hashtags=pizzafut&url="+url,"","width=500, height=300");

	} else {
		
		
		
	}
	
	});
});
	
	$(document).on("click", "#indepth_button_ver" ,function(){
		$.fn.fullpage.moveSectionDown();
	});

$(window).on("resize", function(){

	ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	ventana_ancho = $(window).width();

	$("#indepth_cover").css({
		"width": (ventana_ancho)+"px",
		"height": (ventana_alto-100)+"px"	
	})
		
	    $("#indepth_resultados").css({
			"width":ventana_ancho+"px",
			"height":ventana_alto+"px"
		});
});


