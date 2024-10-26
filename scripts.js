document.querySelectorAll('.service-box').forEach(box => {
    box.addEventListener('mouseover', () => {
        box.style.backgroundColor = '#525ffb';
        box.style.color = 'white';
    });
    box.addEventListener('mouseout', () => {
        box.style.backgroundColor = '#f1f1f1';
        box.style.color = 'black';
    });
});
