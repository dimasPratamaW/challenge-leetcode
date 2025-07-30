var strStr = function(haystack, needle) {
    let length_haystack = haystack.length;
    let length_needle = needle.length;

    if (length_needle === 0) return 0;

    for (let i = 0; i <= length_haystack - length_needle; i++) {
        console.log(`Checking starting at index ${i}`);

        let matched = true;

        for (let j = 0; j < length_needle; j++) {
            console.log(`  Comparing haystack[${i + j}] = '${haystack[i + j]}' with needle[${j}] = '${needle[j]}'`);

            if (haystack[i + j] !== needle[j]) {
                console.log("  ❌ Characters don't match. Breaking out of inner loop.");
                matched = false;
                break;
            }
        }

        if (matched) {
            console.log(`✅ Full match found at index ${i}`);
            return i;
        }
    }

    console.log("🔍 No match found.");
    return -1;
};


