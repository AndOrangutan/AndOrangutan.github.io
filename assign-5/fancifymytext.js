
// const alertWorld = () => alert("Hello, world!");
const increaseFontSize = () => {
    const txtbx = document.getElementById("textbox");
    txtbx.style.fontSize = "24pt";
};

const fancifyText = () => {
    const fancyRadio = document.getElementById("fancyRadio");
    const txtbx = document.getElementById("textbox");

    if(fancyRadio.checked){
        txtbx.style.fontWeight = "bold";
        txtbx.style.color = "blue";
        txtbx.style.textDecoration = "underline";
    } else {
        txtbx.style.fontWeight = "normal";
        txtbx.style.color = "black";
        txtbx.style.textDecoration = "none";
    }
};

const uppercaseText = () => {
    const txtbx = document.getElementById("textbox");
    let sentences = txtbx.value.split(".")
    txtbx.value = sentences.join("-Moo.")
}

