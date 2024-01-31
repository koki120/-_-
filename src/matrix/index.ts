export type Matrix = number[][];

export const initializeZeroMatrix = (A: Matrix): Matrix => {
  let C: Matrix = new Array(A.length);
  for (let i = 0; i < A.length; i++) {
    C[i] = new Array(A[0].length).fill(0);
  }
  return C;
};

export const sum = (A: Matrix, B: Matrix) => {
  if (A.length != B.length || A[0].length != B[0].length) {
    throw new Error("Number of columns or rows not equal");
  }

  let C: Matrix = initializeZeroMatrix(A);

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[0].length; j++) {
      C[i][j] = A[i][j] + B[i][j];
    }
  }
  return C;
};

export const minus = (A: Matrix, B: Matrix) => {
  if (A.length != B.length || A[0].length != B[0].length) {
    throw new Error("Number of columns or rows not equal");
  }

  let C: Matrix = new Array(A.length);
  for (let i = 0; i < A.length; i++) {
    C[i] = new Array(A[0].length).fill(0);
  }

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[0].length; j++) {
      C[i][j] = A[i][j] - B[i][j];
    }
  }
  return C;
};

export const product = (A: Matrix, B: Matrix) => {
  if (A[0].length != B.length) {
    throw new Error("Incompatible matrix dimensions for multiplication");
  }

  let C: Matrix = new Array(A.length);
  for (let i = 0; i < A.length; i++) {
    C[i] = new Array(B[0].length).fill(0);
  }

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B[0].length; j++) {
      for (let k = 0; k < A[0].length; k++) {
        C[i][j] += A[i][k] * B[k][j];
      }
    }
  }
  return C;
};

export const extractDiagonal = (A: Matrix): Matrix => {
  let D: Matrix = initializeZeroMatrix(A);
  for (let i = 0; i < A.length; i++) {
    D[i][i] = A[i][i];
  }
  return D;
};

export const extractLower = (A: Matrix): Matrix => {
  let L: Matrix = initializeZeroMatrix(A);
  for (let i = 0; i < A.length; i++) {
    for (let j = i - 1; j > -1; j--) {
      L[i][j] = A[i][j];
    }
  }
  return L;
};

export const extractUpper = (A: Matrix): Matrix => {
  let U: Matrix = initializeZeroMatrix(A);

  for (let i = 0; i < A.length; i++) {
    for (let j = i + 1; j < A.length; j++) {
      U[i][j] = A[i][j];
    }
  }
  return U;
};
