import { modalBtn, modal } from './elems.js';
import { modalController } from './modalController.js';
import { previewController } from './previewController.js';
import { tableController } from './tableController.js';
import { formController } from './formController.js';

modalController({
  modal,
  modalBtn,
  classOpen: 'd-block',
  classClose: 'btn-close',
});

previewController();
tableController();
formController();