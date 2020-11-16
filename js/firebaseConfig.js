var firebaseConfig = {
    apiKey: "AIzaSyA5DqS37CxCsVTe4irBFN97DL29F8cZPPg",
    authDomain: "capstone-project-b846a.firebaseapp.com",
    databaseURL: "https://capstone-project-b846a.firebaseio.com",
    projectId: "capstone-project-b846a",
    storageBucket: "capstone-project-b846a.appspot.com",
    messagingSenderId: "770713433981",
    appId: "1:770713433981:web:83d1a849d35ee817f83e14",
    measurementId: "G-QS3ECVY943"
  };



   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   firebase.analytics();
   const auth = firebase.auth();
   const db = firebase.firestore();
  db.settings({timestampsInSnapshots:true});



  export {
      auth,
      db
  }
