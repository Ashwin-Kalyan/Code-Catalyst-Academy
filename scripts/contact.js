function sendEmail() {
    var params = {
        name: document.getElementById("first").value + " " + document.getElementById("last").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    const serviceID = "service_1uf1sy9"; 
    const templateID = "template_i3h9lch";

    emailjs.send(serviceID, templateID, params)
    .then(res => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("message send without error.")
    })
    .catch(err => console.log(err));
}