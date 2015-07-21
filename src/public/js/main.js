var $ = require('jquery');

let imageUpload = $("#userImage");

// clear input value
if ($(imageUpload).length) {
  $(imageUpload).closest('form').get(0).reset();
}

$(imageUpload).on("change", function(e){
  let value;
  let label = $(this).siblings("label");
  let submit = $(this).siblings("input[name='submit']");

  if ($(this).val()) {
    value = $(this).val();

    $(label).html($(label).text() + "<span>" + ` "${value}"` + "</span>");
    $(submit).removeClass("hidden");
  }
});


