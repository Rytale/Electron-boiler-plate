// This file contains utility functions that can be used across the application

/**
 * Formats a date string to a more readable format
 * @param {string} dateString - The date string to format
 * @returns {string} The formatted date string
 */
export const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

/**
 * Truncates a string to a specified length and adds an ellipsis
 * @param {string} str - The string to truncate
 * @param {number} length - The maximum length of the truncated string
 * @returns {string} The truncated string
 */
export const truncateString = (str, length) => {
  if (str.length <= length) {
    return str;
  }
  return str.slice(0, length) + '...';
};

// Add more utility functions as needed