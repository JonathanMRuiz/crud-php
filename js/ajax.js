$(function () {
  $("#task-result").hide();

  $("#search").keyup(() => {
    if ($("#search").val()) {
      let search = $("#search").val();

      $.ajax({
        url: "php/search-task.php",
        data: {
          search,
        },
        type: "POST",
        success: function (response) {
          if (!response.error) {
            let tasks = response;
            console.log(tasks);
          }
        },
      });
    }
  });
});
