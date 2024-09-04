class Usuario {
    constructor( nombre, password){
        this.nombre = nombre;
        if(password === 45689){
            this.password = password
            console.log(" es correcto persona normal")
        } else if(password ===789789){
            this.password = password;
            console.log("correcto moderador")
        }else {
            console.log("es incorrecto")
        }
 
    }
    


}

class moderador extends Usuario{
    constructor(nombre, password, permisos) {
        super(nombre , password);
        this.permisos = permisos;
    }

    borrarPost(id){
        if(this.permisos.includes("borrar")){
            console.log("el post con el " + id + " ha sido borrado ")
        }
    }
}

const usuario1  = new Usuario ( "camilo" , 45689)
const usuario2 = new moderador ("jorge", 789789 , ["borrar" , "editar"] )



console.log(usuario1)


