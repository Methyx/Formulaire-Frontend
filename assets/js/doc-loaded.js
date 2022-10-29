document.addEventListener("DOMContentLoaded", () => {
  console.log("document loaded");

  document.querySelector("#form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
      firstname: document.querySelector("#first-name").value,
      lastname: document.querySelector("#last-name").value,
      email: document.querySelector("#mail").value,
      subject: document.querySelector("#subject").value,
      message: document.querySelector("#message").value,
    };
    try {
      document.getElementById("nok").classList.add("hidden");
      document.getElementById("ok").classList.add("hidden");
      // const response = await axios.post("http://localhost:3000/form", data);
      const response = await axios.post(
        "site--contactform-mail--gw6mlgwnmzwz.code.run:8080/form",
        data
      );
      console.log(response.status);
      if (response.data.message === "reçu") {
        document.getElementById("ok").classList.remove("hidden");
        setTimeout(() => {
          location.reload();
        }, 1000);
      } else {
        document.getElementById("nok").classList.remove("hidden");
      }
    } catch (error) {
      document.getElementById("nok").classList.remove("hidden");
    }
  });
});
