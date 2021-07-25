function validate(){
  var username=getElementById('username').value;
  var password=getElementById('password').value;
  if(username=="admin"&&password="user"){
    alert("login succesfully");
    return false;
  }
  else{
    alert("login failed");
  }
}
