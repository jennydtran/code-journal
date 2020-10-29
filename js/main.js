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

  /* var profileEditButton = document.createElement('button');
  profileEditButton.textContent = 'EDIT';
  profileEditButtonLink.appendChild(profileEditButton);
*/
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

    imagePlaceholder.setAttribute('src', data.profile.avatarUrl);
  }

}

// eventListener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', function (event) {
  if (data.profile.username === ' ') {
    viewSwapDataViews('edit-profile');
  } else if (data.profile.username) {
    viewSwapDataViews(data.view);
  }
});

// eventlistener 'click' for document
document.addEventListener('click', function (event) {
  var a = document.querySelectorAll('a');

  for (var i = 0; i < a.length; i++) {
    var aLink = a[i];
    if (event.target !== aLink) {
      return;
    } else if (event.target === aLink) {
      viewSwapDataViews(a[i].getAttribute('data-view'));
    }
  }

});
