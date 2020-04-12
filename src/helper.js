export function obtainYearDifference(year) {
  return new Date().getFullYear() - year;
}

export function calculateBrand(brand) {
  let increase;

  switch (brand) {
    case "European":
      increase = 1.3;
      break;
    case "American":
      increase = 1.15;
      break;

    case "Asian":
      increase = 1.05;
      break;

    default:
      break;
  }
  return increase;
}

export function obtainPlan(plan) {
  return plan === "basic" ? 1.2 : 1.5;
}

export function firstCapitalLetter(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
