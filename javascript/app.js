var t = document.getElementById('tool');

filterSelection = (option = "all") => {
    let oInput = document.getElementById('container');
    let id_list = [];

    for (var i = 0; i < oInput.childNodes.length; i++) {
        let oChild = oInput.childNodes[i];
        id_list.push(oChild.id)
    }
    console.log(id_list)
    for (j = 0; j < id_list.length; j++) {
        if (id_list[j] === undefined) {
            continue;
        }
        else if (option == "all") {
            document.getElementById("" + id_list[j]).style.display = "flex";
            document.getElementById("" + id_list[j]).style.flexWrap = "wrap";
            t.style.display = "none";
        }
        else if (id_list[j] === option) {
            console.log(`${id_list[j]} == ${option}`)
            document.getElementById("" + id_list[j]).style.display = "flex";
            document.getElementById("" + id_list[j]).style.flexWrap = "wrap";
        }

        else {
            document.getElementById("" + id_list[j]).style.display = "none";
            document.getElementById("" + id_list[j]).style.flexWrap = "wrap";

        }
    }
    id_list = []

}

var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

