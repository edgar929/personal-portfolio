let id=location.hash.slice(1);

function renderArticle(article){
    const title=document.querySelector('#blogTitle');
    const content=document.querySelector('#blogContent');
    const picture=document.querySelector('#blogPicture');
    title.textContent=article.title;
    content.textContent=article.content;
    picture.src = article.picture;
}

db.collection('articles').doc(id).get().then((article)=>{
    renderArticle(article.data());
}) 

//comments of the blog post

const form = document.querySelector('#commentForm');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const name = document.querySelector('#commentorName'); 
    const comment = document.querySelector('#commentorComment'); 
    db.collection('articles').doc(id).add({
        comment:{
            name,
            comment
        }
    })
})
