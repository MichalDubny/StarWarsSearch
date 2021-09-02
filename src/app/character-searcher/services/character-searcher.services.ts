import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Character, CharacterResponse } from "../interfaces/Character";


@Injectable()
export class CharacterSearcherService {
    public characterSearcherResultEvent = new Subject<any>();

    constructor(private http: HttpClient) {
    }

    public fetchCharacters(characterName: string): Observable<CharacterResponse> {
        return this.http.get<CharacterResponse>(`https://swapi.py4e.com/api/people/?search=${characterName}`);
    }

}
