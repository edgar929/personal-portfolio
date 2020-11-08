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
    
     div.appendChild(image);
     div.appendChild(tit);
     div.appendChild(summary);
     div.appendChild(btn);
     div.appendChild(hr);
     
    btn.addEventListener('click', (e)=>{
        e.stopPropagation();
        let id=e.target.parentElement.getAttribute('article-id');
         window.location.href=`blog-details.html#${id}`;
        
    })
}

db.collection('articles').get().then((snapshot)=>{
    snapshot.docs.forEach(doc=>{
     renderArticle(doc);
     console.log(doc.data())
    })
})

