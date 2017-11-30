export const leadingZeros = (num) => {
		const size = 3;
		const newNum = '000' + num;
		return newNum.substr(newNum.length - size);
};
