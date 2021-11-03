$("#callAPI").click((e) => {
  e.preventDefault();
  let user = $(".userInput").val();
  let text = $(".textInput").val();

  $.ajax({
    type: "POST",
    url: "/api/chirps",
    data: { user, text },
  }).then((response) => {
    console.log(response);
    getTheChirp();
  });
 $(".userInput").val(" ");
$(".textInput").val(" ");
});

getTheChirp();

function getTheChirp() {
  $.ajax({
    type: "GET",
    url: "/api/chirps",
  }).then((chirp) => {
    $(".chirpsBox").empty();

    for (const id in chirp) {
      console.log(chirp[id].id)
      if (chirp[id].id === "nextid") return;      
      const deleteBtn = $(
        "<button class='btn btn-danger btn-sm'> x </button>"
      ).click(() => {
        $.ajax({
          type: "DELETE",
          url: `/api/chirps/${id}`,
        }).then((response) => {
          console.log(response);
          getTheChirp();
        });
      });

      $(`<div class= 'card col-lg-5 mt-1 p-5 shadow my-4'><div class='h5 card-title col-md-5 d-flex align-content-space-between'>
            @${chirp[id].user}
            </div>
            <div class='p'> 
            ${chirp[id].text} 
            </div></div>`)
        .appendTo(".chirpsBox")
        .append(deleteBtn);
    }
  });
}
