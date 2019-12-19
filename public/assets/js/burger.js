$(function() {
    $(".devour-burger").on("click", function(event) {
      var id = $(this).data("id");

      var devouredBurger = {
        devoured: true
      };

      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devouredBurger
      }).then(
        function() {
          location.reload();
        }
      );
    });
  })

  $(".create-form").on("submit", function(event) {

    event.preventDefault();

    var newBurger = {
      burger_name: $("#newBurger").val().trim(),
      devoured: false
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        location.reload();
      }
    );
  });