const newPost = document.querySelector("#newPost");
const questionInput = document.querySelector("#questionInput");

const submitBtn = document.querySelector("#submitBtn");
console.log("running");

questionInput.style.display = "none";
newPost.addEventListener("click", (event) => {
  console.log("running");
  questionInput.style.display = "block";
});

submitBtn.addEventListener("click", async (event) => {
  event.preventDefault();
  const data = {
    question: document.querySelector("#questionArea").value,
    date_created: new Date(),
  };
  console.log(data);
  const response = await fetch("api/chats", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
});
