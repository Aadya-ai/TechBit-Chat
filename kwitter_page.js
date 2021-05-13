//YOUR FIREBASE LINKS

// Your web app's Firebase configuration
var firebaseConfig = { 
      apiKey: "AIzaSyAQr1bGiYKVZgx1mZXEvA-OLPp_EytGx1A", 
      authDomain: "classtest-1b088.firebaseapp.com", 
      databaseURL: "https://classtest-1b088-default-rtdb.firebaseio.com", 
      projectId: "classtest-1b088", 
      storageBucket: "classtest-1b088.appspot.com", 
      messagingSenderId: "63720514657", 
      appId: "1:63720514657:web:323caf317b5a843385b620" 
    }; 
    // Initialize Firebase firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
         console.log(firebase_message_id);
         console.log(message_data);
         name = message_data['name'];
         message = message_data['message'];
         like = message_data['like'];
         name_with_tag = "<h4>" + name + "<img class='user_tick' src='tick.png'></h4>";
         message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
         like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLikes(this.id)'>";
         span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'> Like:" + like + "</span></button><hr>";

         row = name_with_tag + message_with_tag + like_button + span_with_tag;
         document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name : user_name,
            message : msg,
            like : 0
      });
      
      document.getElementById("msg").Value = "";
}

function updateLikes(message_id){
    console.log("clicked on like button - " + message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).Value;
    updated_Likes = Number(likes) + 1;
    console.log(updated_Likes);

    firebase.database().ref(room_name).child(message_id).update({
      like : updated_Likes
    });

}

function logout() {
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location.replace("index.html");
    }
