const categoryButtonHandler = async (e) => {
    e.preventDefault();

    const category = document.querySelector('#category').ariaValueMax.trim();

    if (category) {
        const response = await fetch(`/api/${category}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}