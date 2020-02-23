$(document).ready(function () {
	$('select').formSelect();
	$("input[name='name']").focus();
});

function showImage(event) {
	if (event.target.files && event.target.files[0]) {
		$('#image_chosen').attr("src",URL.createObjectURL(event.target.files[0]));
		$('#image_chosen').removeAttr("style");
	}
	else {
		$('#image_chosen').removeAttr("src");
		$('#image_chosen').attr("style", "display: none;");
	}
};

function unlockConfirm() {
	if ($("input[name='name']").val().length > 0
		&& $("select[name='colour']").val().length
		&& $("select[name='type']").val().length
		&& $("select[name='weather']").val().length
		&& $("input[name='image']")[0].files.length
	) {
		$("button").removeAttr("disabled");
	} else {
		$("button").attr("disabled", "");
	}
}