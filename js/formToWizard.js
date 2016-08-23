/* Created by jankoatwarpspeed.com */

(function($) {
    $.fn.formToWizard = function(options) {
        options = $.extend({  
            submitButton: "" 
        }, options); 
        
        var element = this;

        var steps = $(element).find("fieldset");
        var count = steps.size();
        var submmitButtonName = "#" + options.submitButton;
        $(submmitButtonName).hide();

        $(element).before("<ul id='steps'></ul>");

        steps.each(function(i) {
            $(this).wrap("<div id='step" + i + "'></div>");

            var name = $(this).find("legend").html();
            $("#steps").append("<li id='stepDesc" + i + "'>Paso " + (i + 1) + "<span>" + name + "</span></li>");

            if (i == 0) {
				$(this).append("<div class='eight columns' id='step" + i + "next'></div>");
                createNextButton(i);
                selectStep(i);
            }
            else if (i == count - 1) {
                $("#step" + i).hide();
				$(this).append("<div class='eight columns' id='step" + i + "prev'></div>");
                createPrevButton(i);
            }
            else {
                $("#step" + i).hide();
				$(this).append("<div class='eight columns' id='step" + i + "prev'></div>");
				$(this).append("<div class='eight columns' id='step" + i + "next'></div>");
                createPrevButton(i);
                createNextButton(i);
            }
        });

        function createPrevButton(i) {
            var stepName = "step" + i;
			
			
			
            $("#" + stepName + "prev").append("<a href='#contenido' id='" + stepName + "Prev' class='button medium anterior gray'><i class='icon-chevron-left'> Anterior</a>");

            $("#" + stepName + "Prev").bind("click", function(e) {
                $("#" + stepName).hide();
				$("#step" + (i - 1)).show();
				$(submmitButtonName).hide();
				selectStep(i - 1);
			});
        }

        function createNextButton(i) {
            var stepName = "step" + i;
			
			window["StepNext" + i + "habilitado"] = false; //Crea la variable StepNextXhabilitado
			
            $("#" + stepName + "next").append("<a id='" + stepName + "Next' class='button medium siguiente off'>Siguiente <i class='icon-chevron-right'></i></a>");

            $("#" + stepName + "Next").bind("click", function(e) {
				if (window["StepNext" + i + "habilitado"]) {
					$("#" + stepName).hide();
					$("#step" + (i + 1)).show();
					if (i + 2 == count)
						$(submmitButtonName).show();
					selectStep(i + 1);
				}
            });
        }

        function selectStep(i) {
            $("#steps li").removeClass("current");
            $("#stepDesc" + i).addClass("current");
        }

    }
})(jQuery); 