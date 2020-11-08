const form = document.querySelector('#addArticle');

  //save article
  form.addEventListener('submit', (e)=>{
        e.preventDefault();
       
          db.collection('articles').add({
            content: form.content.value,
            picture:'',
            summary: form.summary.value,
            title: form.title.value
        })
        form.title.value='';
        form.summary.value='';
        form.content.value='';
        })
     

  // function upload(){
  //   var image = document.getElementById('pic').files[0];
  //   var content= document.getElementById('content').value;
  //    var summary=document.getElementById('summary').value;
  //      var title= document.getElementById('title').value;
  //      var imageName = image.name;
  //      var storageRef = firebase.storage().ref('images/'+imageName);
  //      var uploadTask = storageRef.put(image);
  //      uploadTask.on('state changed',function(snapshot){
  //       var progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
  //       console.log("upload is"+progress+"done");
  //      },function(error){
  //       console.log(error.message);
  //      },function(){
  //       uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
  //         firebase.database().ref('articles/').set({
  //           content:content,
  //           picture:downloadURL,
  //           summary:summary,
  //           title:title
  //         },function(error){
  //                   if(error){
  //                     alert('error while uploading');
  //                   }else{
  //                     alert('successfully upload ');
  //                     document.querySelector('#addArticle').reset();
  //                   }
  //                 });

  //       });
  //      });
  // }