(function($) {

	$(document).ready(function() {
		
		var contact_button = $("form input[value=Envoyer]");
		if (typeof(contact_button) != 'undefined' && contact_button != null) {
			$("form input[value=Envoyer]").click(function(event) {
				event.preventDefault();
				var email = $("#email").val();
				var message = $("#message").val();
				if (email != '' && message != '') {
					$.post("contact_form.php", {
					email: email,
					message: message
					}, function(data) {					
						// Message.
						var $form = document.querySelectorAll('#signup-form')[0];
			
						if (data == "OK") {
							// Show message.
							$("#returnmessage").html("<span style='color:#009F7B'>Message envoy&eacute; !</span>");
							// Reset form.
							$form.reset();
						}
						else {
							// Show message.
							$("#returnmessage").html("<span style='color:#CB212D'>Message non envoy&eacute; !</span>");
						}
					});
				}
			});
		}
		
		var contact_button = $("form input[value=Send]");
		if (typeof(contact_button) != 'undefined' && contact_button != null) {
			$("form input[value=Send]").click(function(event) {
				event.preventDefault();
				var email = $("#email").val();
				var message = $("#message").val();
				if (email != '' && message != '') {
					$.post("contact_form.php", {
					email: email,
					message: message
					}, function(data) {					
						// Message.
						var $form = document.querySelectorAll('#signup-form')[0];
			
						if (data == "OK") {
							// Show message.
							$("#returnmessage").html("<span style='color:#009F7B'>Message sent !</span>");
							// Reset form.
							$form.reset();
						}
						else {
							// Show message.
							$("#returnmessage").html("<span style='color:#CB212D'>Message not sent !</span>");
						}
					});
				}
			});
		}
	});

})(jQuery);