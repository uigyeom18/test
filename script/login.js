
// 필요한 DOM 요소들을 가져옵니다.
const registerForm = document.getElementById("register-form");
const loginForm = document.getElementById("login-form");
const registerUsernameInput = document.getElementById("register-username");
const registerPasswordInput = document.getElementById("register-password");
const loginUsernameInput = document.getElementById("login-username");
const loginPasswordInput = document.getElementById("login-password");

let users = [];

// 회원가입 기능을 구현한 함수입니다.
function handleRegister(e) {
  e.preventDefault();

  const newUser = {
    username: registerUsernameInput.value,
    password: registerPasswordInput.value,
  };

  users.push(newUser);

  console.log("등록된 회원: ", users);

  registerUsernameInput.value = "";
  registerPasswordInput.value = "";
}

// 로그인 기능을 구현한 함수입니다.
function handleLogin(e) {
  e.preventDefault();

  const username = loginUsernameInput.value;
  const password = loginPasswordInput.value;

  const user = users.find(user => user.username === username);

  if (!user || user.password !== password) {
    alert("잘못된 아이디 또는 비밀번호입니다.");
  } else {
    alert("로그인 성공!");
    window.location.href ="http://127.0.0.1:5500/html/affter_main.html"

  }

  loginUsernameInput.value = "";
  loginPasswordInput.value = "";
}

// 이벤트 리스너를 양식에 추가합니다.
registerForm.addEventListener("submit", handleRegister);
loginForm.addEventListener("submit", handleLogin);
