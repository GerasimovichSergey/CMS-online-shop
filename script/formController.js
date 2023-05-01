import { category } from './elems.js';
import { getCategory } from './serviceAPI.js';

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
};