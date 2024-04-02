document.addEventListener('DOMContentLoaded', function() {
    // Attach event listeners once the DOM is fully loaded
    document.querySelectorAll('.hover-description').forEach(item => {
        item.addEventListener('mouseenter', function(e) {
            // Check if the full-description div already exists to avoid duplicates
            let fullDescription = document.querySelector('.full-description');
            if (!fullDescription) {
                fullDescription = document.createElement('div');
                fullDescription.classList.add('full-description');
                document.body.appendChild(fullDescription);
            }
            let fullText = this.getAttribute('data-fulltext').replace(/\|/g, '<br>');


            // Set the text and position of the full description
            fullDescription.innerHTML = fullText;
            fullDescription.style.display = 'block';
            const rect = this.getBoundingClientRect();
            fullDescription.style.left = `${rect.left}px`;
            fullDescription.style.top = `${rect.bottom + window.scrollY}px`;
            fullDescription.style.display = 'block';

            // Hide the full description on mouse leave
            this.addEventListener('mouseleave', function() {
                fullDescription.style.display = 'none';
            });
        });
    });
});
