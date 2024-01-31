/**
 * 台形則を用いて定積分を近似する関数
 * @param a 積分区間の下限
 * @param b 積分区間の上限
 * @param n 積分区間の分割数
 * @param func 被積分関数
 * @returns 台形則による定積分の近似値
 */
export const trapezoidalRule = (
  a: number,
  b: number,
  n: number,
  func: (s: number) => number,
) => {
  const h = (b - a) / n;
  let I = (h / 2) * (func(a) + func(b));
  for (let i = 1; i < n - 1; i++) {
    I += h * func(a + i * h);
  }
  return I;
};
