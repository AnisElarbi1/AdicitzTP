import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ErrorComponent} from './error/error.component';
import {SearchComponent} from './search/search.component';
import {ResultComponent} from './result/result.component';


const routes: Routes = [
  {path: '', component: SearchComponent},
  {path: 'search', component: SearchComponent},
  {path: 'result/:bookName', component: ResultComponent},

  {path: '**', component: ErrorComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
