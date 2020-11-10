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



//comments of the blog post

const form = document.querySelector('#commentForm');

form.addEventListener('submit', (e)=>{
          e.preventDefault();
         
            db.collection('comments').add({
              commentId: id,
              name: form.name.value,
              comment: form.comment.value
              
          })
          form.name.value='';
          form.comment.value=''
          
          })

          //reading comments

          function renderComments(doc){
            let div = document.querySelector('#comments');
            let div2 = document.querySelector('.commentor');
            let name = document.createElement('span')
            let comment = document.createElement('p')
            let image = document.createElement('img')
            let hr = document.createElement('hr')

            div.setAttribute('comment-id', doc.id);
            name.textContent = doc.data().name;
            comment.textContent = doc.data().comment;
            
            
            // div2.appendChild(image.src =  '../images/avatar.png')
            div.appendChild(name);
            div.appendChild(comment)
            div.appendChild(hr)
        }
        
        
        db.collection('comments').get().then((snapshot)=>{
            
            snapshot.docs.forEach(doc=>{
                if(doc.data().commentId == id){
                    renderComments(doc);
                }
             
            })
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


