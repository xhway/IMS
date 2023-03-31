const tieCreateFormHandler = async (event) => {
  try {
    event.preventDefault();

    const sku = document.querySelector('#create-tie-sku').value.trim();
    const color = document.querySelector('#create-tie-color').value.trim();
    const type = document.querySelector('#create-tie-type').value.trim();
    const brand = document.querySelector('#create-tie-brand').value.trim();
    const description = document
      .querySelector('#create-tie-description')
      .value.trim();
    const quantity = document
      .querySelector('#create-tie-quantity')
      .value.trim();

    if (sku && color && type && brand && description && quantity) {
      const response = await fetch('/api/ties', {
        method: 'POST',
        body: JSON.stringify({
          sku,
          color,
          type,
          brand,
          description,
          quantity,
        }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.replace('/products/ties');
      } else {
        alert(response.statusText);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const tieEditFormHandler = async (event) => {
  try {
    event.preventDefault();

    const sku = document.querySelector('#create-tie-sku').value.trim();
    const color = document.querySelector('#create-tie-color').value.trim();
    const type = document.querySelector('#create-tie-type').value.trim();
    const brand = document.querySelector('#create-tie-brand').value.trim();
    const description = document
      .querySelector('#create-tie-description')
      .value.trim();
    const quantity = document
      .querySelector('#create-tie-quantity')
      .value.trim();

    if (sku && color && type && brand && description && quantity) {
      const response = await fetch(`/api/ties/${sku}`, {
        method: 'PUT',
        body: JSON.stringify({
          color,
          type,
          brand,
          description,
          quantity,
        }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.replace('/products/ties');
      } else {
        alert(response.statusText);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const tieCreateForm = document.querySelector('.tie-create-form');
const tieEditForm = document.querySelector('.tie-edit-form');

if (tieCreateForm) {
  tieCreateForm.addEventListener('submit', tieCreateFormHandler);
}

if (tieEditForm) {
  tieEditForm.addEventListener('submit', tieEditFormHandler);
}
