let crew = []


const data = fetch('data.json')
    .then(response => response.json())
    .then(data =>{
        console.log(data);
        crew = data.crew
        return data    
    })
    .catch(error => console.log(error));

const navMenu = document.getElementById("navMenu")

function toggleMenu(){
    navMenu.classList.toggle("active")
}

let dots = document.querySelectorAll(".dot")
dots.forEach(dot => {
    dot.addEventListener("click",()=>{
        dots.forEach(dot =>{
            dot.classList.remove("active")
        })        
        dot.classList.add("active")
        changeCrew(dot.id)

    })
});
const imageCrew = document.getElementById("imageCrew")
const roleCrew = document.getElementById("role")
const nameCrew = document.getElementById("name")
const bioCrew = document.getElementById("bio")

function changeCrew(id){
    console.log(crew)
    console.log(id)
    
    crew.forEach(element => {
        if(element.role == id){
            console.log(element)
            roleCrew.innerText = element.role
            nameCrew.innerText = element.name
            bioCrew.innerText = element.bio
            imageCrew.setAttribute("src", element.images.png)
        }
    });
    
}
const moonImg = document.getElementById("destinationImage")
function debugMoon(){
    if(moonImg.classList.contains("in")){
        moonImg.classList.remove("in")
        moonImg.classList.add("out")
    }else{
        moonImg.classList.remove("out")
        moonImg.classList.add("in")
    }
    
}