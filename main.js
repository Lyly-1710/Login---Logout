const loginApi = "https://api.storerestapi.com/auth/login";

const inputUsername = document.querySelector(".input-login-username");
const inputPassword = document.querySelector(".input-login-password");
const btnLogin = document.querySelector(".login__signInButton");


btnLogin.addEventListener("click", (e) => {
    e.preventDefault(); 
  
   
    const username = inputUsername.value.trim();
    const password = inputPassword.value.trim();
  

    if (username === "" || password === "") {
      alert("Vui lòng không để trống username hoặc password");
      return;
    }
  

    const user = {
      email: username,
      password: password
    };

  
    fetch(loginApi, {
      method: "POST",
      body: JSON.stringify(user), 
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.status == 200) {
          localStorage.access_token = res.data.access_token;
          alert("Đăng nhập thành công");
          console.log(res);
        } else {
          alert("Đăng nhập thất bại");
        }
      })
      .catch((err) => {
        alert("Đăng nhập thất bại");
        console.log(err);
      });
  });
  