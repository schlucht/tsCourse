

import { User } from './user';
import { Company } from './company';
import { CustomMap } from './customMap';

const user = new User();
const company = new Company();

const custMap = new CustomMap('map');

custMap.addMarker(user.location, user.toString());
custMap.addMarker(company.location, company.toString());

