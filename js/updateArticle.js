let id=location.hash.slice(1);
const file = document.querySelector('#pic').value;
let changed = false;
let fil =null;
let image=''
db.collection('articles').doc(id).get().then((article)=>{
    image=article.data().picture;
}) 
function renderArticle(article){
    const title=document.querySelector('#title');
    const summary=document.querySelector('#summary');
    const content=document.querySelector('#content');
    const picture = document.querySelector('#updateImage')
    title.value=article.title;
    content.value=article.content;
    summary.value = article.summary;
    picture.src= image;
}

db.collection('articles').doc(id).get().then((article)=>{
    renderArticle(article.data());
}) 
// file.addEventListener('change', (e) =>{
//     changed=true;
//     fil= e.target.files[0];
// })


const form=document.querySelector('#addArticle');



if (file!==null){
    // console.log('changed')
    // const image = document.querySelector('#pic').files[0];
    // const imageName = image.name;
    // let storageRef = firebase.storage().ref('images/'+ imageName);
    // db.collection('articles').doc(id).get().then((article)=>{
    //     let im =firebase.storage().refFromURL(article.data().picture);
    //     im.delete().then(()=>{
    //         console.log('deleted succefully');
    //         storageRef.put(fil).then((snapshot)=>{
    //             storageRef.getDownloadURL().then(url =>{
    //                db.collection('articles').doc(id).update({
    //                     title:form.title.value,
    //                     summary:form.summary.value,
    //                     content:form.content.value,
    //                     picture:url
    //                 }).then(()=>{
    //                      document.querySelector('[name= title]').value=' ';
    //                      document.querySelector('[name= summary]').value=' ';
    //                     document.querySelector('[name= content]').value=' ';
    //                     console.log('done');
    //                     window.location.href='dashboard.html';
    //                 })
    //             })
    //         })
    //     })
    // })
    // .catch((error =>{
    //     console.log(error);
    // }))
    form.addEventListener('submit', (e)=>{
        e.preventDefault();
       
            uploadImage();
        
        })
}else{
    form.addEventListener('submit', (e) =>{
        e.preventDefault();
        db.collection('articles').doc(id).update({
                 content: form.content.value,
                summary: form.summary.value,
                title: form.title.value
        }).then(function(){
            alert('updated successfully')
        })
    
        myform.reset()
    })
}






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
            db.collection('articles').doc(id).update({
                picture: downloadURL,
                content: form.content.value,
                summary: form.summary.value,
                title: form.title.value
            }).then(function(){
                alert('Successfuly uploaded!');
                form.reset();
                window.location.href = "dashboard.html";
            })
            .catch(function(error) {
                alert('Error uploading post, Try again!');
            });
             
        });
      
    });   
};









// edit article 


// let imagePath = '';
// const renderUpdate = function (article) {
//     const title = document.querySelector('#title');
//     const summary = document.querySelector('#summary');
//     const content = document.querySelector('#content');
//     title.value = article.title;
//     content.value = article.content;
//     summary.value=article.summary;
//     imagePath = article.image;
// };

// const getArticle = function (id) {
//     var docRef = db.collection("articles").doc(id);

//     docRef.get().then(function(doc) {
//         if (doc.exists) {
//             renderUpdate(doc.data());
//         } else {   
//             alert("No such document in the collection!");
//         }
//     })
//     .catch(function(error) {
//         alert("Error getting document: " + error);
//     });
// };

// getArticle(id);

// document.querySelector('#addArticle').addEventListener('submit', function (e) {
//     e.preventDefault();
//     const title = e.target.elements.title.value;
//     const image = e.target.elements.picture.files;
//     const content = e.target.elements.content.value;
    
//     if(image.length === 0){
//         const data = {
//             title: title,
//             content: content
//         };
//         db.collection("articles").doc(id).update(data).then(() => {
//             alert("Article updated successfully but the image is not");
//             // location.assign(`article.html#${id}`);
//         })
//         .catch((error) => {
//             alert(`Update error: ${error}`);
//         });
//     }//END OF IF STATEMENT
//     if (image.length === 1) {
//         // DELETING THE FILE
//         let httpsReference = firebase.storage().ref(imagePath);
//         httpsReference.delete().then(function() {
//             var storageRef = firebase.storage().ref().child(`images/${image[0].name}`);
//                     // UPLOADING NEW IMAGE 
//                     storageRef.put(image[0]).then(function() {
//                         // GETTING IT URL AFTER UPLOADING IT.
//                         storageRef.getDownloadURL().then(url => {
//                             const newPath = url;
//                             // UPDATING ARTICLE IN FIRESTORE
//                             const data = {
//                                 title: title,
//                                 image: newPath,
//                                 content: content
//                             };
//                             db.collection("articles").doc(id).update(data).then(() => {
//                                 alert("Article updated successfully and the new image");
//                                 // location.assign(`article.html#${id}`);
//                             })
//                             .catch((error) => {
//                                 alert(`Update error: ${error}`);
//                             });

//                         })
//                         .catch(error => {
//                             alert('Failed to get the URL');
//                         });

//                     })
//                     .catch(function (error) {
//                         alert("Failed to download image URL to be stored in firestore");
//                     });
//         })
//         .catch(function(error) {
//             switch (error.code) {
//                 case 'storage/object-not-found':
//                     var storageRef = firebase.storage().ref(`images/${image[0].name}`);
//                     // UPLOADING NEW IMAGE 
//                     storageRef.put(image[0]).then(function() {
//                         // GETTING IT URL AFTER UPLOADING IT.
//                         storageRef.getDownloadURL().then(url => {
//                             const newPath = url;
//                             // UPDATING ARTICLE IN FIRESTORE
//                             const data = {
//                                 title: title,
//                                 image: newPath,
//                                 content: content
//                             };
//                             db.collection("articles").doc(id).update(data).then(() => {
//                                 alert("Article updated successfully and the new image");
//                                 location.assign(`article.html#${id}`);
//                             })
//                             .catch((error) => {
//                                 alert(`Update error: ${error}`);
//                             });
//                         })
//                         .catch(error => {
//                             alert('Failed to get the URL');
//                         });
//                     })
//                     .catch(function (error) {
//                         alert("Failed to download image URL to be stored in firestore");
//                     });
//                 break;
//             }
//         });

//     }//END IF THE IF STATEMENT
// });