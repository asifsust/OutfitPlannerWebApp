$(document).ready(function () {
	$('select').formSelect();
	$("input[name='url']").focus();
});

function showImage(event) {
	
	if (event.target.value) {
		$('#image_chosen').attr("src", event.target.value);
		$('#image_chosen').removeAttr("style");
		$('#image_chosen').on('error', function () {
			console.log("error loading image");
			$('#image_chosen').removeAttr("src");
			$('#image_chosen').attr("style", "display: none;");
			$('input[name="url"]').attr("class","validate invalid");
			$('input[name="url"]').val("");
		})
		$('input[name="url"]').attr("class","validate valid");
	}
	else {
		$('#image_chosen').removeAttr("src");
		$('#image_chosen').attr("style", "display: none;");
		$('input[name="url"]').attr("class","validate");
	}
};

function unlockConfirm() {
	if ($("input[name='name']").val().length > 0
		&& $("select[name='colour']").val().length
		&& $("select[name='type']").val().length
		&& $("select[name='weather']").val().length
		&& $("input[name='url']").val().length
	) {
		$("button").removeAttr("disabled");
	} else {
		$("button").attr("disabled", "");
	}
}