import { eulerMethod } from "@/mathematicalFormula/differentialEquation";
import { trapezoidalRule } from "@/mathematicalFormula/integral";
import { jacobiMethod } from "@/mathematicalFormula/jacobi";
import { newtonMethod } from "@/mathematicalFormula/newton";

/* ニュートン法
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

/* jacobi法
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

/** Euler法
 微分方程式 y′(t)=2ty(t),y(0) = 1 ,刻み幅0.2のときのy(1)
 */
console.log(
  "euler method",
  eulerMethod(0, 1, 5, 1, (t: number, y: number) => 2 * t * y),
);
