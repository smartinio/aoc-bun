import input from "./2024-01.txt";

const parseInput = () =>
  input
    .trim()
    .split("\n")
    .map((x) => x.split("   ").map(Number))
    .reduce<{ left: number[]; right: number[] }>(
      (acc, [l, r]) => {
        acc.left.push(l);
        acc.right.push(r);
        return acc;
      },
      { left: [], right: [] },
    );

// part 1
{
  const { left, right } = parseInput();

  left.sort();
  right.sort();

  const result = left.reduce((acc, n, i) => acc + Math.abs(n - right[i]), 0);

  console.log("total distance:", result);
}

// part 2
{
  const { left, right } = parseInput();

  const count = right.reduce<Record<number, number>>((acc, n) => {
    acc[n] = (acc[n] || 0) + 1;
    return acc;
  }, {});

  const result = left.reduce((acc, n) => acc + n * (count[n] || 0), 0);

  console.log("similarity score:", result);
}
