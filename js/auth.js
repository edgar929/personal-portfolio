 import{ auth, db } from './firebaseConfig.js'



  const signinForm = document.querySelector('#signin-form')
  
  if(signinForm){
  signinForm.addEventListener('submit', (e)=>{
    e.preventDefault();
      const email = signinForm['signin-email'].value;
      const password = signinForm['signin-password'].value;
  
      //signin users
      auth.signInWithEmailAndPassword(email, password).then(cred=>{
          window.location.href="dashboard.html";
          
      }).catch(error => {
        
          switch (error.code) {
             case 'auth/user-not-found':
              document.querySelector('#error').textContent='user not found';
               break;
             case 'auth/invalid-email':
              document.querySelector('#email-error').textContent='invalid email';
               break;
            //  case 'auth/operation-not-allowed':
            //   alert(`Error during sign up.`);
            //    break;
             case 'auth/weak-password':
              document.querySelector('#password-error').textContent='weak password';
               break;
             default:
              document.querySelector('#error').textContent ='password and email are incorrect';
               break;
           }
       });
  })
  }
  
  
  
  