$(document).ready(function() {

var attrStr;
var reAttr;
var resultReg;

$("a").click(function(e) {
	
		if ( $(this).attr("id")) {

		attrStr = $(this).attr("id");

		reAttr = /modal/g;

	    while ((resultReg = reAttr.exec(attrStr)) != null) {

	    	if(resultReg[0] == "modal") {	    		

	    		e.preventDefault();

	    		$(".formmodal").fadeIn(300);

				$(".formmodal .modal-data").css({"top": ( $(window).height() - $(".formmodal .modal-data").height() ) / 2  + "px"});

				console.log(resultReg[0]);

	    		break;
	    	}

	    }

	}

});


	$(".modal-bg, .closemodal-btn").click(function() {

		$(".formmodal").fadeOut(300);

	});


});