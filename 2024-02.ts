import input from "./2024-02.txt";
const { abs, sign } = Math;

const isSafe = (report: number[]) =>
  report.every((curr, i) => {
    const [prev, next] = [report[i - 1], report[i + 1]];
    const [pdx, dx, adx = abs(dx)] = [prev - curr, curr - next];
    return !next || (adx && adx < 4 && (!pdx || sign(pdx) == sign(dx)));
  });

const countReports = (predicate: (r: number[]) => boolean) =>
  input
    .trim()
    .split("\n")
    .map((line) => line.split(" ").map(Number))
    .filter(predicate).length;

const part1 = countReports(isSafe);

const part2 = countReports(
  (rep) => isSafe(rep) || rep.some((_, i) => isSafe(rep.toSpliced(i, 1))),
);

console.log({ part1, part2 });
