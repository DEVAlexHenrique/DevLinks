function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('ligth')

    const img = document.querySelector("#profile img")
    const alt = document.querySelector("#profile img")

    if(html.classList.contains("ligth")) {
        img.setAttribute("src","./assets/avatar-light.jpg")
        alt.setAttribute ("alt","Imagem do Alex com fundo preto!")
    } else {
        img.setAttribute("src","./assets/avatar.jpg")
        alt.setAttribute ("alt","Imagem do Alex com fundo branco!")
    }
    
    
}