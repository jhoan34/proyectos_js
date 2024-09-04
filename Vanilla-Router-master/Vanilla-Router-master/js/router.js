export class Router {

     
    constructor(paths) {
        this.paths = paths; // Almacena los paths y templates en la propiedad paths del objeto Router.
        this.initRouter(); // Llama al método initRouter() cuando se crea una instancia de Router.
    }

    /**
     * Método para inicializar el router.
     *
     * @return {void}.
     */
    initRouter() {
        this.nuevo("home")
    }

    nuevo(page) {
        console.log(typeof page)
        const { paths } = this; // Obtiene los paths y templates almacenados en la propiedad paths.
        let path, template;

        path = paths[page].path||paths.error.path;
        template = paths[page].template||paths.error.template;

        
         // Obtiene el path y el template correspondiente al identificador de la página, o usa el template de error si no se encuentra.
        const $CONTAINER = document.querySelector("#content"); // Selecciona el contenedor donde se cargará el contenido de la página.
        $CONTAINER.innerHTML = template; // Asigna el template al contenido del contenedor.
        window.history.pushState({}, "Genial", path); // Modifica la URL en la barra de direcciones del navegador sin recargar la página.
    }
}


