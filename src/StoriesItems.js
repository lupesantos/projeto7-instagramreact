function StoriesItems(props)
{
    return(
        <div class="story">
              <div class="imagem">
                <img src={props.img} />
              </div>
              <div class="usuario">
                {props.text}
              </div>
            </div>
    )
}

export default StoriesItems;