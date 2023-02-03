
import { company, industry, subTCompany, subTIndustry } from "./objects";
import { mergeArrays } from "./logic";



export function Page1Component() {
  const themes = mergeArrays(company, ["theme", "score"], industry, ["themeId", "avgThemeScore"]);
  const subThemes = mergeArrays(subTCompany, ["subTheme", "score"], subTIndustry, ["subThemeId", "avgSubThemeScore"]);


  
  return (
    <div>
      <h3>theme</h3>
      <ul>
        {
          themes.map((theme) => (
              <li>
                <span>id={theme.themeId}</span> - <span>company={theme.companyScore}</span> - <span>industry={theme.industryScore}</span>
              </li>
            )
          )
        }
      </ul>

      <h3>sub theme</h3>
      <ul>
        {
          subThemes.map((subTheme) => (
              <li>
                <span>id={subTheme.themeId}</span> - <span>company={subTheme.companyScore}</span> - <span>industry={subTheme.industryScore}</span>
              </li>
            )
          )
        }
      </ul>
    </div>
  )
}