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
            if(confirm('are you sure you want to delete this article?')){
                db.collection('articles').doc(id).delete().then(()=>{
                    alert('article deleted successful')
                }); 
            } 
            
    })

    //updating article
    action2.addEventListener('click', (e)=>{
        e.stopPropagation();
        let id=e.target.parentElement.getAttribute('article-id');
         window.location.href=`update-article.html#${id}`;
    })

}

// db.collection('articles').get().then((snapshot)=>{
//     snapshot.docs.forEach(doc=>{
//      renderArticle(doc);
//     })
// })
window.onload=function(){
    db.collection('articles').onSnapshot(snapshot =>{
        let changes =snapshot.docChanges();
        changes.forEach(change =>{
            if(change.type == 'added'){
                renderArticle(change.doc);
            }
            else if(change.type == 'removed'){
                let art =document.querySelector('[article-id =' +change.doc.id +']');
                trow.removeChild(art);
            }
        })
    })
}

