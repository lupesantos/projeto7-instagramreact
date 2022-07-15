import PostsItems from "./PostsItems";

function Posts()
{
    const PostsObjects = [{
        img1: "assets/img/meowed.svg",title: "meowed",
        img2: "assets/img/gato-telefone.svg",
        img3: "assets/img/respondeai.svg",
        text: "respondeai",
        text2: "outras 101.523 pessoas"
    },
    {
        img1:"assets/img/barked.svg", 
        title: "barked", 
        img2: "assets/img/dog.svg", 
        img3: "assets/img/adorable_animals.svg", 
        text: "adorable_animals",
        text2:"outras 99.159 pessoas"
    }]

    return (
        <div class="posts">
            {PostsObjects.map(item => <PostsItems 
        img1={item.img1}
        title={item.title}
        img2={item.img2}
        img3={item.img3}
        text={item.text}
        text2={item.text2}/>)}
        </div>
    )
}

export default Posts;