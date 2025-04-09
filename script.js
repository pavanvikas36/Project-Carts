async function getdata(){
    let response = await fetch("http://localhost:4000/Gifts");
    let result = await response.json();
    console.log(result)
    
    let container = document.createElement("section");
    result.forEach((val)=>{
        let parent = document.createElement("div");
        let title = document.createElement("p");
        let price = document.createElement("p");
        let description = document.createElement("p");
        let image = document.createElement("img");

        title.innerText = val.title;
        price.innerText = val.price;
        description.innerText = val.description;
        image.src = val.image;
        parent.append(title, price, description, image)
        container.append(parent)
    })
    document.body.append(container)
    // console.log()
}
getdata()