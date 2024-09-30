function showMore(projectId) {
    const project = document.getElementById(projectId);
    const moreInfo = project.querySelector('.more-info');
    if (moreInfo.style.display === 'none' || moreInfo.style.display === '') {
        moreInfo.style.display = 'block';
    } else {
        moreInfo.style.display = 'none';
    }
}

// Optional: You can add form submission handling here
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted! Thank you for your message.');
});
