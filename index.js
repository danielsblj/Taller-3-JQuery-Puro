function validateMyCode(event) {
  event.preventDefault();
 var $valForm = $("#inscription-form");
 if ($valForm.length) {
  $valForm.validate({
    rules: {
      name: {
        required: true,
        minlength: 3,
        maxlength: 40,
      },
     
    },
    messages: {
      name: {
        required: "Pruebaaa",
      },
    },
  });
}
};