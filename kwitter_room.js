
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyCx8fg1Q5TI13A9KA_S9ahFy4uKrvniMDc",
      authDomain: "kwitter-acc.firebaseapp.com",
      projectId: "kwitter-acc",
      storageBucket: "kwitter-acc.appspot.com",
      messagingSenderId: "448238147634",
      appId: "1:448238147634:web:ee6a9a85b5bbab972e442b"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
