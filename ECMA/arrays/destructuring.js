  let users = ["Jeff", "Al", "Jeffrey"];
  let [a,b,c] = users;
  console.log(a, b, c);

  function activeUsers() {
    let users = ["Jeff", "Al", "Jeffrey"];
    return users;
  }

  let [a,b,c] = activeUsers();
  console.log(a, b, c);

  
