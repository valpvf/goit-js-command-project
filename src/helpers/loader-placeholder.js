export const loader = document.getElementById("loader");

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
  <div class="slider-container">
    <div class="slider-blank-box skeleton-card"></div>
    <ul class="rc-descr-list">
      <li class="rc-descr-item skeleton-card">
        <h3 class="rc-descr-title"></h3>
        <p class="rc-descr-text"></p>
      </li>
      <li class="rc-descr-item skeleton-card">
        <h3 class="rc-descr-title"></h3>
        <p class="rc-descr-text"></p>
      </li>
      <li class="rc-descr-item skeleton-card">
        <h3 class="rc-descr-title"></h3>
        <p class="rc-descr-text"></p>
      </li>
      <li class="rc-descr-item skeleton-card">
        <h3 class="rc-descr-title"></h3>
        <p class="rc-descr-text"></p>
      </li>
      <li class="rc-descr-item skeleton-card">
        <h3 class="rc-descr-title"></h3>
        <p class="rc-descr-text"></p>
      </li>
    </ul>
  </div>`;
}