function skillsMember() {
  var member = document.querySelector('.member');
  var skills = document.querySelector('.member__skills');

  if (member) {
    member.addEventListener('click', function () {
      skills.classList.toggle('member__skills--active');
    });
  }
}