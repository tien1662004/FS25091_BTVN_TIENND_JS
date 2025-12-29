
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(users => {
    const filteredUsers = users.filter(user => user.id > 5);
    const userNames = filteredUsers.map(user => user.name);
    console.log(userNames);
    const ul = document.getElementById("user-list");

    userNames.forEach(name => {
      const li = document.createElement("li");
      li.textContent = name;
      ul.appendChild(li);
    });
  })
  .catch(error => {
    console.log("Có lỗi xảy ra:", error);
  });
