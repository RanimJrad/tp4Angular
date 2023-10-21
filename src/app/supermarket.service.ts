import { Injectable } from '@angular/core';
import { SuperMarket } from './model/supermarket.model';

@Injectable({
  providedIn: 'root'
})
export class SupermarketService {
  Supermarket : SuperMarket[];
  super! : SuperMarket;
  constructor() { 
    
    this.Supermarket = [
    {idSuperMarket : 1, nomSuperMarket : "Carrefour", localisationSuperMarket : "Avenue Habib Thameur,Nabeul"  , dateCreation : new Date("01/14/2011")},
    {idSuperMarket : 2, nomSuperMarket : "Monoprix", localisationSuperMarket : " Avenue Habib Bourguiba,Nabeul", dateCreation : new Date("12/17/2010")},
    {idSuperMarket : 3, nomSuperMarket :"Mg", localisationSuperMarket : "Rue Ali Belhouane,Nabeul", dateCreation : new Date("02/20/2020")}
    ];
    }

    listeSupermarkets():SuperMarket[] {
      return this.Supermarket;
    }

    ajouter( prod: SuperMarket){
      this.Supermarket.push(prod);
    }

    supprimer( prod: SuperMarket){
      const index = this.Supermarket.indexOf(prod, 0);
      if (index > -1) {
      this.Supermarket.splice(index, 1);
      }
    }

    consulter(id:number):SuperMarket {
      this.super = this.Supermarket.find(p => p.idSuperMarket == id)!;
      return this.super;
      }

      trier(){
        this.Supermarket = this.Supermarket.sort((n1,n2) => {
        if (n1.idSuperMarket! > n2.idSuperMarket!) {
        return 1;
        }
        if (n1.idSuperMarket! < n2.idSuperMarket!) {
        return -1;
        }
        return 0;
        });
        }

      update(s:SuperMarket)
{
this.supprimer(s);
this.ajouter(s);
this.trier();
}
  }
