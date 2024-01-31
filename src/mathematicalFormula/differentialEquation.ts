/**
 * オイラー法により常微分方程式の数値解を求める関数
 * @param start 解の計算を開始する t の値
 * @param end 解の計算を終了する t の値
 * @param n 分割数 (区間をいくつの小区間に分割するか)
 * @param init 初期値 y(t=start)
 * @param derivative 導関数 dy/dt の定義
 * @returns オイラー法による常微分方程式の数値解
 */
export const eulerMethod = (
  start: number,
  end: number,
  n: number,
  init: number,
  derivative: (t: number, y: number) => number,
) => {
  const h = (end - start) / n;
  let y = init;
  for (let i = 0; i < n; i++) {
    y = y + h * derivative(start + i * h, y);
  }
  return y;
};
