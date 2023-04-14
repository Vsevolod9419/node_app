const btn = document.querySelector("#btn");
const name = document.querySelector(".name");
const pas = document.querySelector(".pas");

async function buttonHandler(ev) {
	ev.preventDefault()
  const user = {
    name: name.value,
    password: pas.value,
  };

  try {
    let res = await fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user),
    })
    let data = await res.text();
    alert(data);
  } catch (er) {
    alert(er.message);
  }
}

btn.addEventListener("submit", buttonHandler);
// document.forms[0].addEventListener("submit", (e) => e.preventDefault())