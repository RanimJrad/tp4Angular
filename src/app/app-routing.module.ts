import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupermarketComponent } from './supermarket/supermarket.component';
import { AddComponent } from './add/add.component';
import { UpdateSupermarketComponent } from './update-supermarket/update-supermarket.component';

const routes: Routes = [{path: "supermarket", component : SupermarketComponent},
{path: "add", component : AddComponent},
{path: "updateSupermarket/:id", component: UpdateSupermarketComponent},
{ path: "", redirectTo: "supermarket", pathMatch: "full" }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
