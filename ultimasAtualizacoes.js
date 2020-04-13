/*get recently updated articles*/
function getUpdated(){
  
  var finalList = document.createElement('ul');
  var finalListDiv = document.createElement('div');
  finalList.setAttribute("class", "recent-updates-list");
  finalListDiv.setAttribute("class", "recent-updates");
  
  var data = $.parseJSON($.ajax({
        url: '/api/v2/help_center/pt-br/articles.json?sort_by=updated_at&sort_order=desc',
    		contentType:'application/json',
        async: false
    }).responseText);
  
  for(var i=0; i<5; i++){
    
    var article = data.articles[i];
    
    var listItem = document.createElement('li'); 
    var link = document.createElement('a');
    link.innerHTML = article.title;
    link.setAttribute("href", article.html_url);
    
    if(article.title.length > 50){
      
      if(window.screen.width >= 1600){
          link.style.fontSize = "96%";
      }
      else if(window.screen.width >= 1200){
          link.style.fontSize = "90%";
      }
      else if (window.screen.width >= 1024){
        link.style.fontSize = "83%";
      }
      
    }
    
    listItem.appendChild(link)
    
    //para adicionar um cadeado ao lado dos links de artigos internos
    if(article.section_id == /*adicionar aqui a ID da seção ou das seções do seu Help Center que correspondem aos artigos internos*/ ){
      var spanLock = document.createElement('span');
      spanLock.setAttribute("class", "icon-lock");
      
      link.appendChild(spanLock);
    }
    finalList.appendChild(listItem);
  }
  
  finalListDiv.appendChild(finalList);
  
  return finalListDiv;
  
}
