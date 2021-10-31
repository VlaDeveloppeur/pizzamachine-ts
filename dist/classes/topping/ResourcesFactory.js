"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Chicken_1 = __importDefault(require("./Chicken"));
const Potato_1 = __importDefault(require("./Potato"));
const Garlic_1 = __importDefault(require("./Garlic"));
const CreamFresh_1 = __importDefault(require("./CreamFresh"));
const TomateSauce_1 = __importDefault(require("./TomateSauce"));
const Spinach_1 = __importDefault(require("./Spinach"));
class ResourceFactory {
    static make(name, quantity = 10) {
        if (ResourceFactory.KINDS.indexOf(name) === -1) {
            throw new Error(`name argument must be defined and be one of this kind ${ResourceFactory.KINDS.join(",")}`);
        }
        switch (name.toLowerCase()) {
            case ResourceFactory.CHICKEN:
                return new Chicken_1.default(quantity);
            case ResourceFactory.POTATO:
                return new Potato_1.default(quantity);
            case ResourceFactory.GARLIC:
                return new Garlic_1.default(quantity);
            case ResourceFactory.CREAMFRESH:
                return new CreamFresh_1.default(quantity);
            case ResourceFactory.TOMATOSAUCE:
                return new TomateSauce_1.default(quantity);
            case ResourceFactory.SPINACH:
                return new Spinach_1.default(quantity);
            default:
                throw new Error(`authorized resource names are ${ResourceFactory.KINDS.join(", ")}, ${name} given`);
        }
    }
}
exports.default = ResourceFactory;
ResourceFactory.CHICKEN = "poulet";
ResourceFactory.POTATO = "pomme de terre";
ResourceFactory.GARLIC = "ail";
ResourceFactory.CREAMFRESH = "crème fraîche";
ResourceFactory.TOMATOSAUCE = "sauce tomate";
ResourceFactory.SPINACH = "épinard";
ResourceFactory.KINDS = [
    ResourceFactory.CHICKEN,
    ResourceFactory.POTATO,
    ResourceFactory.GARLIC,
    ResourceFactory.CREAMFRESH,
    ResourceFactory.TOMATOSAUCE,
    ResourceFactory.SPINACH,
];
//# sourceMappingURL=ResourcesFactory.js.map