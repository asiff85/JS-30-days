document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('myForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        const formData = new FormData(form);
        const formObject = Object.fromEntries(formData.entries());

        console.log('Form Data:', formObject);
    });
});
