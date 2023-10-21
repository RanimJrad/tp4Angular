import { Component } from '@angular/core';
import { SuperMarket } from '../model/supermarket.model';
import { SupermarketService } from '../supermarket.service';

@Component({
  selector: 'app-supermarket',
  templateUrl: './supermarket.component.html',
  styleUrls: ['./supermarket.component.css']
})
export class SupermarketComponent {
  Supermarket : SuperMarket[];
  constructor(private SupermarketService: SupermarketService){
    this.Supermarket = SupermarketService.listeSupermarkets();

  }

  supprimerSupermarket(s:SuperMarket)
{
//console.log(s);
let conf = confirm("Etes-vous sûr ?");
if (conf){
  this.SupermarketService.supprimer(s);
}
}


}
