import { category, form, tableGoods } from './elems.js';
import { getCategory, getGoods, postGoods } from './serviceAPI.js';
import { toBase64 } from './utils.js';
import { createRow } from './tableView.js';
import { clearFormData, closeModal } from './modalController.js';
import { showPreview } from './previewController.js';
import { API_URL } from './const.js';

const updateCategory = async () => {
  category.textContent = '';

  const categoryList = await getCategory();

  const categoryOption = categoryList.map(optionValue => {
    const option = document.createElement('option');
    option.value = optionValue;

    return option;
  });

  category.append(...categoryOption);
};

export const formController = () => {
  updateCategory();

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    // const formData = [...new FormData(form)];
    // const data = Object.fromEntries(formData);

    let data = {};

    for (let [key, value] of formData) {
      if (value) {
        data[key] = value;
      }
    }

    if (data.image.size) {
      data.image = await toBase64(data.image);
    } else {
      delete data.image;
    }

    const goods = await postGoods(data);
    tableGoods.append(createRow(goods));
    closeModal();
    clearFormData(form);
  });
};

export const fillingForm = async (id) => {
  const { title, category, description, display, price, image } = await getGoods(id);

  form.title.value = title;
  form.category.value = category;
  form.description.value = description.join('\n');
  form.display.value = display;
  form.price.value = price;
  form.imagesave.value = image;
  showPreview(`${API_URL}${image}`);
};