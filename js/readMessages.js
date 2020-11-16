const trow = document.querySelector('.singleMessage');
db.collection('messages').get().then((snapshot)=>{
    snapshot.docs.forEach(doc=>{
     renderMessage(doc);
    })
})

function renderMessage(doc){
  
    let fullName = document.querySelector('#FullName');
    let message = document.querySelector('#accMessage');
    let panel = document.querySelector('.panel');
    let div = document.querySelector('.theMessage');
    const div2 = document.createElement('div')
    div.setAttribute('message-id', doc.id);
   
    fullName.textContent ='Name: '+doc.data().fullName;
    message.textContent = doc.data().message;
    
    
    div.appendChild(fullName);
    panel.appendChild(message);
    div.appendChild(panel);
    trow.appendChild(div);
    
    
}



