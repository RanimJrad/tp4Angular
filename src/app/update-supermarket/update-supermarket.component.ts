import { Component, OnInit } from '@angular/core';
import { SuperMarket } from '../model/supermarket.model';
import { SupermarketService } from '../supermarket.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-supermarket',
  templateUrl: './update-supermarket.component.html',
})
export class UpdateSupermarketComponent implements OnInit{

  currentSupermarket= new SuperMarket();

  constructor(private activatedRoute: ActivatedRoute,
    private SupermarketService: SupermarketService,
    private router :Router) { }

  ngOnInit() {
    this.currentSupermarket = this.SupermarketService.consulter(this.activatedRoute.snapshot. params['id']);
    //console.log(this.currentSupermarket);
    
  }
  updateSupermarket(){
    this.SupermarketService.update(this.currentSupermarket);
    this.router.navigate(['supermarket'])!;
    }

}
