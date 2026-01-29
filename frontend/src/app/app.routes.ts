import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage';
import { StrainSearchComponent } from './pages/strain-search/strain-search';
import { StrainDatabase } from './pages/strain-database/strain-database';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'strain-search', component: StrainSearchComponent },
  { path: 'strain-database', component: StrainDatabase },
];
