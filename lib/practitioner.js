export const PRACTITIONER_START_YEAR = 1999;

export function getPractitionerExperienceYears(currentYear = new Date().getFullYear()) {
    return currentYear - PRACTITIONER_START_YEAR;
}
