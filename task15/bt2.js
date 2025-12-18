const categories = [
  { id: 1, name: "Chuyên mục 1", parent: 0 },
  { id: 2, name: "Chuyên mục 2", parent: 0 },
  { id: 3, name: "Chuyên mục 3", parent: 0 },
  { id: 4, name: "Chuyên mục 2.1", parent: 2 },
  { id: 5, name: "Chuyên mục 2.2", parent: 2 },
  { id: 6, name: "Chuyên mục 2.3", parent: 2 },
  { id: 7, name: "Chuyên mục 3.1", parent: 3 },
  { id: 8, name: "Chuyên mục 3.2", parent: 3 },
  { id: 9, name: "Chuyên mục 3.3", parent: 3 },
  { id: 10, name: "Chuyên mục 2.2.1", parent: 5 },
  { id: 11, name: "Chuyên mục 2.2.2", parent: 5 },
];

const categoriesNess = convertNested(categories);

function convertNested(arr) {
  const obj = {};
  // console.log(obj);
  return arr.reduce((acc, cur) => {
    if (!obj[cur.id]) {
      obj[cur.id] = {
        id: cur.id,
        name: cur.name,
        children: [],
      };
    }
    if (cur.parent === 0) {
      acc.push(obj[cur.id]);
    } else {
      if (!obj[cur.parent]) {
        obj[cur.parent] = { children: [] };
      }
      obj[cur.parent].children.push(obj[cur.id]);
    }
    return acc;
  }, []);
}
console.log(categoriesNess);
