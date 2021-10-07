/*
This is the JavaScript file containing the logic for the home.html website.
Created by Liam Todd
*/

const NEWS_ACCESS_TOKEN = "492ccef29a1d4970a7295b69280916ad";
const URL = "https://newsapi.org/v2/everything?";
// for dynamic news search
const KEYWORDS = ["COVID", "CORONAVIRUS", localStorage.getItem('user-state'), localStorage.getItem('user-country')];

/*
generates request url to call API, accepts array of keyword strings
*/

function urlGenerator(keyWords){

    let url = URL
        + "language=en"             // language=english
        + "&q=";
    
     // add keywords to news search
    for (i=0; i<keyWords.length; i++){
        url += keyWords[i];
        if (i < keyWords.length - 1){
            url += ", ";
        }
    }

    url += "&qInTitle=";

    // search for keywords in title too
    for (i=0; i<keyWords.length; i++){
        url += keyWords[i];
        if (i < keyWords.length - 1){
            url += ", ";
        }
    }

    // only search previous 5 days
    let fiveDaysAgo = new Date()
    fiveDaysAgo.setDate(fiveDaysAgo.getDate() - 5)
    fiveDaysAgo = fiveDaysAgo.toISOString().slice(0,10)
    url += "&from=" + fiveDaysAgo
    
    // add access token to url
    url += "&apiKey=" + NEWS_ACCESS_TOKEN;

    return url;
}

/*
displays news on page
*/
function getNews(){

    // generate api request

    urlRequest = urlGenerator(KEYWORDS);;
    newsArticles = fetch(urlRequest)
    .then(response => response.json()
    .then(data => {
        console.log(data)

        // iterate over articles in response
        
        for (i=0;i<data.articles.length;i++){

            // get image from article
            let imageInnerHtml = data.articles[i].urlToImage;

            // create news card to be displayed on page
            newsCard =     
            `
            <div class="demo-card-wide mdl-card mdl-shadow--2dp">
            <div class="mdl-card__title">
              <h2 class="mdl-card__title-text" style="color:grey;font-size:17px">${data.articles[i].title}</h2>
            </div>
            <img src=${imageInnerHtml}>
            <div class="mdl-card__supporting-text">
              ${data.articles[i].description}
            </div>
            <div class="mdl-card__actions mdl-card--border">
                <a href=${data.articles[i].url} style='color:grey'>See full story</a>
            </div>
          </div>;
          `
        //   append news card to page
          document.getElementById('output').innerHTML += newsCard
        }
    }))
}


/*
get user's address and display news on load
*/
getNews();


