import { IBaseScores } from "./interfaces";
import { company, industry, subTCompany, subTIndustry } from "./objects";


/**
 * Does stuff
 * @param {obj1[]} arr1 is the principal array, the source of index
 * @param {string[]} arr1Keys expects two strings like [ idPropName, valuePropName]
 * @param {obj2[]} arr2 is the secondary array
 * @param {string[]} arr2Keys expects two strings like [ idPropName, valuePropName]
 * @
 */
function mergeArrays<obj1, obj2>(
  arr1: obj1[], arr1Keys: [keyof obj1, keyof obj1],
  arr2: obj2[], arr2Keys: [keyof obj2, keyof obj2]): IBaseScores[] {
  const result: IBaseScores[] = [];

  for (let i = 0; i < arr1.length; i++) {
    const industryId = arr2.findIndex((element) => +element[arr2Keys[0]] === +arr1[i][arr1Keys[0]])

    result.push({
      themeId: +arr1[i][arr1Keys[0]],
      companyScore: +arr1[i][arr1Keys[1]],
      industryScore: +arr2[industryId][arr2Keys[1]]
    });
  }

  return result;
}

console.log(mergeArrays(company, ["theme", "score"], industry, ["themeId", "avgThemeScore"]));

const subResult = mergeArrays(subTCompany, ["subTheme", "score"], subTIndustry, ["subThemeId", "avgSubThemeScore"]);

console.log(subResult);
