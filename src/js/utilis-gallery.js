// Создаеи разметку Галлереи из моделли данных

export const createGallaryItemsMurkup = dataArray => {
  return dataArray
    .map(
      ({ preview, original, description }) =>
        `<li>
         <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
         </a>
         </li>`
    )
    .join('');
};

// Рендер в HTML

export const render = (el, dataArray) => {
  const murkupRender = createGallaryItemsMurkup(dataArray);
  el.innerHTML = '';
  el.insertAdjacentHTML('beforeend', murkupRender);
};
