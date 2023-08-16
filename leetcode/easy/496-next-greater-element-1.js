var nextGreaterElement = function(nums1, nums2) {
    const indexChecker = {}
    const result = [];
    for(let i = 0; i < nums2.length; i++) {
        indexChecker[nums2[i]] = i
    }
    for(elem of nums1) {
        let currentIndex = indexChecker[elem] + 1;
        while(currentIndex <= nums2.length) {
            if(currentIndex >= nums2.length) {
                result.push(-1);
                break;
            }
            if(nums2[currentIndex] > elem) {
                result.push(nums2[currentIndex]);
                break;
            }
            currentIndex++;
        }
    }
    return result;
};
