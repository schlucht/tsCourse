import { Sorter } from './sorter';
import { NumberCollection } from './numberCollection';

const numberCollection = new NumberCollection([10, 2, -6, 10, 15, 63, -5]);
const sorter = new Sorter(numberCollection);
sorter.sort();
console.log(numberCollection);
