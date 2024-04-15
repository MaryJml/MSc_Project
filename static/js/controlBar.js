document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.toggle-sidebar');
    const sidebar = document.querySelector('.bar');

    toggleButton.addEventListener('click', function() {
        sidebar.classList.toggle('active');
        toggleButton.textContent = sidebar.classList.contains('active') ? '«' : '≡';
    });
});