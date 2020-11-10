
let form = document.querySelector('#myContactForm')

form.addEventListener('submit', (e)=>{
        e.preventDefault();
       
          db.collection('messages').add({
            fullName: form.fullName.value,
            email: form.email.value,
            message: form.message.value
        }).then(function(){
            alert('Message sent..');
            form.reset();
        })
        
        })

