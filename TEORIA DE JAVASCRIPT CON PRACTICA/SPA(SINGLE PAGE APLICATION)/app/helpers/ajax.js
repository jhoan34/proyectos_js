

export async function ajax (props){
    let {url, cbSuccess} = props;

    await fetch(url)
     .then(res => res.ok ? res.json(): Promise.reject(res))
     .then(json => cbSuccess(json))
     .catch(err => {
        let message = err.statusText || "ocurrio un error en la api";
        document.getElementById("main").innerHTML = `
        <div class="error">
          <p>error${err.status}: ${message}</p>        
        </div>
        
        `
        document.querySelector(".loader").style.display="none"
        console.log(err)

     })
}