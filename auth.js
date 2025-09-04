const validuser = "Naanya";
const validpass = "naan@123";
const Usersdata = [{validuser: "Naanya", validpass:"naan@123"}]
localStorage.setItem("users", JSON.stringify(Usersdata));


//LOGIN 
function login(){
    const enteruser = document.getElementById("login_username").value;
    const enterpass = document.getElementById("login_password").value;
    const errmsg = document.getElementById("login_errormsg");

    let users = JSON.parse(localStorage.getItem("users") || "[]");

    const found = users.find(i => i.validuser === enteruser && i.validpass === enterpass);

    if (found){
        localStorage.setItem("loggedin", "true");
        localStorage.setItem("username", enteruser);
        window.location.href = "dashboard.html";

    }
    else{
        errmsg.innerText = "Invalid Credentials.";
    }
}

//LOGOUT
function logout() {
    localStorage.removeItem("loggedin");
    localStorage.removeItem("username");
    window.location.href = "index.html";
}


//SIGNUP PART ON HOLD
function signup(){
    const enternewuser = document.getElementById("newusername").value;
    const enternewpass = document.getElementById("newpassword").value;
    const enterconfpass = document.getElementById("confpassword").value;
    const newerrmsg = document.getElementById("signup_errormsg");

    let users = JSON.parse(localStorage.getItem("users") || "[]");
    const found = users.find(i => i.validuser === enternewuser && i.validpass === enternewpass);

    if (found){
        newerrmsg.innerText = "User Already Exists.";
    }
        
    else{}
        if (enternewpass === enterconfpass){
            users.push({validuser: enternewuser, validpass: enternewpass});
            localStorage.setItem("users", JSON.stringify(users));
            localStorage.setItem("loggedin", "true");
            localStorage.setItem("username", enternewuser);
            window.location.href = "dashboard.html"
        }
        else{
            newerrmsg.innerText="Passwords Don't Match"
            
        }
}

