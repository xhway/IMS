const shirtCreateFormHandler = async (event) => {
  try {
    event.preventDefault();

    const sku = document.querySelector('#create-shirt-sku').value.trim();
    const color = document.querySelector('#create-shirt-color').value.trim();
    const fit = document.querySelector('#create-shirt-fit').value.trim();
    const neckSize = document
      .querySelector('#create-shirt-neck-size')
      .value.trim();
    const armLength = document
      .querySelector('#create-shirt-arm-length')
      .value.trim();
    const brand = document.querySelector('#create-shirt-brand').value.trim();
    const description = document
      .querySelector('#create-shirt-description')
      .value.trim();
    const quantity = document
      .querySelector('#create-shirt-quantity')
      .value.trim();

    if (
      sku &&
      color &&
      fit &&
      neckSize &&
      armLength &&
      brand &&
      description &&
      quantity
    ) {
      const response = await fetch('/api/shirts', {
        method: 'POST',
        body: JSON.stringify({
          sku,
          color,
          fit,
          neck_size: neckSize,
          arm_length: armLength,
          brand,
          description,
          quantity,
        }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.replace('/products/shirts');
      } else {
        alert(response.statusText);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const shirtEditFormHandler = async (event) => {
  try {
    event.preventDefault();

    const sku = document.querySelector('#create-shirt-sku').value.trim();
    const color = document.querySelector('#create-shirt-color').value.trim();
    const fit = document.querySelector('#create-shirt-fit').value.trim();
    const neckSize = document
      .querySelector('#create-shirt-neck-size')
      .value.trim();
    const armLength = document
      .querySelector('#create-shirt-arm-length')
      .value.trim();
    const brand = document.querySelector('#create-shirt-brand').value.trim();
    const description = document
      .querySelector('#create-shirt-description')
      .value.trim();
    const quantity = document
      .querySelector('#create-shirt-quantity')
      .value.trim();

    if (
      sku &&
      color &&
      fit &&
      neckSize &&
      armLength &&
      brand &&
      description &&
      quantity
    ) {
      const response = await fetch(`/api/shirts/${sku}`, {
        method: 'PUT',
        body: JSON.stringify({
          color,
          fit,
          neck_size: neckSize,
          arm_length: armLength,
          brand,
          description,
          quantity,
        }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.replace('/products/shirts');
      } else {
        alert(response.statusText);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const shirtCreateForm = document.querySelector('.shirt-create-form');
const shirtEditForm = document.querySelector('.shirt-edit-form');

if (shirtCreateForm) {
  shirtCreateForm.addEventListener('submit', shirtCreateFormHandler);
}

if (shirtEditForm) {
  shirtEditForm.addEventListener('submit', shirtEditFormHandler);
}
