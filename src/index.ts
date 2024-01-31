import { trapezoidalRule } from "@/mathematicalFormula/integral";
import { jacobiMethod } from "@/mathematicalFormula/jacobi";
import { newtonMethod } from "@/mathematicalFormula/newton";

/* newton_method
方程式 2 x**3 + 3 x − 2 = 0．初期値を x [0] = 2, 4 ステップ
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
連立方程式 2 x_1 − x_2 = 6, x_1 − 2 x_2 = 6,初期値を x_1 [0] = x 2 [0] = 0 ,5 ステップ
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
積分∫1/(x**2+1)dx,積分区間[0,1],5等分
 */
console.log(
  "trapezoidal rule",
  trapezoidalRule(0, 1, 5, (x: number) => 1 / (x ** 2 + 1)),
);
