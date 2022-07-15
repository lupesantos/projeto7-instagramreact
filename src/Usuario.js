function Usuario(){
const usuario = {
    img:"assets/img/catanacomics.svg",
    text: "catanacomics",
    text2: "Catana"
}
    return(
        UsuarioItems(usuario)
    )
}

function UsuarioItems(props)
{
    return(
        <div class="usuario">
            <img src={props.img} />
            <div class="texto">
              <strong>catanacomics</strong>
              Catana
            </div>
          </div>
    )
}
export default Usuario;