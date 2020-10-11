$(document).ready(function () {

  // Homepage - quotes
  $(function quotes() {
    let $quotes = $("#quotes");
    $.ajax({
      type: "GET",
      url: "https://smileschool-api.hbtn.info/quotes",
      success: function (quotes) {
        $.each(quotes, function (i, quotes) {
          let a;
          quotes.id === 2 ? a = "" : a = "active";

          $("#quotes").append(
            `<div class="carousel-item ${a}">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-md-3 col-sm-4 d-flex justify-content-center">
                    <img class="rounded-circle mb-3" src="${quotes.pic_url}" width="150" height="150">
                  </div>
                  <div class="col-md-9 col-sm-8">
                    <blockquote class="blockquote">
                      <p class="text-white mb-4">${quotes.text}</p>
                      <p class="font-weight-bold text-white mb-0">${quotes.name}</p>
                      <p class="text-white font-italic font-weight-light ">${quotes.title}</p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>`
          )
        });
      }
    });
  });


  // Homepage - popular tutorials
  $(function popularTutorials() {
    let $popularTutorials = $("#popularTutorials");
    $.ajax({
      type: "GET",
      url: "https://smileschool-api.hbtn.info/popular-tutorials",
      success: function (data) {
        $.each(data, function (i, popularTutorials) {

          $("#popularTutorials").append(`
            <div class="col-sm-6 col-md-3 mb-3">
              <div class="card mb-3 h-100 bg-transparent border-0">
                <div class="card border-0">
                  <img class="card-img-top" src="${popularTutorials.thumb_url}" alt="Card image video 1">
                  <img class="card-img-overlay mx-auto my-auto" src="images/play.png" alt="Play icon" width="110">
                </div>
                <div class="card-body pl-3 pb-0">
                  <h6 class="card-title font-weight-bolder">${popularTutorials.title}</h6>
                  <p class="card-text text-muted"><small></small></p>
                  <div class="d-flex">
                    <img src="${popularTutorials.author_pic_url}" class="rounded-circle mb-3" width="30" height="30">
                    <p class="ml-3 text-color font-weight-bold">${popularTutorials.author}</p></div>
                  </div>
                  <div class="card-footer border-0 bg-transparent d-flex pl-3">
                    <img src="images/star_on.png" class=" my-auto ml-1" width="15">
                    <img src="images/star_on.png" class=" my-auto ml-1" width="15">
                    <img src="images/star_on.png" class=" my-auto ml-1" width="15">
                    <img src="images/star_on.png" class=" my-auto ml-1" width="15">
                    <img src="images/star_off.png" class="my-auto ml-1" width="15">
                    <p class="ml-auto my-auto text-color"><small class="font-weight-bold">${popularTutorials.duration}</small></p>
                  </div>
                </div>
              </div>
            </div>`)
        });
      }
    });
  });


  // Homepage - latest videos
  $(function latestVideos() {
    let $latestVideos = $("#latestVideos");
    $.ajax({
      type: "GET",
      url: "https://smileschool-api.hbtn.info/latest-videos",
      success: function (data) {
        $.each(data, function (i, latestVideos) {

          $("#latestVideos").append(`
            <div class="col-sm-6 col-md-3 mb-3">
              <div class="card mb-3 h-100 bg-transparent border-0">
                <div class="card border-0">
                  <img class="card-img-top" src="${latestVideos.thumb_url}" alt="Card image video 1">
                  <img class="card-img-overlay mx-auto my-auto" src="images/play.png" alt="Play icon" width="110">
                </div>
                <div class="card-body pl-3 pb-0">
                  <h6 class="card-title font-weight-bolder">${latestVideos.title}</h6>
                  <p class="card-text text-muted"><small></small></p>
                  <div class="d-flex">
                    <img src="${latestVideos.author_pic_url}" class="rounded-circle mb-3" width="30" height="30">
                    <p class="ml-3 text-color font-weight-bold">${latestVideos.author}</p></div>
                  </div>
                  <div class="card-footer border-0 bg-transparent d-flex pl-3">
                    <img src="images/star_on.png" class=" my-auto ml-1" width="15">
                    <img src="images/star_on.png" class=" my-auto ml-1" width="15">
                    <img src="images/star_on.png" class=" my-auto ml-1" width="15">
                    <img src="images/star_on.png" class=" my-auto ml-1" width="15">
                    <img src="images/star_off.png" class="my-auto ml-1" width="15">
                    <p class="ml-auto my-auto text-color"><small class="font-weight-bold">${latestVideos.duration}</small></p>
                  </div>
                </div>
              </div>
            </div>`)
        });
      }
    });
  });

  
  // Courses
  $(function coursesVideos() {
    let $coursesVideos = $("#coursesVideos");
    $.ajax({
      type: "GET",
      url: "https://smileschool-api.hbtn.info/courses",
      success: function (data) {
        $.each(data.courses, function (i, coursesVideos) {

          $("#coursesVideos").append(`
            <div class="col-sm-6 col-md-3 mb-3">
              <div class="card mb-3 h-100 bg-transparent border-0">
                <div class="card border-0">
                  <img class="card-img-top" src="${coursesVideos.thumb_url}" alt="Card image video 1">
                  <img class="card-img-overlay mx-auto my-auto" src="images/play.png" alt="Play icon" width="110">
                </div>
                <div class="card-body pl-3 pb-0">
                  <h6 class="card-title font-weight-bolder">${coursesVideos.title}</h6>
                  <p class="card-text text-muted"><small></small></p>
                  <div class="d-flex">
                    <img src="${coursesVideos.author_pic_url}" class="rounded-circle mb-3" width="30" height="30">
                    <p class="ml-3 text-color font-weight-bold">${coursesVideos.author}</p></div>
                  </div>
                  <div class="card-footer border-0 bg-transparent d-flex pl-3">
                    <img src="images/star_on.png" class=" my-auto ml-1" width="15">
                    <img src="images/star_on.png" class=" my-auto ml-1" width="15">
                    <img src="images/star_on.png" class=" my-auto ml-1" width="15">
                    <img src="images/star_on.png" class=" my-auto ml-1" width="15">
                    <img src="images/star_off.png" class="my-auto ml-1" width="15">
                    <p class="ml-auto my-auto text-color"><small class="font-weight-bold">${coursesVideos.duration}</small></p>
                  </div>
                </div>
              </div>
            </div>`)
        });
      }
    });
  });

});