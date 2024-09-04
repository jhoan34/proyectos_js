const newFechaUTC = (dias) => {
  let fecha = new Date();
  fecha.setTime(fecha.getTime() + dias * 1000 * 60 * 60 * 24);
  return fecha.toUTCString();
}

let crearCookies = (name, dias) => {
  let expires = newFechaUTC(dias);
  document.cookie = `${name}; expires=${expires}`;
}

crearCookies("usuario=dalto", 4);


document.cookie = "usuario=johan ; max-age=2"


const Cookies = () => {
  const cookie = document.cookie.split(";");
  
}