//back End


//front End
$(document).ready(function() {
  $("form#orderForm").submit(function() {
    var productInput = $("select#product").val();
    var nameInput = $("input#name").val();
    var addressInput = $("input#address").val();
    var cityInput = $("input#city").val();
    var stateInput = $("input#state").val();
    var zipInput = $("input#zip").val();

    $(".name").text(nameInput);
    $(".product").text(productInput);
    $(".address").text(addressInput);
    $(".city").text(cityInput);
    $(".state").text(stateInput);
    $(".zip").text(zipInput);

    $("#confirmation").show();

    event.preventDefault();
  });
});
