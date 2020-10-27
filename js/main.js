var avatarUrl = document.forms[0].avatarUrl;
console.log('avatarURL', avatarUrl);
var username = document.forms[0].username;
console.log('username', username);
var fullName = document.forms[0].fullName;
console.log('fullName', fullName);
var userLocation = document.forms[0].location;
console.log('location', userLocation);
var bio = document.forms[0].bio;
console.log('bio', bio);

function handleFocus(event) {
  console.log('focus event fired');
  console.log('  event.target.name', event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log('  event.target.name', event.target.name);
}

function handleInput(event) {
  console.log('value of ' + event.target.name + ' ' + event.target.value);
}

avatarUrl.addEventListener('focus', handleFocus);
avatarUrl.addEventListener('blur', handleBlur);
avatarUrl.addEventListener('input', handleInput);

username.addEventListener('focus', handleFocus);
username.addEventListener('blur', handleBlur);
username.addEventListener('input', handleInput);

fullName.addEventListener('focus', handleFocus);
fullName.addEventListener('blur', handleBlur);
fullName.addEventListener('input', handleInput);

userLocation.addEventListener('focus', handleFocus);
userLocation.addEventListener('blur', handleBlur);
userLocation.addEventListener('input', handleInput);

bio.addEventListener('focus', handleFocus);
bio.addEventListener('blur', handleBlur);
bio.addEventListener('input', handleInput);

var createProfileForm = document.querySelector('form');
console.log('createProfileForm', createProfileForm);

createProfileForm.addEventListener('submit', function (event) {
  event.preventDefault();

  var avatarUrl = document.forms[0].avatarUrl.value;
  var username = document.forms[0].username.value;
  var fullName = document.forms[0].fullName.value;
  var userLocation = document.forms[0].location.value;
  var bio = document.forms[0].bio.value;

  var data = { avatarUrl, username, fullName, userLocation, bio};
  console.log('messageData:', data);

  createProfileForm.reset();
});
