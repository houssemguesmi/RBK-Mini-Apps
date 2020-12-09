$("#submit").click((e) => {
  e.preventDefault();
  let jsonData = $("#jsonData").val();
  if (jsonData[0] !== "{") {
    $("#errors").text("Please Enter a valid JSON String!");
    $("#jsonData").val("");
  } else {
    $("#jsonData").val("");
    $("#errors").text("");
    let obj = JSON.parse(jsonData);
    $.post("/test", obj, (data) => {
      $.get("/test", (data) => {
        data = data.split("\n");
        $("#results").html("");
        for (let i = 0; i < data.length; i++) {
          $("#results").append("<div class='tables'>" + data[i] + "</div><br>");
        }
      });
    });
  }
});
$(document).ready(() => {
  $.get("/test", (data) => {
    data = data.split("\n");
    $("#results").html("");
    for (let i = 0; i < data.length; i++) {
      $("#results").append("<div class='tables'>" + data[i] + "</div><br>");
    }
  });
});
$("#download").click(() => {
  $.get("/download", () => {});
});
