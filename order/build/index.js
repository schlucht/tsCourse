"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sorter_1 = require("./sorter");
const numberCollection_1 = require("./numberCollection");
const numberCollection = new numberCollection_1.NumberCollection([10, 2, -6, 10, 15, 63, -5]);
const sorter = new sorter_1.Sorter(numberCollection);
sorter.sort();
console.log(numberCollection);
