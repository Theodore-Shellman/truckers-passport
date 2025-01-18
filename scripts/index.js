
const profileEditButton = document.querySelector('.profile__edit-btn');

const editProfileModal = document.querySelector('#edit-profile-modal');
const closeProfilemodal = editProfileModal.querySelector('.modal__close-btn');

function openModal() {
  editProfileModal.classList.add('modal__opened');
}
  function closeModal() {
    editProfileModal.classList.remove('modal__opened');

}
profileEditButton.addEventListener('click', openModal);
closeProfilemodal.addEventListener('click', closeModal);