const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.lineWidth = "6"
ctx.strokeStyle = "#48e"
ctx.fillStyle = "#26a"
ctx.strokeRect(50, 100, 400, 200);
ctx.fillRect(10,20,400,200)
ctx.lineTo(200,300)
ctx.lineTo(220,350)
ctx.lineTo(200,400)
ctx.lineTo(120,450)


ctx.closePath()  // es para cerrar el trazo
ctx.beginPath()  //es para iniciar un nuevo trazo

ctx.stroke()