"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.detectCategories = exports.categories = void 0;
const crisis_json_1 = __importDefault(require("./categories/crisis.json"));
const virus_json_1 = __importDefault(require("./categories/virus.json"));
const accident_json_1 = __importDefault(require("./categories/accident.json"));
const incident_json_1 = __importDefault(require("./categories/incident.json"));
const child_abuse_json_1 = __importDefault(require("./categories/child_abuse.json"));
const drug_abuse_json_1 = __importDefault(require("./categories/drug_abuse.json"));
const politics_json_1 = __importDefault(require("./categories/politics.json"));
const nikkei_json_1 = __importDefault(require("./categories/nikkei.json"));
const sports_json_1 = __importDefault(require("./categories/sports.json"));
const poverty_json_1 = __importDefault(require("./categories/poverty.json"));
const poverty_child_json_1 = __importDefault(require("./categories/poverty_child.json"));
const poverty_disparity_json_1 = __importDefault(require("./categories/poverty_disparity.json"));
const poverty_food_json_1 = __importDefault(require("./categories/poverty_food.json"));
const poverty_non_regular_json_1 = __importDefault(require("./categories/poverty_non_regular.json"));
const poverty_one_parent_json_1 = __importDefault(require("./categories/poverty_one_parent.json"));
const mental_disorder_json_1 = __importDefault(require("./categories/mental_disorder.json"));
const physical_disorder_json_1 = __importDefault(require("./categories/physical_disorder.json"));
const dispatch_caution_json_1 = __importDefault(require("./categories/dispatch_caution.json"));
const dispatch_fire_json_1 = __importDefault(require("./categories/dispatch_fire.json"));
const dispatch_rescue_json_1 = __importDefault(require("./categories/dispatch_rescue.json"));
const dispatch_support_json_1 = __importDefault(require("./categories/dispatch_support.json"));
const dispatch_survery_json_1 = __importDefault(require("./categories/dispatch_survery.json"));
;
exports.categories = [
    crisis_json_1.default,
    virus_json_1.default,
    accident_json_1.default,
    incident_json_1.default,
    child_abuse_json_1.default,
    drug_abuse_json_1.default,
    politics_json_1.default,
    nikkei_json_1.default,
    sports_json_1.default,
    poverty_json_1.default,
    poverty_child_json_1.default,
    poverty_disparity_json_1.default,
    poverty_food_json_1.default,
    poverty_non_regular_json_1.default,
    poverty_one_parent_json_1.default,
    mental_disorder_json_1.default,
    physical_disorder_json_1.default,
    dispatch_caution_json_1.default,
    dispatch_fire_json_1.default,
    dispatch_rescue_json_1.default,
    dispatch_support_json_1.default,
    dispatch_survery_json_1.default
];
const detectCategories = async (text) => {
    const detectedCategories = [];
    for await (const category of exports.categories) {
        for await (const word of category.words) {
            const regexp = new RegExp(word, 'g');
            if (String(text).match(regexp)) {
                const ids = detectedCategories.map((c) => { return c.id; });
                const idx = ids.indexOf(category.id);
                if (idx === -1) {
                    detectedCategories.push({
                        id: category.id,
                        name: category.name,
                        count: 1,
                    });
                }
                else {
                    let count = detectedCategories[idx].count + 1;
                    detectedCategories.splice(idx, 1, {
                        id: category.id,
                        name: category.name,
                        count: count,
                    });
                }
            }
        }
    }
    return detectedCategories.sort(function (a, b) {
        return b.count - a.count;
    });
};
exports.detectCategories = detectCategories;
