/*
 *
 * 주어진 array가 단 한번의 swap으로 non-decreasing order로 sort될 수 있다면 true, 그렇지 않다면 false를 반환하는 함수를 작성하세요.
 *
 * 단, 중복 요소는 없습니다.
 *
 * < Examples >
 *
 * singleSwapSort([3, 2, 1]); // true - 3과 1을 바꾸는 swap
 * singleSwapSort([4, 3, 2, 1]); // false
 *
 */

const singleSwapSort = (array: number[]): boolean => {
  // array 를 소팅한 새로운 배열 생성
  // array를 하나씩 교체하는 함수 작성
  // 두개 비교하고 맞으면 true 안되면 false
  // 18min
  const newArray = JSON.stringify(array.slice().sort((a, b) => a - b));

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      let originNumber = array[i];

      array[i] = array[j];
      array[j] = originNumber;

      const thisArray = JSON.stringify(array);

      if (newArray === thisArray) {
        return true;
      } else {
        array[j] = array[i];
        array[i] = originNumber;
      }
    }
  }

  return false;
}

export default singleSwapSort;
