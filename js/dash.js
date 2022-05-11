const getAllArticlesApi = 'https://armand-api.herokuapp.com/api/getAllArticles';

fetch(`${getAllArticlesApi}`)
  .then((res) => {
      
    if (res.ok) {
      res.json().then((jsonResponse) => {
        console.log(jsonResponse);
        let articleData = jsonResponse;
        if (articleData.length > 0) {
          articleData.forEach((article) => {
            document.getElementById('title-display-content').innerHTML += `
            <ul>
            <li>1</li>
            <li>${article.topic}</li>
            <li><a href="#" class="btn">Delete</a> </li>
            </ul>
            
            `;
          });
        }
      });
    }
  })
  .catch((err) => console.log(err));
