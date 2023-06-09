import { form, modal, modalSubmitBtn, modalTitle } from './elems.js';
import { hidePreview } from './previewController.js';
import { fillingForm } from './formController.js';

const openModal = (id) => {
  if (id) {
    fillingForm(id);
  }
  modal.classList.add('d-block');
}

export const closeModal = () => {
  modal.classList.remove('d-block');
};

export const clearFormData = (form) => {
  form.reset();
  form.identificator.value = '';
  form.imagesave.value = '';
  hidePreview();
};

export const modalController = (obj) => {
  const { btn, delegation } = obj;

  if (btn) {
    btn.addEventListener('click', () => {
      modalTitle.textContent = 'Добавить новый товар';
      modalSubmitBtn.textContent = 'Добавить товар';
      openModal();
    });
  }

  if (delegation) {
    delegation.parent.addEventListener('click', (event) => {
      const goodsRow = event.target.closest(delegation.target);
      const targetExclude = event.target.closest(delegation.targetExclude);

      if (goodsRow && !targetExclude) {
        modalTitle.textContent = `Изменить товар #${goodsRow.dataset.id}`;
        modalSubmitBtn.textContent = 'Изменить товар';
        openModal(goodsRow.dataset.id);
      }
    });
  }

  modal.addEventListener('click', (event) => {
    if (event.target === modal || event.target.classList.contains('btn-close')) {
      closeModal();
      clearFormData(form);
    }
  });
};