const uppercaseCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const lowercaseCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const numberCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const symbolCharacters = [
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

const generateBtn = document.getElementById("generate-btn");
const passwordLengthEl = document.getElementById("password-length");
const includeNumbersEl = document.getElementById("include-numbers");
const includeSymbolsEl = document.getElementById("include-symbols");
const statusMessageEl = document.getElementById("status-message");
const password1El = document.getElementById("password-one");
const password2El = document.getElementById("password-two");

function getAvailableCharacters() {
  let availableCharacters = [...uppercaseCharacters, ...lowercaseCharacters];

  if (includeNumbersEl.checked) {
    availableCharacters = [...availableCharacters, ...numberCharacters];
  }

  if (includeSymbolsEl.checked) {
    availableCharacters = [...availableCharacters, ...symbolCharacters];
  }

  return availableCharacters;
}

function createRandomPassword(length, availableCharacters) {
  let password = "";
  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * availableCharacters.length);
    password += availableCharacters[randomIndex];
  }
  return password;
}

function generatePasswords() {
  const passwordLength = Number(passwordLengthEl.value);
  const availableCharacters = getAvailableCharacters();

  if (availableCharacters.length === 0) {
    statusMessageEl.textContent = "Please enable at least one character type.";
    password1El.textContent = "";
    password2El.textContent = "";
    return;
  }

  const safeLength = Number.isNaN(passwordLength)
    ? 15
    : Math.min(Math.max(passwordLength, 8), 24);

  passwordLengthEl.value = safeLength;
  password1El.textContent = createRandomPassword(
    safeLength,
    availableCharacters,
  );
  password2El.textContent = createRandomPassword(
    safeLength,
    availableCharacters,
  );
  statusMessageEl.textContent =
    "Passwords generated. Click a password to copy it.";
}

async function copyPassword(password) {
  if (!password) {
    return;
  }

  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(password);
    } else {
      const temporaryInput = document.createElement("textarea");
      temporaryInput.value = password;
      temporaryInput.setAttribute("readonly", "");
      temporaryInput.style.position = "absolute";
      temporaryInput.style.left = "-9999px";
      document.body.appendChild(temporaryInput);
      temporaryInput.select();
      document.execCommand("copy");
      document.body.removeChild(temporaryInput);
    }
    statusMessageEl.textContent = "Password copied to clipboard.";
  } catch (error) {
    statusMessageEl.textContent =
      "Copy failed. Please copy the password manually.";
  }
}

generateBtn.addEventListener("click", generatePasswords);
password1El.addEventListener("click", () =>
  copyPassword(password1El.textContent),
);
password2El.addEventListener("click", () =>
  copyPassword(password2El.textContent),
);
