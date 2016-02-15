$(document).ready(function() {

var attrStr;
var reAttr;
var resultReg;

$("a").click(function(e) {
	
		if ( $(this).attr("href")) {

		attrStr = String($(this).attr("href"));

		reAttr = /#modal/g;

	    while ((resultReg = reAttr.exec(attrStr)) != null) {

	    	if(resultReg[0] == "#modal") {	    		

	    		e.preventDefault();

	    		$("#" + attrStr.substr(1)).fadeIn(300);

				$("#" + attrStr.substr(1) + " .modal-data").css({"top": ( $(window).height() - $(".formmodal .modal-data").height() ) / 2  + "px"});

	    		break;

	    	}

	    }

	}

});



	$(".modal-bg, .closemodal-btn").click(function() {

		$(".formmodal").fadeOut(300);

	});


});