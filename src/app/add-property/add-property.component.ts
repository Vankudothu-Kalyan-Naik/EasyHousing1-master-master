import { Component, OnInit } from '@angular/core';
import {NgForm}from '@angular/forms';
import {Router}from '@angular/router';
import {BuyPropertyService} from '. ./services/buy-property.service';
@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  constructor(public buy-propertyService : BuyPropertyService,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(propertyForm:NgForm){
    this.buy-propertyService.createProperty().subscribe({
      next:(data)=>{},
      complete:()=>{this.router.navigate(['/search/'])},
      error:(err)=>{console.log("Unable to add" + err);}
      //{this.router.navigate(['/search/'])}
    })
  }

}
