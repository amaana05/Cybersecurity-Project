document.getElementById('fetchNewsButton').addEventListener('click', fetchNews);

async function fetchNews() {
    // const apiKey = 'YOUR_API_KEY';
    const apiUrl = 'https://saurav.tech/NewsAPI/top-headlines/category/technology/us.json';

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        displayNews(data.articles);
    } catch (error) {
        console.error('Error fetching news:', error);
        document.getElementById('newsContainer').innerHTML = `<p style="color: red;">Error loading news.</p>`;
    } 
}

function displayNews(articles) {
    const newsContainer = document.getElementById('newsContainer');
    newsContainer.innerHTML = '';

    articles.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.classList.add('article');

        articleElement.innerHTML = `
            <img src="${article.urlToImage}" alt="News Image">
            <h2>${article.title}</h2>
            <p>${article.description}</p>
            <a href="${article.url}" target="_blank">Read more</a>
        `;

        newsContainer.appendChild(articleElement);
    });
}
