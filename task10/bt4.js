function maskEmail(email) {
  const [name, domain] = email.split("@");

  if (name.length <= 2) return email;

  const firstTwo = name.slice(0, 2);

  const lastTwo = name.slice(-2);

  const maskedName = firstTwo + "***" + lastTwo;

  return maskedName + "@" + domain;
}
console.log(maskEmail("tienndph@gmail.com"));
console.log(maskEmail("tien123@yahoo.com"));

console.log(maskEmail("ti@gmail.com"));
