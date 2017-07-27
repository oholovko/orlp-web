import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {ORLPService} from "../../orlp.service";
import {UserDetailsDto} from "../../classes/UserDetailsDto";
import {DTOConverter} from "../../classes/dto.Converter";

@Injectable()
export class NavbarService {
    constructor(private orlp: ORLPService) {
    }

    getUserDetails(): Observable<UserDetailsDto> {
        return this.orlp.get('api/private/user/details')
            .map((response: Response) => <UserDetailsDto> DTOConverter.jsonToUserDetails(response.json()))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
