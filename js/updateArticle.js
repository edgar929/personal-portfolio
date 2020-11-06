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

const form=document.querySelector('#new-post');
form.addEventListener('submit', e =>{
    e.preventDefault();
    db.collection('posts').doc(id).update({
        title:form.title.value,
        content:form.content.value,
        image:'../Image/blog1.jpg'
    })

    document.querySelector('[name= title]').value=' ';
    document.querySelector('[name= content]').value=' ';

    setTimeout(()=>{
        window.location.href='add-article.html';
    },1500)
})