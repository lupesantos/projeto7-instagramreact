import React from "react";

function PostsItems(props){

  const [curtir, setCurtir] = React.useState("");
  const [nomeIcon, setNomeIcon] = React.useState("heart-outline");

  

  function like()
  {
    if(nomeIcon === "heart-outline")
    {
      setNomeIcon("heart")
      setCurtir("corlike")
    }
    else 
    {
      setNomeIcon("heart-outline")
      setCurtir("a")
    }
  }

    return(
            <div class="post">
                <div class="topo">
                  <div class="usuario">
                    <img src={props.img1} />
                    {props.title}
                  </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
                </div>

                <div class="conteudo">
                    <img onClick={like} src={props.img2} />
                </div>

                <div class="fundo">
                    <div class="acoes">
                <div>
                  <ion-icon name={nomeIcon} className={curtir} onClick={like}></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon name="bookmark-outline"></ion-icon>
                </div>
              </div>

              <div class="curtidas">
                <img src={props.img3} />
                <div class="texto">
                Curtido por <strong>{props.text}</strong> e <strong>{props.text2}</strong>
                </div>
              </div>
            </div>
            </div>
    )

}

export default PostsItems;