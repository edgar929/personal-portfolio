let id=location.hash.slice(1);

function renderArticle(article){
    const title=document.querySelector('#title');
    const summary=document.querySelector('#summary');
    const content=document.querySelector('#content');
    title.value=article.title;
    content.value=article.content;
    summary.value = article.summary;
}

db.collection('articles').doc(id).get().then((article)=>{
    renderArticle(article.data());
}) 

const form=document.querySelector('#addArticle');
form.addEventListener('submit', (e) =>{
    e.preventDefault();
    db.collection('articles').doc(id).update({
        
             content: form.content.value,
            picture:'',
            summary: form.summary.value,
            title: form.title.value
    })

    document.querySelector('[name= title]').value=' ';
    document.querySelector('[name= content]').value=' ';

    setTimeout(()=>{
        window.location.href='add-article.html';
    },1500)
})