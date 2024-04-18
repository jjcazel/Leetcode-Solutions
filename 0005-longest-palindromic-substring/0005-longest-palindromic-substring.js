/**
 * @param {string} s
 * @return {string}
 */

// O(n^2) time and O(n) space where n is the length of the input string
const longestPalindrome = (s) => {
    let longestPalindrome = [0, 1];

    for (let i = 1; i < s.length; i++) {
        const oddLength = getLongestPalindrome(s, i - 1, i + 1);
        const evenLength = getLongestPalindrome(s, i - 1, i);
        const oddDiff = oddLength[1] - oddLength[0];
        const evenDiff = evenLength[1] - evenLength[0];
        const longestCurrPalindrome = oddDiff > evenDiff ? oddLength : evenLength;
        const longestCurrDiff = longestCurrPalindrome[1] - longestCurrPalindrome[0];
        const longestDiff = longestPalindrome[1] - longestPalindrome[0];
        longestPalindrome = longestDiff > longestCurrDiff ? longestPalindrome : longestCurrPalindrome;
    }

    const [start, end] = longestPalindrome;
    return s.slice(start, end);
};

function getLongestPalindrome(string, left, right) {
    while (left >= 0 && right < string.length) {
        if (string[left] === string[right]) {
            left--;
            right++;
        } else {
            break;
        }
    }

    return [left + 1, right];
}