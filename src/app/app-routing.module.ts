import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AnimalChartComponent } from './animal-chart/animal-chart.component';


const routes: Routes = [
   {// acts like a switch statement
    path: 'dashboard',
    component: DashboardComponent
  },
   {// acts like a switch statement
    path: 'animalChart',
    component: AnimalChartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
