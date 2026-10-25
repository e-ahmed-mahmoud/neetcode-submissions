class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
          const wordsMap = new Map<string, string[]>();

  for (let str of strs) {
    const word = str.split("").sort().join();
    if (!wordsMap.has(word)) {
      wordsMap.set(word, []);
    } 
    
    wordsMap.get(word)!.push(str);
    
  }
  return Array.from(wordsMap.values());


    }
}
