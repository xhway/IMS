const pantCreateFormHandler = async (event) => {
  try {
    event.preventDefault();

    const sku = document.querySelector('#create-pant-sku').value.trim();
    const color = document.querySelector('#create-pant-color').value.trim();
    const fit = document.querySelector('#create-pant-fit').value.trim();
    const waist = document.querySelector('#create-pant-waist').value.trim();
    const length = document.querySelector('#create-pant-length').value.trim();
    const brand = document.querySelector('#create-pant-brand').value.trim();
    const description = document
      .querySelector('#create-pant-description')
      .value.trim();
    const quantity = document
      .querySelector('#create-pant-quantity')
      .value.trim();

    if (
      sku &&
      color &&
      fit &&
      waist &&
      length &&
      brand &&
      description &&
      quantity
    ) {
      const response = await fetch('/api/pants', {
        method: 'POST',
        body: JSON.stringify({
          sku,
          color,
          fit,
          waist,
          length,
          brand,
          description,
          quantity,
        }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.replace('/products/pants');
      } else {
        alert(response.statusText);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const pantEditFormHandler = async (event) => {
  try {
    event.preventDefault();

    const sku = document.querySelector('#create-pant-sku').value.trim();
    const color = document.querySelector('#create-pant-color').value.trim();
    const fit = document.querySelector('#create-pant-fit').value.trim();
    const waist = document.querySelector('#create-pant-waist').value.trim();
    const length = document.querySelector('#create-pant-length').value.trim();
    const brand = document.querySelector('#create-pant-brand').value.trim();
    const description = document
      .querySelector('#create-pant-description')
      .value.trim();
    const quantity = document
      .querySelector('#create-pant-quantity')
      .value.trim();

    if (
      sku &&
      color &&
      fit &&
      waist &&
      length &&
      brand &&
      description &&
      quantity
    ) {
      const response = await fetch(`/api/pants/${sku}`, {
        method: 'PUT',
        body: JSON.stringify({
          color,
          fit,
          waist,
          length,
          brand,
          description,
          quantity,
        }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.replace('/products/pants');
      } else {
        alert(response.statusText);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const pantCreateForm = document.querySelector('.pant-create-form');
const pantEditForm = document.querySelector('.pant-edit-form');

if (pantCreateForm) {
  pantCreateForm.addEventListener('submit', pantCreateFormHandler);
}

if (pantEditForm) {
  pantEditForm.addEventListener('submit', pantEditFormHandler);
}
