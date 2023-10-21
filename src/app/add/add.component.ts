import { Component } from '@angular/core';
import { SuperMarket } from '../model/supermarket.model';
import { SupermarketService } from '../supermarket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  newSupermarket = new SuperMarket();

  constructor(private SupermarketService: SupermarketService,
    private router :Router,){}
  
  add(){
    console.log(this.newSupermarket);
    this.SupermarketService.ajouter(this.newSupermarket);
    this.router.navigate(['supermarket']);

  }

}
