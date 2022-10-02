document.querySelector("#btn").addEventListener("click",myBtn)
function myBtn(event){
    event.preventDefault();
    firstName=document.querySelector("#first").value;
    lastName=document.querySelector("#last").value;
    password=document.querySelector("#pwd").value;
    localStorage.setItem("firstName",JSON.stringify(firstName));
    localStorage.setItem("lastName",JSON.stringify(lastName));
    localStorage.setItem("password",JSON.stringify(password));
    window.location.assign("homepage.html");
    
}