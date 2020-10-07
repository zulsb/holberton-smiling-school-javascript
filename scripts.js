$(document).ready(function () {
	$(function () {
		let $quotes = $("#quotes");
		$.ajax({
			type: "GET",
			url: "https://smileschool-api.hbtn.info/quotes",
			success: function (quotes) {
				$.each(quotes, function (i, quotes) {
					let a;
					quotes.id === 2 ? a = "" : a = "active";

					$("#quotes").append(
						'<div class="carousel-item ' + a + '">' +
						'<div class="container-fluid">' +
						'<div class="row">' +
						'<div class="col-md-3 col-sm-4 d-flex justify-content-center">' +
						'<img class="rounded-circle mb-3" src="' + quotes.pic_url + '" width="150" height="150">' +
						'</div>' +
						'<div class="col-md-9 col-sm-8">' +
						'<blockquote class="blockquote">' +
						'<p class="text-white mb-4">' + quotes.text + '</p>' +
						'<p class="font-weight-bold text-white mb-0">' + quotes.name + '</p>' +
						'<p class="text-white font-italic font-weight-light ">' + quotes.title + '</p>' +
						'</blockquote>' +
						'</div>' +
						'</div>' +
						'</div>' +
						'</div>'
					)
				});
			}
		});
	});
});