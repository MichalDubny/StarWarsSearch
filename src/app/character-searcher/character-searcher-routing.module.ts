import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router"; 
import { CharacterSearcherComponent } from "./character-searcher.component";

const routes: Routes = [
  { path: '', component: CharacterSearcherComponent },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CharacterSearcherRoutingModule {

}
