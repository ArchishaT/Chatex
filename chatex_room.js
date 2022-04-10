const firebaseConfig = {
    apiKey: "AIzaSyA_Uo1gzSUConBsXe0aJqsVwTumNUQS5FU",
    authDomain: "chatex-fd102.firebaseapp.com",
    projectId: "chatex-fd102",
    storageBucket: "chatex-fd102.appspot.com",
    messagingSenderId: "874747655229",
    appId: "1:874747655229:web:d908403e4c06cba383e654"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  function logout(){
      
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = chatex.html;
}

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
 room_name = document.getElementById("room_name").value;

 firebase.database().ref("/").child(room_name).update({
   purpose : "adding room name"
 });

   localStorage.setItem("room_name", room_name);
   
   window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
     row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML += row;
   });
 });

}

getData();

function redirectToRoomName(name)
{
 console.log(name);
 localStorage.setItem("room_name", name);
   window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
   window.location = chatex.html;
}
