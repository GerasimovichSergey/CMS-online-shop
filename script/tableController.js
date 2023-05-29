import { tableRender } from './tableView.js';
import { deleteGoods, getGoods } from './serviceAPI.js';
import { modalController } from './modalController.js';
import { tableGoods } from './elems.js';

export const tableController = async () => {
  modalController({
    delegation: {
      parent: tableGoods,
      target: '.table-goods-item',
      targetExclude: '.btn-delete',
    },
  });

  const goods = await getGoods();
  tableRender(goods);

  tableGoods.addEventListener('click', async ({ target }) => {
    const delBtn = target.closest('.btn-delete');

    if (delBtn) {
      const row = delBtn.closest('.table-goods-item');
      const rowId = row.dataset.id;
      const isDel = await deleteGoods(rowId);

      if (isDel) {
        row.remove();
      }
    }
  });
};