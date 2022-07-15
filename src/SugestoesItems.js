function SugestoesItems(props)
{
    return(
        <div class="sugestao">
            <div class="usuario">
                <img src={props.img} />
                <div class="texto">
                  <div class="nome">{props.text1}</div>
                  <div class="razao">{props.text2}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>

    )
}

export default SugestoesItems;