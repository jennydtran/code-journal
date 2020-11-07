// queried DOM for some elements that might be needed
var avatarUrl = document.forms[0].avatarUrl;
var imageAvatar = document.querySelector('#image-avatar');
var createProfileForm = document.querySelector('form[class="edit-profile"]');
var createEntryForm = document.querySelector('form[class="create-entry"]');
var imageEntryUrl = document.forms[1].entryUrl;
var imageEntry = document.querySelector('#image-entry');

// change avatar image and entry image to preview of new images
function handleInputAvatar(event) {
  var urlString = event.target.value;
  imageAvatar.src = urlString;
}

function handleInputImageEntry(event) {
  var urlString = event.target.value;
  imageEntry.src = urlString;
}

avatarUrl.addEventListener('input', handleInputAvatar);
imageEntryUrl.addEventListener('input', handleInputImageEntry);

// addEventListener for 'submit' for profile form
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

  viewSwapDataViews('profile');
});

// function to render a DOM tree for profile data model
function profileDOM(data) {
  var divProfile = document.createElement('div');
  divProfile.setAttribute('data-view', 'profile');

  var divRow1 = document.createElement('div');
  divRow1.setAttribute('class', 'row');
  divProfile.appendChild(divRow1);

  var sectionHeading = document.createElement('h1');
  sectionHeading.setAttribute('class', 'column-full section-heading');
  sectionHeading.textContent = data.profile.fullName;
  divRow1.appendChild(sectionHeading);

  var divRow2 = document.createElement('div');
  divRow2.setAttribute('class', 'row');
  divProfile.appendChild(divRow2);

  var divHalfAvatar = document.createElement('div');
  divHalfAvatar.setAttribute('class', 'column-half div-avatar-image');
  divRow2.appendChild(divHalfAvatar);

  var img = document.createElement('img');
  img.setAttribute('class', 'image-avatar');
  img.setAttribute('src', data.profile.avatarUrl);
  img.setAttribute('alt', 'Code Journal Avatar');
  img.setAttribute('id', 'image-avatar');
  divHalfAvatar.appendChild(img);

  var divHalf = document.createElement('div');
  divHalf.setAttribute('class', 'column-half');
  divRow2.appendChild(divHalf);

  var divUsername = document.createElement('div');
  divUsername.setAttribute('class', 'row section-username');
  divHalf.appendChild(divUsername);

  var iContainer1 = document.createElement('div');
  iContainer1.setAttribute('class', 'icon-container');
  divUsername.appendChild(iContainer1);

  var icon1 = document.createElement('i');
  icon1.setAttribute('class', 'far fa-user-circle fa-2x');
  icon1.setAttribute('aria-hidden', 'true');
  iContainer1.appendChild(icon1);

  var headingUsername = document.createElement('h3');
  headingUsername.setAttribute('class', 'username');
  headingUsername.textContent = data.profile.username;
  divUsername.appendChild(headingUsername);

  var divLocation = document.createElement('div');
  divLocation.setAttribute('class', 'row section-location');
  divHalf.appendChild(divLocation);

  var iContainer2 = document.createElement('div');
  iContainer2.setAttribute('class', 'icon-container');
  divLocation.appendChild(iContainer2);

  var icon2 = document.createElement('i');
  icon2.setAttribute('class', 'fas fa-map-marker-alt fa-2x');
  icon2.setAttribute('aria-hidden', 'true');
  iContainer2.appendChild(icon2);

  var headingLocation = document.createElement('h3');
  headingLocation.setAttribute('class', 'location');
  headingLocation.textContent = data.profile.location;
  divLocation.appendChild(headingLocation);

  var divBio = document.createElement('div');
  divBio.setAttribute('class', 'section-bio');
  divHalf.appendChild(divBio);

  var p = document.createElement('p');
  p.setAttribute('class', 'bio-paragraph');
  p.textContent = data.profile.bio;
  divBio.appendChild(p);

  var divEditButton = document.createElement('div');
  divEditButton.setAttribute('class', 'editbutton-profile');
  divHalf.appendChild(divEditButton);

  var profileEditButtonLink = document.createElement('a');
  profileEditButtonLink.setAttribute('href', '#');
  profileEditButtonLink.setAttribute('class', 'button');
  profileEditButtonLink.setAttribute('data-view', 'edit-profile');
  profileEditButtonLink.textContent = 'EDIT';
  divEditButton.appendChild(profileEditButtonLink);

  return divProfile;
}

// function for view swapping
function viewSwapDataViews(dataView) {
  var divProfilesList = document.querySelectorAll('div[data-view]');
  var i;

  for (i = 0; i < divProfilesList.length; i++) {
    var divProfile = divProfilesList[i];
    if (dataView !== divProfile.getAttribute('data-view')) {
      divProfile.className = 'hidden';
    } else if (dataView === divProfile.getAttribute('data-view')) {
      divProfile.className = 'active';
      data.view = dataView;
    }
  }

  var main = document.querySelector('main');

  if (dataView === 'profile') {
    main.removeChild(document.querySelector('div[data-view="profile"]'));
    main.appendChild(profileDOM(data));
  }

  if (dataView === 'edit-profile') {

    document.forms[0].avatarUrl.value = data.profile.avatarUrl;
    document.forms[0].username.value = data.profile.username;
    document.forms[0].fullName.value = data.profile.fullName;
    document.forms[0].location.value = data.profile.location;
    document.forms[0].bio.value = data.profile.bio;

    if (data.profile.username !== '') {
      imageAvatar.src = data.profile.avatarUrl;
    }
  }

}

// eventListener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', function (event) {
  if (data.profile.username === '') {
    viewSwapDataViews('edit-profile');
  } else if (data.profile.username) {
    viewSwapDataViews(data.view);
  }
});

// eventlistener 'click' for document
document.addEventListener('click', function (event) {

  if (event.target.tagName !== 'A') {
    return;
  }

  if (data.profile.username !== '') {
    viewSwapDataViews(event.target.getAttribute('data-view'));
  } else {
    viewSwapDataViews('edit-profile');
  }

});

// addEventListener for 'submit' for entry form
createEntryForm.addEventListener('submit', function (event) {
  event.preventDefault();
  var entriesList = document.querySelector('ol');
  var entry = {};

  var entryUrl = document.forms[1].entryUrl.value;
  var entryTitle = document.forms[1].entryTitle.value;
  var notes = document.forms[1].notes.value;

  entry.entryTitle = entryTitle;
  entry.entryUrl = entryUrl;
  entry.notes = notes;

  data.entries.push(entry);
  viewSwapDataViews('entries');
  createEntryForm.reset();
});

// function to render a DOM tree for entry data model
function entryDOM(data, index) {
    var divEntry = document.createElement('li');
    divEntry.setAttribute('class', 'list-entry');

    var divRow1 = document.createElement('div');
    divRow1.setAttribute('class', 'row');
    divEntry.appendChild(divRow1);

    var divEntryImage = document.createElement('div');
    divEntryImage.setAttribute('class', 'column-half div-entry-image');
    divRow1.appendChild(divEntryImage);

    var img = document.createElement('img');
    img.setAttribute('class', 'image-entry');
    img.setAttribute('src', data.entries[index].entryUrl);
    img.setAttribute('alt', 'Code Journal Entry Image');
    img.setAttribute('id', 'image-entry');
    divEntryImage.appendChild(img);

    var divColumnHalf = document.createElement('div');
    divColumnHalf.setAttribute('class', 'column-half');
    divRow1.appendChild(divColumnHalf);

    var divEntryTitle = document.createElement('div');
    divEntryTitle.setAttribute('class', 'row section-entrytitle');
    divColumnHalf.appendChild(divEntryTitle);

    var entryTitle = document.createElement('h3');
    entryTitle.setAttribute('class', 'entrytitle');
    entryTitle.textContent = data.entries[index].entryTitle;
    divEntryTitle.appendChild(entryTitle);

    var divEntryNotes = document.createElement('div');
    divEntryNotes.setAttribute('class', 'row section-entrynotes');
    divColumnHalf.appendChild(divEntryNotes);

    var p = document.createElement('p');
    p.setAttribute('class', 'notes-paragraph');
    p.textContent = data.entries[index].notes;
    divEntryNotes.appendChild(p);

    return divEntry;
};

// variable for ol element for list-entry to append to
var entriesList = document.querySelector('ol');

// eventListener for DOMContentLoaded; append entry data model to page
document.addEventListener('DOMContentLoaded', function (event) {

  for (var i = 0; i < data.entries.length; i++) {
    entriesList.prepend(entryDOM(data, i));
  }

});
//// porblem. Doesn't automaticcal update
