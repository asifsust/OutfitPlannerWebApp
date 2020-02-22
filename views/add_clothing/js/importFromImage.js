function selected(form) {
	if (form.files && form.files[0]) {
		let reader = new FileReader();
		reader.onload = function (e) {
			localStorage.setItem("tempImage",e.target.result)
			$('#image_chosen').attr('src', e.target.result);
			$('#image_chosen').removeAttr("style");
			$("button").removeAttr("disabled");
		};
		reader.readAsDataURL(form.files[0]);
	}
}