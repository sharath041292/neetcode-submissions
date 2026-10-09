class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {};

        for (let str of strs) {
            // 1. Sort the string to create a uniform key for all anagrams
            const sortedKey = str.split('').sort().join('');

            // 2. If the key doesn't exist in the map, initialize it with an empty array
            if (!map[sortedKey]) {
                map[sortedKey] = [];
            }

            // 3. Push the original string into the matching anagram group
            map[sortedKey].push(str);
        }

        // 4. Return all grouped arrays as a single list of sublists
        return Object.values(map);
    }
    }
