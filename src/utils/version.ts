import { trim } from "./trim";

export const formatVersion = (version: string | undefined, versionTruncation: 0 | 1 | 2 | 3 | null): string => {
  if (version === undefined) return "";

  const versionString = trim(version, ". ").replace(new RegExp("_", "g"), ".");
  const versionParts = versionString.split(".");

  // Return if the string is not only digits once we removed the dots
  if (!/^\d+$/.test(versionParts.join(""))) {
    return versionString;
  }

  if (versionTruncation !== 0) {
    if (Number.isInteger(parseFloat(versionString))) {
      return parseInt(versionString, 10).toFixed(1);
    }
  }

  if (versionParts.length > 1) {
    if (versionTruncation !== null) {
      return versionParts.slice(0, versionTruncation + 1).join(".");
    }
  }

  return versionString;
};
