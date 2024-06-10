import { Request, Response } from "express";
import AppError from "../utils/app-error";

export const verifyCode = (req: Request, res: Response) => {
  try {
    arrayMerge([10, 11, 12], [1, 2, 3, 4, 5, 6]);
    const { code } = req.body;
    //   Server rules are simple: if the received code is not 6 digits long OR the last digit is 7,
    if (code.toString().length !== 6) {
      throw Error("Verification Error");
    }

    if (code.toString().charAt(5) === "7") {
      throw Error("Verification Error");
    }

    console.log(`Verification code is: ${code}`);
    res.status(200).json({ message: "Verification code is valid" });
  } catch (error: any) {
    throw new AppError(400, error.message);
  }
};

const arrayMerge = (arr1: number[], arr2: number[]) => {
  //   console.log([...arr1.splice(0, 2)]);
  //   console.log([...arr1.splice(0, 2)]);
  let newArr = [];

  while (
    arr1.length
    // || arr2.length
  ) {
    if (!arr1[1]) {
      newArr.push(...[arr1[0] * 3]);
      arr1.splice(0, 1);
    } else {
      newArr.push(...[arr1[0] * 3, arr1[1] && arr1[1] * 2]);
      arr1.splice(0, 2);
    }
    // newArr.push(...[arr2[0] * 3, arr2[1] && arr2[1] * 2]);
    // arr2.splice(0, 2);
    // newArr.push(...newArr1.splice(0, 2));
    // newArr.push(...newArr2.splice(0, 2));
  }
  console.log("asd");
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
