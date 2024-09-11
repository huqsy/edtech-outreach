// Function to show the selected page
function showPage(pageId) {
    // Hide home page
    document.getElementById('home-page').style.display = 'none';

    // Hide all other pages (add your pages dynamically)
    document.querySelectorAll('.page').forEach(page => page.style.display = 'none');

    // Show the selected pain point page (if it's part of your dynamic structure)
    document.getElementById(`${pageId}-page`).style.display = 'block';
}

// Function to go back to the home page
function goBack() {
    // Hide all pain point pages
    document.querySelectorAll('.page').forEach(page => page.style.display = 'none');

    // Show the home page again
    document.getElementById('home-page').style.display = 'block';
}
