const verifyForm = document.getElementById("verify-form");
const verifyBtn = document.getElementById("verify-submit-btn");
const verifyErrorMsg = document.getElementById("verify-error-msg-holder");

verifyBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const username = verifyForm.username.value;

    const usernameArray = ["huou", "tuxaolon", "toohighnulo", "toohardsoundlone", "hillthank"];
    const usernameArrayTrans = ["Hươu", "Tú xạo lozzzz", "Hoài hết nunglon", "Hà xạo lozz", "Thanh phò phạch phạch"];

    if ( usernameArray.includes(username.toLowerCase(), 0)) { 
        
        const nameTransIndex = usernameArray.findIndex(element => element == username);
        // const nameTrans = usernameArrayTrans[nameTransIndex];
        nameTrans = usernameArrayTrans[nameTransIndex];
        
        localStorage.setItem('mostNameTrans', nameTrans);
        alert(`Hello ${nameTrans}. Let's go`);
        window.location.href = "/html/quiz.html";

    } else {
        verifyErrorMsg.style.opacity = 1;
        alert("Sai gòiii");
    }
})
