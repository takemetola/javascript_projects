function generatePassword(passLength, inclLower, inclUpper, inclNumb, inclSymb) {

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMONPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!#@$%&*()_+-=";

    let allowedChars = "";
    let password = "";

    allowedChars += inclLower ? lowercaseChars : "";
    allowedChars += inclUpper ? uppercaseChars : "";
    allowedChars += inclNumb ? numberChars : "";
    allowedChars += inclSymb ? symbolChars : "";

    if (passLength <= 0) {
        return "password must be at least 1 char long";
    }
    if (allowedChars.length === 0) {
        return "at least 1 set of character option must be selected";
    }

    for (let i = 0; i < passLength; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}


const passLength = 10;
const inclLower = true;
const inclUpper = true;
const inclNumb = true;
const inclSymb = true;

const password = generatePassword(passLength,
    inclLower,
    inclUpper,
    inclNumb,
    inclSymb);

console.log(`Generated password: ${password}`);                                    
