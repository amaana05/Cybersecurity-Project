document.getElementById('fetchNewsButton').addEventListener('click', fetchNews);

async function fetchNews() {
    // const apiKey = 'YOUR_API_KEY';
    const apiUrl = 'https://saurav.tech/NewsAPI/top-headlines/category/technology/us.json';
    const apiUrl1 = 'https://saurav.tech/NewsAPI/top-headlines/category/technology/in.json'

    try {
        const response = await fetch(apiUrl);
        const repsonse1 = await fetch(apiUrl1)
        const data = await response.json();
        const data1 = await repsonse1.json();

        displayNews(data.articles);
        displayNews(data1.articles);
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
