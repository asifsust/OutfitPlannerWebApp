$(document).ready(function () {
	var elems = document.querySelectorAll('select');
	M.FormSelect.init(elems);
	elems = document.querySelectorAll('.datepicker');
	M.Datepicker.init(elems,{
		format:"yyyy-mm-dd",
		showClearBtn:true
	});
});

function unlockConfirm() {
	console.log($("input[name='date']").val())
	if ($("input[name='name']").val().length > 0
		&& $("select[name='weather']").val().length
		&& $(".box > input:checked").val() === "on"
	) {
		$("button").removeAttr("disabled");
	} else {
		$("button").attr("disabled", "");
	}
}