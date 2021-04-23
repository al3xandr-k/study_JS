const checkData = () => {
  const form = document.querySelectorAll("form"),
    formBtn = document.querySelector(".feedback");
  form.forEach((item) => {
    item.addEventListener("focusout", (event) => {
      const target = event.target;
      if (target.placeholder === "Ваше имя") {
        target.value = target.value
          .trim()
          .replace(/[^\s\da-zа-я]/gi, "")
          .replace(/\s+/g, " ");
        if (target.value !== "") {
          target.value = target.value
            .split(" ")
            .map(function (word) {
              return word[0].toUpperCase() + word.substr(1);
            })
            .join(" ");
        }
        if (target.value.search(/[^A-Za-z]/)) {
          target.value = "";
        }
      } else if (target.placeholder === "Телефон*") {
        if (target.value.length !== 12) {
          target.style.border = "2px solid red";
          formBtn.disabled = true;
        }
      }
    });
  });
};
export default checkData;