let id =window.Hash.slice(1);

function renderArticle(doc){
    

    //updating article
    action2.addEventListener('click', (e)=>{
        e.stopPropagation();
        let id=e.target.parentElement.getAttribute('article-id');
         window.location.href=`add-article.html#${id}`;
    })

}

db.collection('articles').get().then((snapshot)=>{
    snapshot.docs.forEach(doc=>{
     renderArticle(doc);
    })
})