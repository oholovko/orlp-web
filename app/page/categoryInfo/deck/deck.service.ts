import { Injectable } from '@angular/core';
import {ORLPService} from "../../../orlp.service";
import {Observable} from "rxjs/Observable";
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {DeckPublic} from "../../../classes/DeckDTO/public.deck.DTO";
import {DTOConverter} from "../../../classes/dto.Converter";

@Injectable()
export class DeckService {

    constructor(private orlp: ORLPService) { }

    getDecks(url : string): Observable<DeckPublic[]> {
        return this.orlp.get(url)
            .map((response: Response) => <DeckPublic[]> DTOConverter.jsonArrayToCollection(DTOConverter.jsonToPublicDeck, response.json()))
            .catch(this.handleError);
    }

    addDeck(body: DeckPublic, url: string): Observable<DeckPublic> {
        return this.orlp.post(url, body)
            .map((res: Response) =>  res.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);

        return Observable.throw(error.json().error || 'Server error');
    }
}