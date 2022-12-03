const btn = document.querySelector(`.button`);

const checkNameInput = (input) => {
    const nameValueForCheck = input.value;
    if (nameValueForCheck.length === 0) throw new Error(`Your name field is empty`);
    for (let i = 0; i < nameValueForCheck.length; i++) {
        if (!isNaN(nameValueForCheck.trim().split(``)[i])) throw new Error(`Your name cannot contain numbers`);
        continue
    }
    return nameValueForCheck
}

const checkEmailInput = (input) => {
    const emailValueForCheck = input.value;
    if (emailValueForCheck.length === 0) throw new Error(`Your email field is empty`);
    const checkingProcess = /\w+@\w+\.\w+/.test(emailValueForCheck)
    if (checkingProcess !== true) throw new Error(`Your email isn't correct`);
    else return emailValueForCheck;
}

const checkPassInput = (input) => {
    const passValueForCheck = input.value;
    if (passValueForCheck.length === 0) throw new Error(`Your password field is empty`);
    else {
        if (passValueForCheck.length < 8) throw new Error(`Your pass is too short, 8 symbols minimum`);
        return passValueForCheck;
    }
}

const matchingPass = (input1, input2) => {
    const passValueForCheckFirst = input1.value,
        passValueForCheckSecond = input2.value;
    if (passValueForCheckFirst !== passValueForCheckSecond) throw new Error(`Your passwords don't  match`);
    else return passValueForCheckFirst, passValueForCheckSecond;
}

btn.addEventListener(`click`, async () => {
    try {
        const name = document.querySelector(`.name-input`);
        const email = document.querySelector(`.email-input`);
        const pass = document.querySelector(`.pass-input`);
        const repeatPass = document.querySelector(`.repeatpass-input`);
        if (checkNameInput(name) && checkEmailInput(email) && checkPassInput(pass) && matchingPass(pass, repeatPass)) {
            // const method = 'POST'
            // const ob = JSON.stringify({
            //     name: name.value,
            //     email: email.value,
            //     password: pass.value
            // })
            // const res = await fetch('http://localhost:2881/api/register', {
            //     method: method,
            //     headers: {
            //         "Content-Type": "application/json"
            //     },
            //     body: ob
            // })
            // const resJson = await res.json();


            const response = await fetch(`http://localhost:2881/api`, {
                method: `GET`,
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const all = document.querySelector(`.all`);
            const allUsers = await response.json();

            for (key in allUsers) {
                let arr = Object.entries(allUsers[key]);
                console.log(arr);
                all.innerHTML += `${arr[0][0] + `:`+ arr[0][1]}, ${arr[1][0] + `:` + arr[1][1]}  | `;
            }
        }
    } catch (e) {
        return alert(e.message);
    }
})