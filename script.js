const form = document.querySelector('#searchForm');

window.onload = () => searchInput.focus();


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const query = document.querySelector('#searchInput').value.trim();

    const urlPattern = /^(https?:\/\/|www\.)/i;

    if (query) {
        if (urlPattern.test(query)) {
            const formattedUrl = query.startsWith('http') ? query : `https://${query}`;
            window.location.href = formattedUrl;
        } else {
            const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
            window.location.href = googleSearchUrl;
        }
    }
});
