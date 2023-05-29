import { tableGoods } from './elems.js';
import { currencyFormatRUB } from './utils.js';


const fillingRow = (goodsRow, { id, title, category, price }) => {
  goodsRow.innerHTML = `
    <td>${id}</td>
    <td>${title}</td>
    <td>${category}</td>
    <td class="text-end">${currencyFormatRUB(price)}</td>
    <td class="d-flex">
      <button class="btn-table btn-delete">
        <svg width="30" height="30">
          <use xlink:href="#delete" />
        </svg>
      </button>
    </td>
  `;

  return goodsRow;
};

export const createRow = (data) => {
  const tr = document.createElement('tr');

  tr.classList.add('table-row', 'table-goods-item');
  tr.dataset.id = data.id;

  return fillingRow(tr, data);
};

export const editRow = (data) => {
  const goodsRow = document.querySelector(`[data-id="${data.id}"]`);

  fillingRow(goodsRow, data);
};

export const tableRender = (goods) => {
  tableGoods.textContent = '';
  const rows = goods.map(item => createRow(item));

  tableGoods.append(...rows);
};