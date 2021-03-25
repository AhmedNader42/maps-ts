import { Company } from "./Company";
import { CustomMap } from "./CustomMap";
import { User } from "./User";

const customMap = new CustomMap("mapdiv");

const user1 = new User();
const comp1 = new Company();

customMap.addMarker(user1);
customMap.addMarker(comp1);
