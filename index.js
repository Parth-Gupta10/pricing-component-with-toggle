var elem = $("input")[0];

function clicked() {
  if (elem.checked) {
    $(".basic").text("$199.99");
    $(".professional").text("$249.99");
    $(".master").text("$399.99");
  } else {
    $(".basic").text("$19.99");
    $(".professional").text("$24.99");
    $(".master").text("$39.99");
  }
}
