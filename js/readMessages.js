const trow = document.querySelector('#messages');

function renderMessage(doc){
    // let li = document.createElement('li');
    // let div = document.createElement('div');
    // let name = document.createElement('span');
    // let message = document.createElement('span');
    // let action1 = document.createElement('button');
    let accord = document.querySelector('.accordion');
    let accpara = document.querySelector('#accMessage');
    let panel = document.querySelector('.panel');
    let div = document.querySelector('#singleMessage')
    li.setAttribute('message-id', doc.id);
    name.textContent = doc.data().fullName+' | '+doc.data().email;
    // div.textContent = doc.data().message;
    action1.textContent = 'delete';

    accord.textContent = doc.data().fullName;
    accpara.textContent = doc.data().message;
    
    panel.appendChild(accpara);
    div.appendChild(accord);
    div.appendChild(panel)
    

    // li.appendChild(name);
    // li.appendChild(div);
    // li.appendChild(div.appendChild(action1));
    // trow.appendChild(li);
    //deleting article
    action1.addEventListener('click', (e)=>{
        e.stopPropagation();
        let id=e.target.parentElement.getAttribute('message-id');
        if(confirm('are you sure you want delete this message?')){
            db.collection('messages').doc.id.delete();
            alert("Document successfully deleted!");
                location.reload();
        }
        
    })
}

db.collection('messages').get().then((snapshot)=>{
    snapshot.docs.forEach(doc=>{
     renderMessage(doc);
    })
})