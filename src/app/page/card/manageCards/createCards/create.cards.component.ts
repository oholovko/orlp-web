import {Component, OnInit} from '@angular/core';
import {CreateCardsService} from './create.cards.service';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute} from '@angular/router';
import {AdminDeck} from '../../../../dto/AdminDTO/admin.deck.DTO';
import {ORLPService} from '../../../../services/orlp.service';
import {Link} from '../../../../dto/link';
import {CardUpdateDTO} from '../../../../dto/CardsDTO/CardUpdateDTO';


@Component({
  providers: [CreateCardsService],
  templateUrl: ('./create.cards.component.html'),
  styleUrls: ['./create.cards.css']
})

export class CreateCardsComponent implements OnInit {

  public deck: AdminDeck;
  public question: string;
  public answer: string;
  public title: string;
  public rating: number;
  public createCardMessage: string;
  public nameOfPageToBack: string;
  public imageArray: string[] = [];
  private url: string;
  private sub: Subscription;

  constructor(private createCardsService: CreateCardsService, private route: ActivatedRoute,
              private orlp: ORLPService) {
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(
      params => {
        const url = params['url'];
        const nameOfPageToBack = params['nameOfPageToBack'];
        this.url = url;
        this.nameOfPageToBack = nameOfPageToBack;
      }
    );
    this.takeDeck();
  }

  loadImage(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (file: any) => {
        this.imageArray.push(file.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  public getDeckLink(link: Link): string {
    return this.orlp.getShortLink(link);
  }

  createCard(imageInput: any) {
    this.createCardsService.createCard(
      new CardUpdateDTO(this.title, this.question, this.answer, this.imageArray), this.deck.deckId)
      .subscribe(() => {
        this.createCardMessage = 'Card created!';
        this.imageArray = [];
        this.clearFields();
      }, () => this.createCardMessage = 'Error. Please try again!');
  }

  clearFields() {
    this.answer = '';
    this.question = '';
    this.title = '';
  }

  public deleteCardImage(cardImageIndex: number) {
    this.imageArray.splice(cardImageIndex, 1);
  }

  private decodeLink(): void {
    this.url = this.orlp.decodeLink(this.url);
  }

  private takeDeck(): void {
    this.decodeLink();
    this.createCardsService.getDeck(this.url).subscribe(
      deck => {
        this.deck = deck;
      }
    );
  }
}
