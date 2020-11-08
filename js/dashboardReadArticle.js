const trow = document.querySelector('#articleTitles');

function renderArticle(doc){
    let li = document.createElement('li');
    let div = document.createElement('div');
    let title = document.createElement('span');
    let action1 = document.createElement('button');
    let action2 = document.createElement('button');

    li.setAttribute('article-id', doc.id);
    title.textContent = doc.data().title;
    action1.textContent = 'delete';
    action2.textContent = 'update';

    li.appendChild(title);
    li.appendChild(div.appendChild(action1));
    li.appendChild(div.appendChild(action2));
    trow.appendChild(li);
    //deleting article
    action1.addEventListener('click', (e)=>{
        e.stopPropagation();
        let id=e.target.parentElement.getAttribute('article-id');
        db.collection('articles').doc(id).delete();
    })

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