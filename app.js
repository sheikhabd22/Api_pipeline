
global_list = []
async function fetch_data(){
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random/5")
        const data = await res.json()
        let c = []
        for (i of data.message){ 
            c.push(i) 
            global_list.push(i)
        }
        return c     
    } catch (error) {
        console.log("Error in fethcing data")      
    }
}


async function reload(){
    const data = await fetch_data()
    display(data)
    
}


function display(data = global_list){
    const container = document.getElementById("image-container")
    container.innerHTML = ""
    for (let url of data) {
    let img = document.createElement("img");
    img.src = url;
    img.alt = "Dog";
    img.style.width = "200px";
    img.style.borderRadius = "12px";
    img.style.margin = "10px";
    container.appendChild(img);
    const url_array  = url.split("/")
    const dog_breed_name = url_array[4]
    let name = document.createElement("p")
    name.innerText = dog_breed_name
    container.appendChild(name)
}

}
const container = document.getElementById("image-container")
const search = document.getElementById("search")
search.addEventListener("input", async function filter_dogs() {
    const search_term = search.value.toLowerCase()
    try {
        const res = await fetch(`https://dog.ceo/api/breed/${search_term}/images/random/5`)
        const data = await res.json()
        if (data.status === "success") {
            display(data.message)
        } else {
            container.innerHTML = "<p>Breed not found</p>"
        }
    } catch (error) {
        container.innerHTML = "<p>Error fetching data</p>"
    }
})


reload()








