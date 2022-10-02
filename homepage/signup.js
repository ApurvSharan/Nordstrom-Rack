document.querySelector("form>button").addEventListener("click",nextBtn);
function nextBtn(event){
    event.preventDefault();
    email=document.querySelector("#email").value;
    localStorage.setItem("email",JSON.stringify(email));
    window.location.assign("signUp2.html");
}