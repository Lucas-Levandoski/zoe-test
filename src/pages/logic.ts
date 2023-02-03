import { IBaseScores } from "./interfaces";
import { company, industry, subTCompany, subTIndustry } from "./objects";

function mergeArrays<obj1, obj2>(
  arr1: obj1[], arr1Id: keyof obj1, arr1Score: keyof obj1,
  arr2: obj2[], arr2Id: keyof obj2, arr2Score: keyof obj2,): IBaseScores[] {
  const result: IBaseScores[] = [];

  for (let i = 0; i < arr1.length; i++) {
    const industryId = arr2.findIndex((element) => +element[arr2Id] === +arr1[i][arr1Id])

    result.push({
      themeId: +arr1[i][arr1Id],
      companyScore: +arr1[i][arr1Score],
      industryScore: +arr2[industryId][arr2Score]
    });
  }

  return result;
}

console.log(mergeArrays(company, "theme", "score", industry, "themeId", "avgThemeScore"));

const subResult = mergeArrays(subTCompany, "subTheme", "score", subTIndustry, "subThemeId", "avgSubThemeScore");

console.log(subResult);


