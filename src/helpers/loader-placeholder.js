export const loader = document.getElementById('loader');

export function renderLoader() {
  loader.innerHTML = '';
  loader.insertAdjacentHTML('afterbegin', skeletonTemplateFunction());
  loader.classList.remove('js-hidden');
}

export function hideLoader() {
  loader.innerHTML = '';
  loader.classList.add('js-hidden');
}

function skeletonTemplateFunction() {
  return `
  <div class="skeleton-slide skeleton">
  </div>
  <div class="skeleton-list"></div>`;
}
