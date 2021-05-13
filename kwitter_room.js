
//ADD YOUR FIREBASE LINKS HERE


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
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "....!!";

function addRoom(){
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='RedirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function RedirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("room_name");
  localStorage.removeItem("user_name");
  window.location = "index.html";
}