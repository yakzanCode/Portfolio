const Name = document.getElementById("Name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const send = document.getElementsByClassName("control-form")[0];






send.addEventListener('submit', (e)=>{
e.preventDefault();

Email.send({
  Host : "smtp.elasticemail.com",
  Username : "yakzancode@outlook.com",
  Password : "D335A56C49BC45436A386D63153EBECEE54A",
  To : 'yakzancode@outlook.com',
  From : "yakzancode@outlook.com",
  Subject : subject.value,
  Body : "Name: " + Name.value + "<br>" +
        "Email: " + email.value +"<br>" +
        "message: " + message.value,
}).then(
message => alert("THANKS! Your message was sent successfully")
);
})