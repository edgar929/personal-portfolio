const form = document.querySelector('#addArticle');
form.addEventListener('submit', (e)=>{
  e.preventDefault();
 
      uploadImage();
  
  })

  //save article
  // form.addEventListener('submit', (e)=>{
  //       e.preventDefault();
       
  //         db.collection('articles').add({
  //           content: form.content.value,
  //           picture:'',
  //           summary: form.summary.value,
  //           title: form.title.value
  //       })
  //       form.title.value='';
  //       form.summary.value='';
  //       form.content.value='';
  //       })
     

  
  
  function uploadImage(){
    //get image
    const image = document.querySelector('#pic').files[0];
    const imageName = image.name;
    //ref to root storage + image storage
    var storageRef = firebase.storage().ref('images/'+imageName);
    //upload image to selected storage
    const uploadTask = storageRef.put(image);
    //get upload progress
    uploadTask.on('state_changed', function(snapshot){
        //get progress
        const progress = (snapshot.bytestransferred/snapshot.totalBytes)*100;
        console.log("Upload is " +progress+ " done");
    }, function(error){
        //handle errors
        console.log(error.message);
    }, function(){
        //handle successful upload
        
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
            db.collection('articles').add({
                picture: downloadURL,
                content: form.content.value,
                summary: form.summary.value,
                title: form.title.value
            }).then(function(){
                alert('Successfuly uploaded!');
                form.reset();
                // window.location.href = "../html/blog.html";
            })
            .catch(function(error) {
                alert('Error uploading post, Try again!');
            });
             
        });
      
    });   
};

