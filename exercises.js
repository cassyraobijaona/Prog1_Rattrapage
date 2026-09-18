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


module.exports = {
  NegatifPositif,
  Echanger,
  Ranger
};
