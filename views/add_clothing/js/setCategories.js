
$(document).ready(function () {
	$('select').formSelect();
	$('#image_chosen').attr('src', localStorage.tempImage);
	$("input[name='name']").focus();
});

function selected() {
	if ($("input[name='name']").val().length > 0
		&& $("select[name='colour']").val().length
		&& $("select[name='type']").val().length
		&& $("select[name='weather']").val().length
	) {
		$("button").removeAttr("disabled");
	} else {
		document.getElementsByTagName("button")[0].setAttribute("disabled","");
	}
}

function store() {
	localStorage.setItem("tempName", $("input[name='name']").val());
	localStorage.setItem("tempType", $("select[name='type']").val());
	localStorage.setItem("tempColour", $("select[name='colour']").val());
	localStorage.setItem("tempWeather", $("select[name='weather']").val());
}