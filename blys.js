const arrayMerge = (arr1, arr2) => {
  //   console.log([...arr1.splice(0, 2)]);
  //   console.log([...arr1.splice(0, 2)]);
  let newArr = [];
  let newArr1 = arr1.map((item, i) => {
    if (i % 2 == 0) {
      return item * 3;
    } else {
      return item * 2;
    }
  });
  let newArr2 = arr2.map((item, i) => {
    if (i % 2 == 0) {
      return item * 3;
    } else {
      return item * 2;
    }
  });
  while (arr1.length || arr2.length) {
    newArr.push(...newArr1.splice(0, 2));
    newArr.push(...newArr2.splice(0, 2));
  }
  //   console.log(
  //     newArr.map((item, i) => {
  //       if (i % 2 == 0) {
  //         return item * 3;
  //       } else {
  //         return item * 2;
  //       }
  //     })
  //   );
  console.log(newArr);
};
arrayMerge([10, 11, 12], [1, 2, 3]);
