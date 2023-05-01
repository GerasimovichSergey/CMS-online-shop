import { form } from './elems.js';
import { hidePreview } from './previewController.js';

const openModal = (modal, classOpen) => {
  modal.classList.add(classOpen);
}

const closeModal = (modal, classOpen) => {
  modal.classList.remove(classOpen);
};

const clearFormData = (form) => {
  form.reset();
  hidePreview();
};

export const modalController = (obj) => {
  const { modal, modalBtn, classOpen, classClose } = obj;

  modalBtn.addEventListener('click', () => {
    openModal(modal, classOpen);
  });

  modal.addEventListener('click', (event) => {
    if (event.target === modal || event.target.classList.contains(classClose)) {
      closeModal(modal, classOpen);
      clearFormData(form);
    }
  });
};