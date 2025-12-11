const nums = [1, 2, 3, 10, 11, 12, 13, 15, 16];

const findLong = nums.reduce(
  (acc, cur, index, arr) => {
    if (index === 0) {
      acc.current = [cur];
      acc.best = [cur];
      return acc;
    }

    if (cur === arr[index - 1] + 1) {
      acc.current.push(cur);
    } else {
      acc.current = [cur];
    }

    if (acc.current.length > acc.best.length) {
      acc.best = [...acc.current];
    }

    return acc;
  },
  { current: [], best: [] }
);

console.log(findLong.best);
