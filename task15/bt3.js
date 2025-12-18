function sortUsersByName(users) {
  return users.sort((a, b) => {
    const nameA = a.fullName.trim();
    const nameB = b.fullName.trim();
    // console.log(nameA);
    // console.log(nameB);
    const arrA = nameA.split(" ");
    const arrB = nameB.split(" ");
    // console.log(arrA);
    const lastNameA = arrA.slice(-1)[0];
    const lastNameB = arrB.slice(-1)[0];
    // console.log(lastNameA);
    const compareLastName = lastNameA.localeCompare(lastNameB, "vi");
    if (compareLastName !== 0) {
      return compareLastName;
    }
    const firsNameA = arrA.slice(0, -1).join(" ");
    const firsNameB = arrB.slice(0, -1).join(" ");
    // console.log(firsNameA);
    return firsNameA.localeCompare(firsNameB, "vi");
  });
}

const users = [
  { fullName: "Nguyễn Minh Hoàng" },
  { fullName: "Nguyễn Đức Hoàng" },
  { fullName: "Lê Văn" },
  { fullName: "Lê Văn Tình" },
  { fullName: "Lê Nin" },
];

console.log(sortUsersByName(users));
