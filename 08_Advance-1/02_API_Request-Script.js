let cardVar = document.getElementById('card');
let image;
let userName;
let loginId;
let followers;

let requestUrl = 'https://api.github.com/users/hiteshchoudhary'
let xhr = new XMLHttpRequest();
xhr.open('GET', requestUrl);
xhr.send();

xhr.onreadystatechange = function () {
    if(xhr.readyState === 4) {
        const data = JSON.parse(this.responseText);
        image = data.avatar_url;
        userName = data.name;
        loginId = data.login;
        followers = data.followers;

        console.table([image, userName, loginId, followers]);

        cardVar.innerHTML = `<img src = "${image}" alt = "Avatar" style = "width: 100%">
        <div id = "container" style = "padding: 2px 16px;">
          <h4><b> ${userName} </b></h4>
          <p> Login ID: ${loginId} </p>
          <p> Followers: ${followers} </p>
        </div>`
    }
}

