/*
This file is to be kept in case we change News API's since there are many pros/cons to each
(file will be removed from repo before final submission)
*/
const NEWS_ACCESS_TOKEN = "492ccef29a1d4970a7295b69280916ad";
const URL = "https://newsapi.org/v2/everything?";

// for testing:
const KEYWORDS = ["COVID", "MELBOURNE"];

/*
dialog box handler
*/

function getUserAddress(){
    let dialog = document.querySelector('dialog');
    if (! dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }
    dialog.showModal();

}

/*
onclick function for dialog box
*/
function exitDialog(){
    let suburb = document.getElementById('suburb').value;
    let street = document.getElementById('street-name').value;
    let number = document.getElementById('street-number').value;
    let dialog = document.querySelector('dialog');
    dialog.close();
    address = number + ' ' + street + ' ' + suburb;
    console.log(address);
    return address;

}

/*
generates request url to call API, accepts array of keyword strings
*/

function urlGenerator(keyWords){

    let url = URL
        + "language=en"             // language=english
        + "&q=";
    
    for (i=0; i<keyWords.length; i++){
        url += keyWords[i];
        if (i < keyWords.length - 1){
            url += ", ";
        }
    }

    url += "&qInTitle=";

    for (i=0; i<keyWords.length; i++){
        url += keyWords[i];
        if (i < keyWords.length - 1){
            url += ", ";
        }
    }

    url += "&apiKey=" + NEWS_ACCESS_TOKEN;


    console.log(url)
    return url;
}

/*
displays news on page
*/
function getNews(){

    urlRequest = urlGenerator(KEYWORDS);;
    newsArticles = fetch(urlRequest)
    .then(response => response.json()
    .then(data => {
        console.log(data)
        
        for (i=0;i<data.articles.length;i++){

            let imageInnerHtml = data.articles[i].urlToImage;

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
          document.getElementById('output').innerHTML += newsCard
        }
    }))
}

/*
get user's address and display news on load
*/
getUserAddress();
getNews();