document.getElementById("comment-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var commentInput = document.getElementById("comment-input").value;
    if (commentInput !== "") {
      var commentSection = document.getElementById("comment-section");
      var commentElement = document.createElement("div");
      commentElement.classList.add("comment");
      commentElement.textContent = commentInput;
      commentSection.appendChild(commentElement);
      document.getElementById("comment-input").value = "";
    }
  });