import { trapezoidalRule } from "@/mathematicalFormula/integral";
import { jacobiMethod } from "@/mathematicalFormula/jacobi";
import { newtonMethod } from "@/mathematicalFormula/newton";

/* newton_method
方程式 2 x 3 + 3 x − 2 = 0 を考える．初期値を x [0] = 2 として Newton 法を適用し， 4 ステップ目の近似解 x [4]
*/
console.log(
  "newton method",
  newtonMethod(
    4,
    2,
    (x: number) => 2 * x ** 3 + 3 * x - 2,
    (x: number) => 6 * x ** 2 + 3,
  ),
);

/* jacobi_metho
連立方程式 2 x 1 − x 2 = 6, x 1 − 2 x 2 = 6 を考える．初期値を x 1 [0] = x 2 [0] = 0 として Jacobi 法を適用し， 5 ステップ目 の近似解 x 1 [5], x 2 [5
*/
console.log(
  "jacobi method",
  jacobiMethod(
    5,
    [[0], [0]],
    [
      [2, -1],
      [1, -2],
    ],
    [[6], [6]],
  ),
);

/* 台形公式
積分∫1/(x**2+1)dxを考える．積分区間[0,1]を5等分して台形公式を適用し，この積分の近似値を
 */
console.log(
  "trapezoidal rule",
  trapezoidalRule(0, 1, 5, (x: number) => 1 / (x ** 2 + 1)),
);
