export const siteUrl = "https://www.byshunno.com";

export const brandName = "Shunno O Oshim";
export const siteDescription =
  "Shunno O Oshim an independent niche perfume house creating smells from rare natural materials, wild oud, animalic musk, and botanical extracts.";

export function productNameFromSlug(value = "") {
  try {
    return decodeURIComponent(value.replace(/\+/g, " ")).replace(/-/g, " ").trim();
  } catch {
    return value.replace(/[-+]/g, " ").trim();
  }
}
