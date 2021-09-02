import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, Subscription, timer } from 'rxjs';
import { debounce } from 'rxjs/operators';
import { Character, CharacterResponse } from './interfaces/Character';
import { CharacterSearcherService } from './services/character-searcher.services';

@Component({
  selector: 'app-character-searcher',
  templateUrl: './character-searcher.component.html',
  styleUrls: ['./character-searcher.component.less']
})
export class CharacterSearcherComponent implements OnInit, OnDestroy {

  public form: FormGroup;
  public isBusy: boolean = false;
  public characters: Character[] = [];
  public hasResult: boolean = true;

  private subscription!: Subscription;
  private subject: Subject<void> = new Subject();

  constructor(
    public fb: FormBuilder,
    private characterSearcherService: CharacterSearcherService,
  ) {
    this.form = this.setFormGroup();
  }

  ngOnInit() {
    this.subject
      .pipe(debounce(() => timer(500)))
      .subscribe(() => {
        this.sendRequestToFindCharacters();
      });
  }

  public onChangeValue() {
    this.subject.next();
  }

  public haveCharacters(): boolean {
    return this.characters.length > 0;
  }

  private setFormGroup(): FormGroup {
    return this.fb.group({
      characterName: new FormControl('', {
        validators: [Validators.required],
      })
    });
  }

  private sendRequestToFindCharacters() {
    if (this.isBusy) {
      return;
    }

    const serachName = this.form.value.characterName;
    if (serachName === '') {
      this.characters = [];
      return;
    }

    this.isBusy = true;
    this.subscription = this.characterSearcherService.fetchCharacters(serachName)
      .subscribe((charactersResponse: CharacterResponse) => {
        if (charactersResponse?.results) {
          this.characters = charactersResponse.results;
          this.hasResult = (charactersResponse.results.length > 0);
        }
        this.isBusy = false;
      }, (err) => {
        this.characters = [];
        this.hasResult = false;
        this.isBusy = false;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
