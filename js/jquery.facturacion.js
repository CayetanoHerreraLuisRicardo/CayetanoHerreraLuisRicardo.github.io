jQuery(document).ready(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	// Comment or uncomment the result you want.
	// Currently, shake on error is enabled.
	// When a field is left blank, jQuery will shake the form

	/* Begin config */

	//	var shake = "Yes";
		var shake = "No";

	/* End config */


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////// Do not touch below /////////////////////////////////////////

	$('#message').hide();

	// Add validation parts
	$('#facturacion input[type=text], #facturacion input[type=email], #facturacion select, #facturacion textarea').each(function(){
		$(this).after('<mark class="validate"></mark>');
	});

	// Validate as you type

	$('#email').focusout(function() {
		if (!$(this).val() || !isEmail($(this).val()))
			$(this).addClass('error').parent().find('mark').removeClass('valid').addClass('error');
		else
			$(this).removeClass('error').parent().find('mark').removeClass('error').addClass('valid');
	});
	
	$('#name').focusout(function() {
		if (!$(this).val())
			$(this).addClass('error').parent().find('mark').removeClass('valid').addClass('error');
		else
			$(this).removeClass('error').parent().find('mark').removeClass('error').addClass('valid');
	});
	
	$('#adress').focusout(function() {
		if (!$(this).val())
			$(this).addClass('error').parent().find('mark').removeClass('valid').addClass('error');
		else
			$(this).removeClass('error').parent().find('mark').removeClass('error').addClass('valid');
	});
	
	$('#dni').focusout(function() {
		if (!$(this).val())
			$(this).addClass('error').parent().find('mark').removeClass('valid').addClass('error');
		else
			$(this).removeClass('error').parent().find('mark').removeClass('error').addClass('valid');
	});

	$('#submit').click(function() {
		$("#message").slideUp(200,function() {
			$('#message').hide();

			// Kick in Validation
			$('#email').triggerHandler("focusout");
			$('#name').triggerHandler("focusout");
			$('#adress').triggerHandler("focusout");
			$('#dni').triggerHandler("focusout");

		});
	});
	
	//Esta funcion define lo que hace al hacer click en el boton para enviar formulario
	
	$('#formulario').submit(function(){

		if ($('#facturacion mark.error').size()>0) {
			if(shake == "Yes") {
			$('#facturacion').effect('shake', { times:2 }, 75);
			}
			return false;
		}
		/*
		var action = $(this).attr('action');

 		$('#submit')
			.after('<img src="images/ajax-loader.gif" class="loader" />')
			.attr('disabled','disabled');

		
		$.post(action, $('#formulario').serialize(),
			function(data){
				$('#message').html( data );
				$('#message').slideDown();
				$('#facturacionform img.loader').fadeOut('slow',function(){$(this).remove()});
				$('#formulario #submit').removeAttr('disabled');
				if(data.match('success') != null) $('#formulario #submit').attr("disabled", true);
			}
		);
		
		return false;
		*/
	});
	
	
	function isEmail(emailAddress) {

		var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

		return pattern.test(emailAddress);
	}

	function isNumeric(input) {
    	return (input - 0) == input && input.length > 0;
	}

});