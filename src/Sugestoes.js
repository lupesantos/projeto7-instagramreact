import SugestoesItems from "./SugestoesItems";

function Sugestoes(){

const sugestoes = [
    {img:"assets/img/bad.vibes.memes.svg", text1:"bad.vibes.memes", text2:"Segue você"},
    {img:"assets/img/chibirdart.svg", text1:"chibirdart", text2:"Segue você"},
    {img:"assets/img/razoesparaacreditar.svg", text1:"razoesparaacreditar", text2:"Novo no Instagram"},
    {img:"assets/img/adorable_animals.svg", text1:"adorable_animals", text2:"Segue você"},
    {img:"assets/img/smallcutecats.svg", text1:"smallcutecats", text2:"Segue você"}
]
    return (
        <div class="sugestoes">
            <div class="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>
            {sugestoes.map(item=><SugestoesItems
            img={item.img}
            text1={item.text1}
            text2={item.text2}/>)}  
        </div>
    )
}

export default Sugestoes;