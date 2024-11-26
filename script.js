let social = []
const localRedesSociais = 'redes-sociais.json'
const redeSocialLink = document.querySelector("#social a");
const redeSocialIncone = document.querySelector("#social img");
const localExibirRedesSociais = document.querySelector("#social");

buscarRedesSociais()

async function buscarRedesSociais(){
    const resposta = await fetch(localRedesSociais)
    redes = await resposta.json()
    console.log(redes)
    exibirRedesSociais(redes);
    
}
function exibirRedesSociais(redesSociais){
    redesSociais.socialMedia.forEach((redes) => {
        localExibirRedesSociais.innerHTML += `<a href="${redes.url}"><img src="${redes.icon}" alt="${redes.name}"></a>`
    });
}
