/*
Save the user to local storage with key "user", in following format:- 
{
name: "",
image: "",
email: "",
country: "" (store country code "in", "ch", "nz", "us", "uk")
}
*/
let navbar = () => {
    return `
    <h3><a href="index.html">News App</a></h3>
        <input type="search" id="search_input">`
}


export {navbar}
let data=[]

let form=document.querySelector("#submit")
form.addEventListener("click",(e)=>{
    userdatasubmit(e)
})

let userdatasubmit=(e)=>{
    e.preventDefault()
    // console.log("jkisjd")


    let user={
        name:document.getElementById("name").value,
        image:document.getElementById("pic").value,
        email:document.getElementById("email").value,
        country:document.getElementById("country").value
    }
    console.log(user)
    data.push(user)
    localStorage.setItem("user",JSON.stringify(data))
    document.getElementById("name").value=""
    document.getElementById("pic").value=""
    document.getElementById("email").value=""
    document.getElementById("country").value=""
    

}