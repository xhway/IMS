const jacketCreateFormHandler = async (event) => {
  try {
    event.preventDefault();

    const sku = document.querySelector('#create-jacket-sku').value.trim();
    const color = document.querySelector('#create-jacket-color').value.trim();
    const fit = document.querySelector('#create-jacket-fit').value.trim();
    const chestSize = document
      .querySelector('#create-jacket-chest-size')
      .value.trim();
    const armLength = document
      .querySelector('#create-jacket-arm-length')
      .value.trim();
    const brand = document.querySelector('#create-jacket-brand').value.trim();
    const description = document
      .querySelector('#create-jacket-description')
      .value.trim();
    const quantity = document
      .querySelector('#create-jacket-quantity')
      .value.trim();

    if (
      sku &&
      color &&
      fit &&
      chestSize &&
      armLength &&
      brand &&
      description &&
      quantity
    ) {
      const response = await fetch('/api/jacket', {
        method: 'POST',
        body: JSON.stringify({
          sku,
          color,
          fit,
          chest_size: chestSize,
          arm_length: armLength,
          brand,
          description,
          quantity,
        }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.replace('/products/jackets');
      } else {
        alert(response.statusText);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const jacketEditFormHandler = async (event) => {
  try {
    event.preventDefault();

    const sku = document.querySelector('#create-jacket-sku').value.trim();
    const color = document.querySelector('#create-jacket-color').value.trim();
    const fit = document.querySelector('#create-jacket-fit').value.trim();
    const chestSize = document
      .querySelector('#create-jacket-chest-size')
      .value.trim();
    const armLength = document
      .querySelector('#create-jacket-arm-length')
      .value.trim();
    const brand = document.querySelector('#create-jacket-brand').value.trim();
    const description = document
      .querySelector('#create-jacket-description')
      .value.trim();
    const quantity = document
      .querySelector('#create-jacket-quantity')
      .value.trim();

    if (
      sku &&
      color &&
      fit &&
      chestSize &&
      armLength &&
      brand &&
      description &&
      quantity
    ) {
      const response = await fetch(`/api/jacket/${sku}`, {
        method: 'PUT',
        body: JSON.stringify({
          color,
          fit,
          chest_size: chestSize,
          arm_length: armLength,
          brand,
          description,
          quantity,
        }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.replace('/products/jackets');
      } else {
        alert(response.statusText);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const jacketCreateForm = document.querySelector('.jacket-create-form');
const jacketEditForm = document.querySelector('.jacket-edit-form');

if (jacketCreateForm) {
  jacketCreateForm.addEventListener('submit', jacketCreateFormHandler);
}

if (jacketEditForm) {
  jacketEditForm.addEventListener('submit', jacketEditFormHandler);
}
