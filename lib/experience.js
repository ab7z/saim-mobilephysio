export const GERMANY_QUALIFICATION_YEAR = 2011;
export const IRAN_QUALIFICATION_YEAR = 1988;
export const IRAN_EXPERIENCE_YEARS = GERMANY_QUALIFICATION_YEAR - IRAN_QUALIFICATION_YEAR;

export const getTotalExperienceYears = (date = new Date()) => (
    date.getFullYear() - IRAN_QUALIFICATION_YEAR
);
