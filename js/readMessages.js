const trow = document.querySelector('#singleMessages');

function renderMessage(doc){
    // let li = document.createElement('li');
    // let div = document.createElement('div');
    // let name = document.createElement('span');
    // let message = document.createElement('span');
    // let action1 = document.createElement('button');
    let fullName = document.querySelector('#FullName');
    let message = document.querySelector('#accMessage');
    let panel = document.querySelector('.panel');
    let div = document.querySelector('#theMessage')
    div.setAttribute('message-id', doc.id);
    // name.textContent = doc.data().fullName+' | '+doc.data().email;
    // div.textContent = doc.data().message;
    // action1.textContent = 'delete';

    fullName.textContent ='Name: '+doc.data().fullName;
    message.textContent = doc.data().message;
    
    
    div.appendChild(fullName);
    panel.appendChild(message);
    div.appendChild(panel);
    trow.appendChild(div);

    // li.appendChild(name);
    // li.appendChild(div);
    // li.appendChild(div.appendChild(action1));
    // trow.appendChild(li);
    //deleting article
    // action1.addEventListener('click', (e)=>{
    //     e.stopPropagation();
    //     let id=e.target.parentElement.getAttribute('message-id');
    //     if(confirm('are you sure you want delete this message?')){
    //         db.collection('messages').doc.id.delete();
    //         alert("Document successfully deleted!");
    //             location.reload();
    //     }
        
    // })
}

db.collection('messages').get().then((snapshot)=>{
    snapshot.docs.forEach(doc=>{
     renderMessage(doc);
    })
})