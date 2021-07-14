import crisis from './categories/crisis.json';
import virus from './categories/virus.json';
import accident from './categories/accident.json';
import incident from './categories/incident.json';
import child_abuse from './categories/child_abuse.json';
import drug_abuse from './categories/drug_abuse.json';
import politics from './categories/politics.json';
import nikkei from './categories/nikkei.json';
import sports from './categories/sports.json';
import poverty from './categories/poverty.json';
import poverty_child from './categories/poverty_child.json';
import poverty_disparity from './categories/poverty_disparity.json';
import poverty_food from './categories/poverty_food.json';
import poverty_non_regular from './categories/poverty_non_regular.json';
import poverty_one_parent from './categories/poverty_one_parent.json';
import mental_disorder from './categories/mental_disorder.json';
import physical_disorder from './categories/physical_disorder.json';
import dispatch_caution from './categories/dispatch_caution.json';
import dispatch_fire from './categories/dispatch_fire.json';
import dispatch_rescue from './categories/dispatch_rescue.json';
import dispatch_support from './categories/dispatch_support.json';
import dispatch_survery from './categories/dispatch_survery.json';

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
  politics,
  nikkei,
  sports,
  poverty,
  poverty_child,
  poverty_disparity,
  poverty_food,
  poverty_non_regular,
  poverty_one_parent,
  mental_disorder,
  physical_disorder,
  dispatch_caution,
  dispatch_fire,
  dispatch_rescue,
  dispatch_support,
  dispatch_survery
];

interface DetectResult {
  id: string;
  name: string;
  count: number;
}

export const detectCategories = async (text:string) => {
  const detectedCategories:DetectResult[] = [];
  for await (const category of categories) {
    for await (const word of category.words) {
      const regexp = new RegExp(word, 'g');
      if (String(text).match(regexp)) {
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
  return detectedCategories.sort(function (a, b) {
    return b.count - a.count;
  });
}
