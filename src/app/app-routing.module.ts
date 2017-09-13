import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import { RecommendedLitsComponent } from './recommended-lits/recommended-lits.component';
import { MyLitsComponent } from './my-lits/my-lits.component';

import { HomepageComponent } from './homepage/homepage.component';
// import { MemberListComponent } from './members-display/member-list/member-list.component';
// import { PerformanceComponent } from './performance/performance.component'
// import { MembersDisplayComponent } from './members-display/members-display.component'

const routes: Routes = [
    { path: '', redirectTo: 'homepage', pathMatch: 'full' },
    { path: 'homepage',  component: HomepageComponent },
    { path: 'recommendedlits',  component: RecommendedLitsComponent },
    { path: 'mylits',  component: MyLitsComponent },
    //{ path: 'detail/:id', component: HeroDetailComponent },
    // { path: 'mypage',     component: MyPageComponent },
    // { path: 'membersdisplay',     component: MembersDisplayComponent },
    // { path: 'performance',     component: PerformanceComponent },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
export class AppRoutingModule {}