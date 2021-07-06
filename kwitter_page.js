// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCDMXKLnTReGpJleFzth5YLEl5gUSe5ngk",
      authDomain: "school-chat-web.firebaseapp.com",
      databaseURL: "https://school-chat-web-default-rtdb.firebaseio.com",
      projectId: "school-chat-web",
      storageBucket: "school-chat-web.appspot.com",
      messagingSenderId: "569722893313",
      appId: "1:569722893313:web:cecaa9f0a1ebac6c333c00"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
    function send()
    {
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
          document.getElementById("msg").value="";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
