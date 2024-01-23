import { countries } from '../data/countries.js';


const languagesSet = new Set();
const languagesMap = new Map();

for (const country of countries) {
    const languagesNew = country.languages;

    for (const languageKey in languagesNew) {
        if (languagesNew.hasOwnProperty(languageKey)) {
            const languageName = languagesNew[languageKey];
            if (languagesMap.has(languageName)) {
                const currentCount = languagesMap.get(languageName);
                languagesMap.set(languageName, currentCount + 1);
            } else {
                languagesMap.set(languageName, 1);
            }
            languagesSet.add(languageName);
        }
    }
}

const sortedLanguages = [...languagesMap.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([language, count]) => ({ [language]: count }));

console.log(sortedLanguages);

console.log(languagesSet);
console.log(languagesSet.size); //153 language
