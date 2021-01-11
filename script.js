$(document).on("click", "#b", function() {
  var input = document.getElementsByName("search")[0].value;
  $(".target").remove();

  $.ajax({
    url: "https://en.wikipedia.org/w/api.php?",
    data: {
      action: "opensearch",
      search: input,
      format: "json",
      origin: "*"
    },
    dataType: "json",
    type: "POST",
    success: function(data) {
      for (i = 0; i < data[1].length; i++) {
        $(".results").append(
          "<br class='target'><br class='target'><a class='target' href=" +
            data[3][i] +
            ">" +
            data[1][i] +
            "</a>"
        );
        $(".results").append(
          "<p class='target'>" + data[2][i] + "</p><br class='target'>"
        );
      }
    }
  });
});

$(".form-group").keyup(function(event) {
  if (event.keyCode == 13) {
    $("#b").click();
  }
});

$(document).ready(function() {
  $("#about").tooltip();
});