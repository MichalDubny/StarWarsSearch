import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    { path: '', loadChildren: () => import('./character-searcher/character-searcher.module').then((m) => m.CharacterSearcherModule), },
    { path: '**', loadChildren: () => import('./character-searcher/character-searcher.module').then((m) => m.CharacterSearcherModule), },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
