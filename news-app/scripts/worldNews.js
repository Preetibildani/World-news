let navbar = () => {
    return `
    <h3><a href="index.html">News App</a></h3>
        <input type="search" id="search_input">`
}


export {navbar}

let searchnews=document.getElementById("search_box")
searchnews.addEventListener("keypress",function(event){
    if(event.key==="Enter"){
        event.preventDefault()
        // console.log(searchnews.value)

        localStorage.setItem("input",JSON.stringify(searchnews.value))
        appendsearchfn()
    }
})

let getdata=JSON.parse(localStorage.getItem("user"))

console.log(getdata)
let sidebar=document.getElementById("sidebar")

let userappend=async(getdata)=>{
    sidebar.innerHTML=""

    getdata.forEach(el => {
        let div=document.createElement("div")
        let imgdiv=document.createElement("div")
        let img=document.createElement("img")
        img.src=el.image;
        imgdiv.append(img)

        let user=document.createElement("h3")
        user.innerText=el.name

        let email=document.createElement("p")
        email.innerText=el.email;

        let country=document.createElement("p")
        country.innerText=el.country
        localStorage.setItem("country",JSON.stringify(el.country))

        div.append(imgdiv,user,email,country)
        sidebar.append(div)



        
    });
}
userappend(getdata)

let countryy=JSON.parse(localStorage.getItem("country"))
let newsdiv=document.getElementById("news_result")
let appenddata=async ()=>{
let res=await fetch(`https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=${countryy}`)
let data=await res.json()
console.log(data)
appendnews(data.articles)
}


appenddata()


let appendnews=(data)=>{
newsdiv.innerHTML=""

data.forEach((el,i) => {
    let div=document.createElement("div")
    div.className="news"
    let title=document.createElement("p")
    title=el.title
    
    let divimg=document.createElement("div")
    divimg.id="imgid"
    let img=document.createElement("img")
    img.src=el.urlToImage
    divimg.append(img)
    let divauth=document.createElement("div")

    let author=document.createElement("h3")
    author.innerText=el.author
    divauth.append(author,title)
    div.append(divimg,divauth)
    newsdiv.append(div)


    div.addEventListener("click",function(){
        detailedfun(el,i)
    })
});
}
let detailsa=[]
let detailedfun=(el,i)=>{
    // console.log(el,i)
    detailsa.push(el)
    localStorage.setItem("shownews",JSON.stringify(detailsa))
    window.location.href="news.html"
}

let appendsearchfn=()=>{

}