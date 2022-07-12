const btn = document.querySelector(`.button`);

const checkNameInput = (input) => {
    const nameValueForCheck = input.value;
    if (nameValueForCheck.length === 0) throw new Error(`Your name field is empty`);
    for (let i = 0; i < nameValueForCheck.length; i++) {
        if (!isNaN(nameValueForCheck.split(``)[i])) throw new Error(`Your name cannot contain numbers`);
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

btn.addEventListener(`click`, () => {
    try {
        const name = document.querySelector(`.name-input`);
        const email = document.querySelector(`.email-input`);
        const pass = document.querySelector(`.pass-input`);
        const repeatPass = document.querySelector(`.repeatpass-input`);
        if (checkNameInput(name))
            if (checkEmailInput(email))
                if (checkPassInput(pass))
                    if (matchingPass(pass, repeatPass)) alert(`Your registration has been successfully completed!`);
    } catch (e) {
        return alert(e.message);
    }
})