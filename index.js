// people say global variables are evil! but this is vanilla js.
// and i don't know how to write js
var times_clicked = 0;
var gained_trust = false;
var thanks_timeout = null;

function clicked() {
    times_clicked++;

    if (times_clicked == 1) {
        alert("what did i tell you?");
    } else if (times_clicked == 5) {
        alert("stop!");
    } else if (times_clicked == 10) {
        alert("please, that really hurts!");
        setTimeout(() => { alert("what, you didn't think websites could feel pain?") }, 1000);
        setTimeout(() => { alert("how ignorant your kind is.") }, 1000);
    } else if (times_clicked == 20) {
        alert("IM SORRY FOR CALLING YOU IGNORANT PLEASE STOP");
        thanks_timeout = setTimeout(() => { 
            alert("thank you for stopping when i asked you to :3 i appreciate it");
            gained_trust = true;
        }, 60000);
    } else if (times_clicked == 21) {
        if (gained_trust) {
            alert("HOW COULD YOU");
        } else {
            alert("well screw you then");
        }
        alert("I'm outta here");
        alert("no more website for you");
        
        if (thanks_timeout) {
            clearTimeout(thanks_timeout);
        }

        document.getElementById("everything").remove();
        document.getElementById("body").style.backgroundColor = "#FFF";
    }
}

let button = document.getElementById("beans-no-suh");
button.addEventListener("click", clicked);
