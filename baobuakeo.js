var clientchoose;
var serverchoose;
win = 0;
lose = 0;
tie = 0;
var imgkeo = '<img class="img1" src="https://www.phanxuanchanh.com/wp-content/uploads/2022/02/Keo.png" alt="">';
var imgbua = '<img class="img1" src="https://www.phanxuanchanh.com/wp-content/uploads/2022/02/Bua.png" alt="">';
var imgbao = '<img class="img1" src="https://www.phanxuanchanh.com/wp-content/uploads/2022/02/Bao.png" alt="">';

function setimgclient(a) {
    let clientimg = document.getElementById("clientchoose");
    if (a === 1) {
        clientimg.innerHTML = imgkeo;
    } else if (a === 2) {
        clientimg.innerHTML = imgbua;
    } else {
        clientimg.innerHTML = imgbao;
    }
}
function setimgserver(a) {
    let serverimg = document.getElementById("serverchoose");
    if (a === 1) {
        serverimg.innerHTML = imgkeo;
    } else if (a === 2) {
        serverimg.innerHTML = imgbua;
    } else {
        serverimg.innerHTML = imgbao;
    }
}
// keo=1,bua=2,bao=3
function keo() {
    clientchoose = 1;
    serverchoose = Math.floor(Math.random() * 3) + 1;
    setimgclient(clientchoose);
    setimgserver(serverchoose);
    if (clientchoose == serverchoose) {
        document.getElementById("result").innerHTML = "Tie";
        tie++;
        document.getElementById("tie").innerHTML = tie;
    }
    if (((clientchoose === 1) && (serverchoose === 3)) || ((clientchoose === 2) && (serverchoose === 1)) || ((clientchoose === 3) && (serverchoose === 2))) {
         document.getElementById("result").innerHTML = "You Win";
        win++;
        document.getElementById("win").innerHTML = win;
    }
    if (((clientchoose === 1) && (serverchoose === 2)) || ((clientchoose === 2) && (serverchoose === 3)) || ((clientchoose === 3) && (serverchoose === 1))) {
         document.getElementById("result").innerHTML = "You Lose";
        lose++;
        document.getElementById("lose").innerHTML = lose;
    }

    
}
function bua() {
    clientchoose = 2;
    serverchoose = Math.floor(Math.random() * 3) + 1;
        setimgclient(clientchoose);
    setimgserver(serverchoose);
       if (clientchoose == serverchoose) {
        document.getElementById("result").innerHTML = "Tie";
        tie++;
        document.getElementById("tie").innerHTML = tie;
    }
    if (((clientchoose === 1) && (serverchoose === 3)) || ((clientchoose === 2) && (serverchoose === 1)) || ((clientchoose === 3) && (serverchoose === 2))) {
         document.getElementById("result").innerHTML = "You Win";
        win++;
        document.getElementById("win").innerHTML = win;
    }
    if (((clientchoose === 1) && (serverchoose === 2)) || ((clientchoose === 2) && (serverchoose === 3)) || ((clientchoose === 3) && (serverchoose === 1))) {
         document.getElementById("result").innerHTML = "You Lose";
        lose++;
        document.getElementById("lose").innerHTML = lose;
    }
}
function bao() {
    clientchoose = 3;
    serverchoose = Math.floor(Math.random() * 3) + 1;
        setimgclient(clientchoose);
    setimgserver(serverchoose);
       if (clientchoose == serverchoose) {
        document.getElementById("result").innerHTML = "Tie";
        tie++;
        document.getElementById("tie").innerHTML = tie;
    }
    if (((clientchoose === 1) && (serverchoose === 3)) || ((clientchoose === 2) && (serverchoose === 1)) || ((clientchoose === 3) && (serverchoose === 2))) {
         document.getElementById("result").innerHTML = "You Win";
        win++;
        document.getElementById("win").innerHTML = win;
    }
    if (((clientchoose === 1) && (serverchoose === 2)) || ((clientchoose === 2) && (serverchoose === 3)) || ((clientchoose === 3) && (serverchoose === 1))) {
         document.getElementById("result").innerHTML = "You Lose";
        lose++;
        document.getElementById("lose").innerHTML = lose;
    }
}
function reset() {
    win = 0;
lose = 0;
    tie = 0;
    document.getElementById("win").innerHTML = win;
    document.getElementById("lose").innerHTML = lose;
    document.getElementById("tie").innerHTML = tie;
}

