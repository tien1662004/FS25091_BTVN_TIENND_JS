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
/**
 * Viết hàm tạo ra id ngẫu nhiên với yêu cầu sau:
Hàm generateId(length, prefix) sẽ trả về một chuỗi id ngẫu nhiên với độ dài length nối với tiền tố prefix (lưu ý độ dài length không tính prefix). (0.5đ)
Kiểm tra length phải là số nguyên dương nhỏ hơn 100 (0.5đ).
Chuỗi id ngẫu nhiên được tạo ra (trừ phần prefix) thì chỉ được phép chứa các ký tự trong listCharacters bao gồm các ký tự chữ cái và số. (0.5đ)
Nếu người dùng không truyền prefix thì mặc định prefix là chuỗi rỗng. (0.5đ)
const listCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function generatorId(length, prefix) {
	// Xử lý và return về kết quả
}
Ví dụ:

console.log(generatorId(8, "user")); // Output: "user5a3Fb2DF"
console.log(generatorId(4, "product - ")); // Output: "product - 3a2f"
console.log(generatorId(10)); // Output: "5a3Fb2DFc1"
 */
const users = [
  { fullName: "Nguyễn Minh Hoàng" },
  { fullName: "Nguyễn Đức Hoàng" },
  { fullName: "Lê Văn" },
  { fullName: "Lê Văn Tình" },
  { fullName: "Lê Nin" },
];

console.log(sortUsersByName(users));
