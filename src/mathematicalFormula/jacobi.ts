import {
  Matrix,
  extractDiagonal,
  sum,
  extractLower,
  extractUpper,
  initializeZeroMatrix,
  minus,
  product,
} from "@/matrix/index";

/**
 * ヤコビ法により連立方程式の解を求める関数
 * @param step 反復ステップ数
 * @param init 初期推定値ベクトル
 * @param A 係数行列
 * @param b 右辺ベクトル
 * @returns 連立方程式の解ベクトル
 */
export const jacobiMethod = (
  step: number,
  init: Matrix,
  A: Matrix,
  b: Matrix,
) => {
  if (A[0].length != b.length) {
    throw new Error("Number of columns not equal");
  }

  const D = extractDiagonal(A);
  const LU = sum(extractLower(A), extractUpper(A));

  let INVD = initializeZeroMatrix(D);
  for (let i = 0; i < D.length; i++) {
    INVD[i][i] = 1 / D[i][i];
  }

  let x = init;

  for (let i = 0; i < step; i++) {
    // x = -INVD*(U+L)*x + INVD*b
    x = minus(product(INVD, b), product(product(INVD, LU), x));
  }

  return x;
};
