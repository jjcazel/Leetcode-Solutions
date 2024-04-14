/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */


const addStrings = (num1, num2) => {
    num1 = num1.split('');
    num2 = num2.split('');
    let carry = '0';
    let result = [];

    while (num1.length || num2.length) {
        let [c1 = "0", c2 = "0"] = [num1.pop(), num2.pop()];
        let added = (Number(carry) + Number(c1) + Number(c2)).toString();
        carry = "0";
        if (Number(added) >= 10) {
            const [c1, c2] = added.split("");
            carry = c1;
            added = c2;
        }
        result.unshift(added);
    }
    if (Number(carry) > 0) result.unshift(carry);
    return result.join('');
};