const form = document.querySelector('#addArticle');

  //save article
  form.addEventListener('submit', (e)=>{
        e.preventDefault();
        db.collection('articles').add({
            content: form.content.value,
            picture: "",
            summary: form.summary.value,
            title: form.title.value
        });
  });