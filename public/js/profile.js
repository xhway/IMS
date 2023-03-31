const checkInventoryButton = async (e) => {
  e.preventDefault();

  const category = document.querySelector('#category').value.trim();

  if (category) {
      const response = await fetch(`/api/${category}`, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
          },
      });
  }
};

const newFormHandler = async (event) => {
  event.preventDefault();

  const category = document.querySelector('#category');
  const sku = document.querySelector('#sku');
  const color = document.querySelector('#color');
  const fit = document.querySelector('#fit');
  const chest_size = document.querySelector('#chest_size');
  const arm_length = document.querySelector('#arm_length');
  const brand = document.querySelector('#brand');
  const description = document.querySelector('#description');
  const quantity = document.querySelector('#quantity');
  const waist = document.querySelector('#waist');
  const length = document.querySelector('#length');
  const neck_size = document.querySelector('#neck_size');
  const size = document.querySelector('#size');
  const type = document.querySelector('#type');

// Check if all fields for Jackets are completed//
  if (category && sku && color && fit && chest_size && arm_length && brand && description && quantity) {
    const response = await fetch(`/api/${category}`, {
      method: 'POST',
      body: JSON.stringify({ category, sku, color, fit, chest_size, arm_length, brand, description, quantity}),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.alert('Your item has been created!')
      document.location.replace('/profile');
    } else {
      alert('Failed to create new item');
    }
  };

  // Check if all fields for Pants are completed//
  if (category && sku && color && fit && brand && description && quantity && waist && length) {
    const response = await fetch(`/api/${category}`, {
      method: 'POST',
      body: JSON.stringify({ category, sku, color, fit, brand, description, quantity, waist, length}),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.alert('Your item has been created!')
      document.location.replace('/profile');
    } else {
      alert('Failed to create new item');
    }
  };

  // Check if all fields for Shirts are completed//
  if (category && sku && color && fit && arm_length && brand && description && quantity && neck_size) {
    const response = await fetch(`/api/${category}`, {
      method: 'POST',
      body: JSON.stringify({ category, sku, color, fit, arm_length, brand, description, quantity, neck_size}),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.alert('Your item has been created!')
      document.location.replace('/profile');
    } else {
      alert('Failed to create new item');
    }
  };

  // Check if all fields for Shoes are completed//
  if (category && sku && color && brand && description && quantity && size) {
    const response = await fetch(`/api/${category}`, {
      method: 'POST',
      body: JSON.stringify({ category, sku, color, brand, description, quantity, size }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.alert('Your item has been created!')
      document.location.replace('/profile');
    } else {
      alert('Failed to create new item');
    }
  };

// Check if all fields for tie are completed//
  if (category && sku && color && brand && description && quantity && type) {
    const response = await fetch(`/api/${category}`, {
      method: 'POST',
      body: JSON.stringify({ category, sku, color, brand, description, quantity, type}),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.alert('Your item has been created!')
      document.location.replace('/profile');
    } else {
      alert('Failed to create new item');
    }
  };
};



const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/projects/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to discontinue item');
    }
  }
};

document
  .querySelector('#check-inventory')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.new-item-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.project-list')
  .addEventListener('click', delButtonHandler);
