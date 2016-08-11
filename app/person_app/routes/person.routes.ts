import {provideRouter} from '@angular/router';
import {DisplayPeopleCmp} from "../directives/components/display_people.component";
import {AddPersonCmp} from "../directives/components/add_person.component";

export const personRoutes = provideRouter([
    {path: "", component: DisplayPeopleCmp, useAsDefault: true},
    {path: "add_person", component: AddPersonCmp}
]);