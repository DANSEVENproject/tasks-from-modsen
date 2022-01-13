const biggest = (nums) =>
    nums
    .reverse(
        nums.sort((a, b) => {
            let val1 = '1',
                val2 = '1',
                val11 = '1',
                val22 = '1';
            for (let i = 1; i < String(a).length; i++)
                (val1 += '0'), (val11 += '00');
            for (let i = 1; i < String(b).length; i++)
                (val2 += '0'), (val22 += '00');
            return Math.floor(a * +val1) / +val11 - Math.floor(b * +val2) / +val22;
        })
    )
    .join('');
console.log(biggest([22, 1, 5, 4, 220, 66, 3, 3]));
//export default biggest;