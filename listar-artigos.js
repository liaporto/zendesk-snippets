/*get and list links of any number of Zendesk Articles returned from a Zendesk Articles API request*/
function getUpdatedOptions(url, nOfArticles) {

    var finalList = document.createElement('ul');
    var finalListDiv = document.createElement('div');
    finalList.setAttribute("class", "my-custom-list");
    finalListDiv.setAttribute("class", "my-custom-list-div");

    var data = $.parseJSON($.ajax({
        url: url,
        contentType: 'application/json',
        async: false
    }).responseText);

    for (var i = 0; i < nOfArticles; i++) {

        var article = data.articles[i];

        var listItem = document.createElement('li');
        var link = document.createElement('a');
        link.innerHTML = article.title;
        link.setAttribute("href", article.html_url);
        link.setAttribute("target", "_blank");

        if (article.title.length > 50) {

            if (window.screen.width >= 1600) {
                link.style.fontSize = "96%";
            }
            else if (window.screen.width >= 1200) {
                link.style.fontSize = "90%";
            }
            else if (window.screen.width >= 1024) {
                link.style.fontSize = "83%";
            }

        }

        listItem.appendChild(link)

        if (article.section_id == 360005979072) {
            var spanLock = document.createElement('span');
            spanLock.setAttribute("class", "icon-lock");

            link.appendChild(spanLock);
        }
        finalList.appendChild(listItem);
    }

    finalListDiv.appendChild(finalList);

    return finalListDiv;

}
