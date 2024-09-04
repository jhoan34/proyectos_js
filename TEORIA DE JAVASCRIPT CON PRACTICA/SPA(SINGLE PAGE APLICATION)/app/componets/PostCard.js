export function PostCard(props) {
    const {date ,id,slug,title, _embedded} =  props;
    let dateF = new Date(date).toLocaleString();
    let urlpost = _embedded["wp:featuredmedia"] 
    ?_embedded["wp:featuredmedia"][0].source_url
    : "app/assets/favicon.png"

    document.addEventListener("click", e => {
        if(!e.target.matches(".post-card a")){
            return false
        }else{
            localStorage.setItem("wpPostid", e.target.dataset.id)
        }
    })



    return `
        <article class="post-card">
        <img class="img-postcard" src="${urlpost}" alt="Random Image">
            <h2 class="title-2">${title.rendered} </h2>
            <div class="p-padre">
                <time>${dateF}</time>
                <a href="#/${slug}" data-id="${id} ">Ver publicacion</a>
            </div>
        </article>
    
    `;
}