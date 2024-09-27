const stars = document.querySelectorAll('.rating input');
stars.forEach(str => {
    str.addEventListener('change', () => {
        const ratingValue = stars.id.replace('star', '');
        alert('you rated ${ratingValue} stars');
    });
});