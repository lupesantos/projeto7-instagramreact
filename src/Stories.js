import StoriesItems from "./StoriesItems";

function Stories (){

const stories = [
    {img: "assets/img/9gag.svg",                    text: "9gag"},
    {img: "assets/img/meowed.svg",                  text: "meowed"},
    {img: "assets/img/barked.svg",                  text: "barked"},
    {img: "assets/img/nathanwpylestrangeplanet.svg",text: "nathanwpylestrangeplanet"},
    {img: "assets/img/wawawicomics.svg",            text: "wawawicomics"},
    {img: "assets/img/respondeai.svg",              text: "respondeai"},
    {img: "assets/img/filomoderna.svg",             text: "filomoderna"},
    {img: "assets/img/memeriagourmet.svg",          text: "memeriagourmet"}
]
    return (
        <div class="stories">
            {stories.map(item =><StoriesItems 
            img={item.img}
            text={item.text}/>)}

            <div class="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
          </div>
    )
}

export default Stories;