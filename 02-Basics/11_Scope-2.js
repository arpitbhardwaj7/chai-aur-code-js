function funOne() {
    const username = "Arpit";

    function funTwo() {
        const website = "GitHub";

        console.log("Inside funTwo(): ", username);
        console.log("Inside funTwo(): ", website);
    }

    console.log("Outside funTwo(): ", username);
    // console.log("Outside funTwo(): ", website);   // ReferenceError: website is not defined

    funTwo();
}

funOne();