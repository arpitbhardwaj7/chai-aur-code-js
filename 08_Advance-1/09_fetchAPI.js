async function getUserData() {
    try {
        let response = await fetch('https://api.github.com/users/arpitbhardwaj7');
        let data = await response.json();
        console.log(data);
    } catch(error) {
        console.log(error);
    }
}

getUserData();