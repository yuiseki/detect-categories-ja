import crisis from './categories/crisis.json';
import virus from './categories/virus.json';
import accident from './categories/accident.json';
import incident from './categories/incident.json';
import child_abuse from './categories/child_abuse.json';
import drug_abuse from './categories/drug_abuse.json';
import poverty from './categories/poverty.json';
import politics from './categories/politics.json';
import nikkei from './categories/nikkei.json';
import sports from './categories/sports.json';
import mental_disorder from './categories/mental_disorder.json';
import physical_disorder from './categories/physical_disorder.json';

interface Category {
  id: string;
  name: string;
  words: string[];
};

export const categories:Category[] = [
  crisis,
  virus,
  accident,
  incident,
  child_abuse,
  drug_abuse,
  poverty,
  politics,
  nikkei,
  sports,
  mental_disorder,
  physical_disorder,
];

interface DetectResult {
  id: string;
  name: string;
  count: number;
}

export const detectCategories = async (text:string) => {
  const detectedCategories:DetectResult[] = [];
  for (const category of categories) {
    for (const word of category.words) {
      const regexp = new RegExp(word, 'g');
      if (text.match(regexp)) {
        const ids = detectedCategories.map((c) => {return c.id});
        const idx = ids.indexOf(category.id);
        if (idx === -1) {
          detectedCategories.push({
            id: category.id,
            name: category.name,
            count: 1,
          })
        } else {
          let count = detectedCategories[idx].count + 1;
          detectedCategories.splice(idx, 1, {
            id: category.id,
            name: category.name,
            count: count,
          })
        }
      }
    }
  }
  return detectedCategories;
}
