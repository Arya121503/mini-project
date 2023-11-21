document.addEventListener("DOMContentLoaded", function() {
    // Get the "Contacts" link element
    var contactsLink = document.querySelector('.navbar-nav .nav-link');

    // Get the target section to scroll to
    var contactsSection = document.getElementById('contacts1-2o');

    // Add a click event listener to the "Contacts" link
    contactsLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default behavior of the link
        // Use smooth scrolling to scroll to the target section
        contactsSection.scrollIntoView({ behavior: 'smooth' });
    });
});