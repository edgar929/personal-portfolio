const trow = document.querySelector('#messages');

function renderMessage(doc){
    let li = document.createElement('li');
    let div = document.createElement('div');
    let name = document.createElement('span');
    let message = document.createElement('span');
    let action1 = document.createElement('button');

    li.setAttribute('message-id', doc.id);
    name.textContent = doc.data().fullName+' | '+doc.data().email;
    // div.textContent = doc.data().message;
    action1.textContent = 'delete';

    li.appendChild(name);
    li.appendChild(div);
    li.appendChild(div.appendChild(action1));
    trow.appendChild(li);
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