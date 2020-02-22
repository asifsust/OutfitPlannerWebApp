function selected(hello) {
	if (hello.files && hello.files[0] && checkFileType(hello.files[0])) {
		let reader = new FileReader();
		reader.onload = function (e) {
			$('#image_chosen').attr('src', e.target.result);
			$('#image_chosen').removeAttr("style");
			$("button").removeAttr("disabled");
		};
		reader.readAsDataURL(hello.files[0]);
	}
}

function checkFileType(file) {
	const filetypes = /jpeg|jpg|png|gif/;
	if (filetypes.test(file.name)) {
		return true;
	}
	return false;
}