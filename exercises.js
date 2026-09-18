function NegatifPositif(arr) {
  if (!arr || arr.length === 0) return arr;

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    while (left < right && arr[left] <= 0) {
      left++;
    }

    while (left < right && arr[right] > 0) {
      right--;
    }

    if (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }

  return arr;
}

function Echanger(arr, index1, index2) {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  return arr;
}

function Ranger(arr) {
  if (!arr || arr.length === 0) return arr;

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    while (left < right && arr[left] === 0) {
      left++;
    }

    while (left < right && arr[right] === 1) {
      right--;
    }

    if (left < right) {
      Echanger(arr, left, right);
      left++;
      right--;
    }
  }

  return arr;
}

function NombreUn(arr) {
  if (!arr || arr.length === 0) return 0;

  let firstOne = -1;
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === 1) {
      firstOne = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  if (firstOne === -1) return 0;

  
  return arr.length - firstOne;
}

function triLignes(M) {
  if (!M || M.length === 0) return M;

  for (let i = 0; i < M.length; i++) {
    for (let j = i + 1; j < M.length; j++) {
      const countI = NombreUn(M[i]);
      const countJ = NombreUn(M[j]);

      if (countJ < countI) {
        Echanger(M, i, j);
      }
    }
  }

  return M;
}



module.exports = {
  NegatifPositif,
  Echanger,
  Ranger,
  NombreUn,
  triLignes
};

