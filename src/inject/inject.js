
chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

    // GET OPTIONS
    chrome.storage.sync.get(['privateReview', 'publicReview'], ({ publicReview, privateReview}) => {

      // RATING
      $('#cleanliness_rating_star_row4').click();
      $('#communication_rating_star_row4').click();
      $('#respect_house_rules_rating_star_row4').click();

      // PUBLIC REVIEW
      var publicReviewInterval = setInterval(() => {
        if ($('#public_feedback_text_area').val() === '') {
          let placeholder = $('#public_feedback_text_area').attr('placeholder');
          let name = placeholder.substring(22, placeholder.length - 7);
          $('#public_feedback_text_area').val(publicReview.replace('${name}', name));
          $('#public_feedback_text_area').focus();
          clearInterval(publicReviewInterval);
        }
      }, 1000);

      // PRIVATE REVIEW
      var privateReviewInterval = setInterval(() => {
        if ($('#private_feedback_text_area').val() === '') {
          $('#private_feedback_text_area').val(privateReview.replace('${name}', name));
          $('#private_feedback_text_area').focus();
          clearInterval(privateReviewInterval);
        }
      }, 1000);

      // HOST AGAIN
      var hostAgainInterval = setInterval(() => {
        if ($('#recommend_guest_toggle_option_yes').length > 0) {
          $('#recommend_guest_toggle_option_yes').click();
          clearInterval(hostAgainInterval);
        }
      }, 1000);

    });

	}}, 10);
});

