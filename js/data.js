/* exported data */

var data = {
  view: 'edit-profile',
  profile: {
    username: '',
    fullName: '',
    location: '',
    avatarUrl: '',
    bio: ''
  },
  entries: []
};

// storage for profile
var userProfileData = localStorage.getItem('javascript-local-storage');

if (userProfileData !== null) {
  data = JSON.parse(userProfileData);
}

window.addEventListener('beforeunload', function (event) {
  var dataJson = JSON.stringify(data, null, 1);
  localStorage.setItem('javascript-local-storage', dataJson);
});
