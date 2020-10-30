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

var entryData = {
  view: 'entries',
  entry: {
    entryTitle: '',
    entryUrl: '',
    notes: ''
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

// storage for entry
var userEntryData = localStorage.getItem('javascript-local-storage-2');

if (userEntryData !== null) {
  entryData = JSON.parse(userEntryData);
}

window.addEventListener('beforeunload', function (event) {
  var entryDataJson = JSON.stringify(entryData, null, 1);
  localStorage.setItem('javascript-local-storage-2', entryDataJson);
});
