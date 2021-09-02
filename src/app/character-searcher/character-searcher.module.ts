import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angular-material.module';
import { CharacterSearcherRoutingModule } from './character-searcher-routing.module';

import { CharacterSearcherComponent } from './character-searcher.component';
import { HighlightSearchPipe } from './pipe/highlight.pipe';
import { CharacterSearcherService } from './services/character-searcher.services';

@NgModule({
    imports: [
        AngularMaterialModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CharacterSearcherRoutingModule,
    ],
    declarations: [
        HighlightSearchPipe,
        CharacterSearcherComponent,
        // ...CONVERTER_COMPONENTS,
    ],
    providers: [ 
        CharacterSearcherService
    ],
})
export class CharacterSearcherModule { }
