function creatediv() {
    div = document.createElement('div');
    document.getElementById("inp").appendChild(div);
    return div;
}

function createinp(div) {
    inp = document.createElement('input')
    inp.size = "3"
    div.appendChild(inp)
}


function createmat() {
    size = parseInt(document.getElementById("size").value)
    refresh()
    size = size + (size % 2 - 1)
    size = size % 10;
    if (size < 2) { size = 3 }
    for (i = 0; i < size; i++) {
        div = creatediv()
        for (j = 0; j < size; j++) {
            createinp(div)
        }
    }
}

function refresh() {
    form = document.getElementById("inp")
    objs = form.getElementsByTagName("div")
    len = objs.length
    if (len > 0) {
        for (i = 0; i < len; i++) {
            form.removeChild(objs[0])
        }

    }
}

function getvals() {
    form = document.getElementById("inp")
    objs = form.getElementsByTagName("div")
    len = objs.length
    arr = []
    if (len > 0) {
        for (i = 0; i < len; i++) {
            arr.push([])
            for (j = 0; j < len; j++) {
                arr[i].push(parseFloat(objs[i].getElementsByTagName("input")[j].value))
            }
        }
    }
    return arr
}