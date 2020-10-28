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

  return divProfile;
}

// function for view swapping
function viewSwapDataViews () {

}
