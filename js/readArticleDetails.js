let id=location.hash.slice(1);
console.log(id)
function renderArticle(article){
    const title=document.querySelector('#blogTitle');
    const content=document.querySelector('#blogContent');
    const picture=document.querySelector('#blogPicture');
    title.textContent=article.title;
    content.textContent=article.content;
    picture.textContent = article.picture;
}

db.collection('articles').doc(id).get().then((article)=>{
    renderArticle(article.data());
}) 

// const form=document.querySelector('#addArticle');
// form.addEventListener('submit', (e) =>{
//     e.preventDefault();
//     db.collection('articles').doc(id).update({
        
//              content: form.content.value,
//             picture:'',
//             summary: form.summary.value,
//             title: form.title.value
//     })

//     document.querySelector('[name= title]').value=' ';
//     document.querySelector('[name= content]').value=' ';

//     setTimeout(()=>{
//         window.location.href='add-article.html';
//     },1500)
// })

