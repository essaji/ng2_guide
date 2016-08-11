import {bootstrap} from '@angular/platform-browser-dynamic';
import {DirectiveCmp} from "./directives/main";
import {AppCmp} from './routing/main';
import {HTTP_PROVIDERS} from '@angular/http';
import {disableDeprecatedForms,provideForms} from '@angular/forms';
import {MainApp} from "./person_app/main";
import {PersonService} from "./person_app/services/person.service";

bootstrap(MainApp,[PersonService,HTTP_PROVIDERS,disableDeprecatedForms(),provideForms()]);
