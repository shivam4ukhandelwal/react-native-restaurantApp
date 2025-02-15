// import { Restaurant } from "../services/types";

// // Levenshtein Distance Function
// function levenshteinDistance(str1: string, str2: string) {
//   const len1 = str1.length;
//   const len2 = str2.length;

//   let matrix = Array(len1 + 1);
//   for (let i = 0; i <= len1; i++) {
//     matrix[i] = Array(len2 + 1);
//   }

//   for (let i = 0; i <= len1; i++) {
//     matrix[i][0] = i;
//   }

//   for (let j = 0; j <= len2; j++) {
//     matrix[0][j] = j;
//   }

//   for (let i = 1; i <= len1; i++) {
//     for (let j = 1; j <= len2; j++) {
//       if (str1[i - 1] === str2[j - 1]) {
//         matrix[i][j] = matrix[i - 1][j - 1];
//       } else {
//         matrix[i][j] = Math.min(
//           matrix[i - 1][j] + 1,
//           matrix[i][j - 1] + 1,
//           matrix[i - 1][j - 1] + 1
//         );
//       }
//     }
//   }

//   return matrix[len1][len2];
// }

// // Function to filter items and menu items based on search term
// export function advancedSearch(
//   items: Restaurant[],
//   searchString: string,
//   maxDistance: number = 2
// ): Restaurant[] {
//   return items
//     .map((item) => {
//     //   // Check if the restaurant name or description matches
//     //   const itemNameMatch = levenshteinDistance(item.name.toLowerCase(), searchString.toLowerCase()) <= maxDistance;
//     //   const restaurantDescriptionMatch = levenshteinDistance(item.description.toLowerCase(), searchString.toLowerCase()) <= maxDistance;

//     //   // Filter matching menu items
//     //   const matchingMenu = item.menu.filter((menuItem) => {
//     //     return (
//     //       levenshteinDistance(menuItem.name.toLowerCase(), searchString.toLowerCase()) <= maxDistance ||
//     //       levenshteinDistance(menuItem.description.toLowerCase(), searchString.toLowerCase()) <= maxDistance
//     //     );
//     //   });

//     //   // If there's a match in the name, description, or menu, return the restaurant with filtered menu
//     //   if (itemNameMatch || restaurantDescriptionMatch || matchingMenu.length > 0) {
//     //     return item;
//     //   }

//     //   return null; // Return null for items with no matching items
//     // })
//     // .filter((restaurant) => restaurant !== null) as Restaurant[]; // Filter out null results
// }

export const isEmpty = (value: any) => {
  if (value == null) {
    return true; // Covers null and undefined
  }

  if (typeof value === 'boolean' || typeof value === 'number') {
    return false; // Booleans and numbers are never empty
  }

  if (typeof value === 'string' || Array.isArray(value)) {
    return value.length === 0; // Checks empty string and empty array
  }

  if (value instanceof Map || value instanceof Set) {
    return value.size === 0; // Checks empty Map or Set
  }

  if (typeof value === 'object') {
    return Object.keys(value).length === 0; // Checks empty object
  }

  return false; // If it's another type, assume it's not empty
};

export const getDiscount = (value: number = 0, discount: number = 0) => value * (100 - discount) / 100;








