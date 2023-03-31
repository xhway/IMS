const shoeCreateFormHandler = async (event) => {
  try {
    event.preventDefault();

    const sku = document.querySelector('#create-shoe-sku').value.trim();
    const color = document.querySelector('#create-shoe-color').value.trim();
    const size = document.querySelector('#create-shoe-size').value.trim();
    const brand = document.querySelector('#create-shoe-brand').value.trim();
    const description = document
      .querySelector('#create-shoe-description')
      .value.trim();
    const quantity = document
      .querySelector('#create-shoe-quantity')
      .value.trim();

    if (sku && color && size && brand && description && quantity) {
      const response = await fetch('/api/shoes', {
        method: 'POST',
        body: JSON.stringify({
          sku,
          color,
          size,
          brand,
          description,
          quantity,
        }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.replace('/products/shoes');
      } else {
        alert(response.statusText);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const shoeEditFormHandler = async (event) => {
  try {
    event.preventDefault();

    const sku = document.querySelector('#create-shoe-sku').value.trim();
    const color = document.querySelector('#create-shoe-color').value.trim();
    const size = document.querySelector('#create-shoe-size').value.trim();
    const brand = document.querySelector('#create-shoe-brand').value.trim();
    const description = document
      .querySelector('#create-shoe-description')
      .value.trim();
    const quantity = document
      .querySelector('#create-shoe-quantity')
      .value.trim();

    if (sku && color && size && brand && description && quantity) {
      const response = await fetch(`/api/shoes/${sku}`, {
        method: 'PUT',
        body: JSON.stringify({
          color,
          size,
          brand,
          description,
          quantity,
        }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.replace('/products/shoes');
      } else {
        alert(response.statusText);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const shoeCreateForm = document.querySelector('.shoe-create-form');
const shoeEditForm = document.querySelector('.shoe-edit-form');

if (shoeCreateForm) {
  shoeCreateForm.addEventListener('submit', shoeCreateFormHandler);
}

if (shoeEditForm) {
  shoeEditForm.addEventListener('submit', shoeEditFormHandler);
}
