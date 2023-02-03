export interface IBaseScores {
  themeId: number;
  industryScore: number;
  companyScore: number;
}

export interface ICompanyTheme {
  theme: number,
  score: number
};

export interface IIndustryTheme {
  themeId: number,
  avgThemeScore: number
};

export interface ICompanySubTheme {
  subTheme: number,
  score: number
};

export interface IIndustrySubTheme {
  subThemeId: number,
  avgSubThemeScore: number
};



