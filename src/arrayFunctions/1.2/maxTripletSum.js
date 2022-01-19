export const maxTripletSum = (arr) => [...new Set(arr)].
flat().
sort((a, b) => b - a).
filter((item, i) => i < 3).
reduce((acc, item) => +acc + +item);