import {ModuleWithProviders} from   '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ProductListComponent} from './products/product-list.component';
import {AboutComponent} from './about/about.component';
import {ServicesComponent} from './services/services.component';

export const router: Routes =[
{path:'',redirectTo:'products',pathMatch:'full'},
{path: 'about', component:AboutComponent},
{path:'services', component:ServicesComponent}
];
export const routes: ModuleWithProviders =RouterModule.forRoot(router);