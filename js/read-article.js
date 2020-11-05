const article = document.querySelector('#retrieve-article');

function renderArticle(doc){
    let div = document.querySelector('#retrieve-article');
    let tit = document.querySelector('#articleTitle');
    let summary = document.querySelector('#articleSummary');
    let cont = document.querySelector('#articleContent');

    div.setAttribute('article-id', doc.id);
    tit.textContent = doc.data().title;
    summary.textContent = doc.data().summary;

    article.appendChild(div.appendChild(tit));
    article.appendChild(div.appendChild(summary));
}

db.collection('articles').get().then((snapshot)=>{
    snapshot.docs.forEach(doc=>{
     renderArticle(doc);
    })
})