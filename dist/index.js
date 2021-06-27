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
const poverty_json_1 = __importDefault(require("./categories/poverty.json"));
const politics_json_1 = __importDefault(require("./categories/politics.json"));
const nikkei_json_1 = __importDefault(require("./categories/nikkei.json"));
const sports_json_1 = __importDefault(require("./categories/sports.json"));
const mental_disorder_json_1 = __importDefault(require("./categories/mental_disorder.json"));
const physical_disorder_json_1 = __importDefault(require("./categories/physical_disorder.json"));
;
exports.categories = [
    crisis_json_1.default,
    virus_json_1.default,
    accident_json_1.default,
    incident_json_1.default,
    child_abuse_json_1.default,
    drug_abuse_json_1.default,
    poverty_json_1.default,
    politics_json_1.default,
    nikkei_json_1.default,
    sports_json_1.default,
    mental_disorder_json_1.default,
    physical_disorder_json_1.default,
];
const detectCategories = async (text) => {
    const detectedCategories = [];
    for (const category of exports.categories) {
        for (const word of category.words) {
            const regexp = new RegExp(word, 'g');
            if (text.match(regexp)) {
                detectedCategories.push({
                    id: category.id,
                    name: category.name,
                });
            }
        }
    }
    return detectedCategories;
};
exports.detectCategories = detectCategories;
