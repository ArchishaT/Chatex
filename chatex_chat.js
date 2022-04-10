const firebaseConfig = {
    apiKey: "AIzaSyA_Uo1gzSUConBsXe0aJqsVwTumNUQS5FU",
    authDomain: "chatex-fd102.firebaseapp.com",
    databaseURL: "https://chatex-fd102-default-rtdb.firebaseio.com",
    projectId: "chatex-fd102",
    storageBucket: "chatex-fd102.appspot.com",
    messagingSenderId: "874747655229",
    appId: "1:874747655229:web:d908403e4c06cba383e654"
  };
  
  // Initialize Firebase
  initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function send(){
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
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag="<h4>" + name +"<img class='user_tick' src='tick.png'></h4>";
messgae_with_tag="<h4 class='message_h4'>"+ message +"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='update_like(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like : "+like+"</span> </button><hr>";
row=name_with_tag+messgae_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;
//End code

      } });  }); }
getData();
function update_like(message_id){
console.log("clicked ont the like button-"+message_id);
button_id=message_id;
likes=document.getElementById(button_id).value;
updated_likes=Number(likes)+1;
console.log(updated_likes);
firebase.database().ref(room_name).child(message_id).update({
      like:updated_likes
});
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = chatex.html;
}