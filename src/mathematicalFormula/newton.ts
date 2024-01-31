/**
 * ニュートン法により方程式の解を求める関数
 * @param step 反復ステップ数
 * @param init 初期推定値
 * @param func 方程式の関数部分 f(x) の定義
 * @param derivative f(x) の導関数の定義
 * @returns 方程式の解
 */
export const newtonMethod = (
  step: number,
  init: number,
  func: (x: number) => number,
  derivative: (x: number) => number,
) => {
  let x = init;
  for (let index = 0; index < step; index++) {
    x = x - func(x) / derivative(x);
  }
  return x;
};
