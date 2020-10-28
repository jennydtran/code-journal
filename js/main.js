// queried DOM for some elements that might be needed
var avatarUrl = document.forms[0].avatarUrl;
var imagePreview = document.querySelector('#image-preview');
var imagePlaceholder = document.querySelector('#image-placeholder');
var createProfileForm = document.querySelector('form');

// change avatar placeholder to preview of new avatar
function handleInputAvatar(event) {
  var urlString = event.target.value;
  imagePreview.setAttribute('src', urlString);

  if (urlString) {
    imagePreview.className = 'image-avatar';
    imagePlaceholder.className = 'image-avatar hidden';
  } else {
    imagePreview.className = 'image-avatar hidden';
    imagePlaceholder.className = 'image-avatar';
  }
}

avatarUrl.addEventListener('input', handleInputAvatar);

// addEventListener for 'submit'
createProfileForm.addEventListener('submit', function (event) {
  event.preventDefault();

  var avatarUrl = document.forms[0].avatarUrl.value;
  var username = document.forms[0].username.value;
  var fullName = document.forms[0].fullName.value;
  var userLocation = document.forms[0].location.value;
  var bio = document.forms[0].bio.value;

  data.profile.username = username;
  data.profile.fullName = fullName;
  data.profile.location = userLocation;
  data.profile.avatarUrl = avatarUrl;
  data.profile.bio = bio;

  imagePreview.className = 'image-avatar hidden';
  imagePlaceholder.className = 'image-avatar';
  createProfileForm.reset();
});
