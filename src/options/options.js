$(document).ready(() => {
  chrome.storage.sync.get(['privateReview', 'publicReview'], ({
    publicReview = '${name} was very friendly, easy going and left the room clean and tidy.Highly recommended!!',
    privateReview = 'Hope you had a good time in our city'
  }) => {
    $('#publicReview').val(publicReview);
    $('#privateReview').val(privateReview);
  });

});

$('#saveOptionsBtn').click(() => {
 chrome.storage.sync.set({
   privateReview: $('#privateReview').val(),
   publicReview: $('#publicReview').val(),
  }, function () {
   console.log('Saved');
 });
})
