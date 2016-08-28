  lets users = [
    { login: "Sam", admin: false},
    { login: "Brook", admin: true},
    { login: "Tyler", admin: true}
  ];

  let admin = users.find((users) => {
    return user.admin;
  });
  console.log(admin);

  //EVEN SHORTER ARROW
  let admin = users.find( users => user.admin);
  console.log(admin);
