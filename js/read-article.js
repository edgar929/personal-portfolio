const article = document.querySelector('#retrieve-article');
const art = document.querySelector('#article-detail');

function renderArticle(doc){
    let div = document.querySelector('#retrieve-article');
    let div2 = document.querySelector('#article-detail')
    let tit = document.querySelector('#articleTitle');
    let tit2 = document.querySelector('#articleTitles');
    let summary = document.querySelector('#articleSummary');
    let cont = document.querySelector('#articleContent');

    div.setAttribute('article-id', doc.id);
    tit.textContent = doc.data().title;
    summary.textContent = doc.data().summary;
   

    // article.appendChild(div.appendChild(tit));
    // article.appendChild(div.appendChild(summary));
   

    document.querySelector('#viewMore').addEventListener('click', function(event){
        let id =event.target.parentNode.getAttribute('article-id');
        // console.log(id);
        // let doc2=db.collection('articles').doc(id);
        window.open('blog-details.html');
    })  
}

db.collection('articles').get().then((snapshot)=>{
    snapshot.docs.forEach(doc=>{
     renderArticle(doc);
    })
})