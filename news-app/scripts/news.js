let getdetailss=JSON.parse(localStorage.getItem("shownews"))||[]

let show_news=document.getElementById("detailed_news")
let appendnews=(data)=>{
    show_news.innerHTML=""
    
    data.forEach((el,i) => {
        let div=document.createElement("div")
        div.className="news"
        let title=document.createElement("h4")
        title=el.content
        let img=document.createElement("img")
        img.src=el.urlToImage
        let author=document.createElement("h3")
        author.innerText=el.author
        div.append(img,author,title)
        detailed_news.append(div)
    
    });
    }
    appendnews(getdetailss)