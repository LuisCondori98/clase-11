const socket = io();

const chatBox = document.getElementById("input-msg");

let userIngresado = ""

async function main() {
  const { value: nombre } = await Swal.fire({
    title: "Enter your name",
    input: "text",
    inputLabel: "Your name",
    inputValue: "",
    showCancelButton: false,
    allowOutsideClick: false,
    inputValidator: (value) => {
      if (!value) {
        return "You need to write something!";
      }
    },
  });
  userIngresado = nombre;
}

main();

chatBox.addEventListener("keyup", ({ key }) => {
  if (key == "Enter") {
    socket.emit("msg_front_to_back", {
      msg: chatBox.value,
      user: userIngresado,
    });
    chatBox.value = "";
  }
});

socket.on("listado_msgs", (msgs) => {
  console.log(msgs)
  const box = document.getElementById("div-msgs")
  let format = "";
  msgs.forEach(msg => format = format + "<p style='color: white'> user: " + msg.user + ": " + msg.msg + "</p>");
  box.innerHTML = format
})

/* //FRONT MANDA MSGS AL BACK
setInterval(() => {
  socket.emit("msg_front_back", {
    msg: "hola mundo desde el front " + Date.now(),
    from: "usuario anonimo",
  });
}, 1000);

//FRONT ATAJA LOS MSGS DEL BACK
socket.on("msg_back_front", (msg) => {
  console.log(msg);
}); */
