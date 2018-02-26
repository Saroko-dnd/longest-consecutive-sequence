module.exports = function longestConsecutiveLength(array) {
    let allIntegers;
    let maxLengthOfSequence = 0;
    let bufferForLengthOfSequence = 0;

    allIntegers = array.reduce((storageObject, number) => {
        storageObject[number] = number;

        if (storageObject.min === undefined) {
            storageObject.min = number;
        } else if (storageObject.min > number) {
            storageObject.min = number;
        }

        if (storageObject.max === undefined) {
            storageObject.max = number;
        } else if (storageObject.max < number) {
            storageObject.max = number;
        }

        return storageObject;
    }, {});

    for (let number = allIntegers.min; number <= allIntegers.max; ++number) {
        if (!bufferForLengthOfSequence && allIntegers[number] !== undefined) {
            bufferForLengthOfSequence = 1;
        } else if (
            allIntegers[number] !== undefined &&
            allIntegers[number - 1] !== undefined
        ) {
            ++bufferForLengthOfSequence;
        } else {
            if (maxLengthOfSequence < bufferForLengthOfSequence) {
                maxLengthOfSequence = bufferForLengthOfSequence;
            }
            bufferForLengthOfSequence = 0;
        }
    }

    return maxLengthOfSequence > bufferForLengthOfSequence
        ? maxLengthOfSequence
        : bufferForLengthOfSequence;
};
