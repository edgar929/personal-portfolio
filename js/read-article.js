const article = document.querySelector('#retrieve-article');
const art = document.querySelector('#article-detail');

function renderArticle(doc){
    let div = document.querySelector('#retrieve-article');
    let a = document.createElement('a');
    let tit = document.createElement('h2');
    let summary = document.createElement('p');
    let image = document.createElement('img');
    let btn = document.createElement('button');
    let  hr= document.createElement('hr');
    
    div.setAttribute('article-id', doc.id);
    tit.textContent = doc.data().title;
    summary.textContent = doc.data().summary;
    image.textContent = '';
    btn.textContent='view more';
    
    article.appendChild(div.appendChild(image));
    a.appendChild(article.appendChild(div.appendChild(tit)));
     article.appendChild(div.appendChild(summary));
     article.appendChild(div.appendChild(btn));
     article.appendChild(div.appendChild(hr));
     
    // document.querySelector('#viewMore').addEventListener('click', function(event){
    //     let id =event.target.parentNode.getAttribute('article-id');
       
    //     window.open('blog-details.html');
    // })  
}

db.collection('articles').get().then((snapshot)=>{
    snapshot.docs.forEach(doc=>{
     renderArticle(doc);
     console.log(doc.data())
    })
})