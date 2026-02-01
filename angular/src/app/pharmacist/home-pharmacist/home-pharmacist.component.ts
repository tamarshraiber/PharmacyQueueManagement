import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-pharmacist',
  templateUrl: './home-pharmacist.component.html',
  styleUrl: './home-pharmacist.component.css',
  standalone: false,
})
export class HomePharmacistComponent implements OnInit{
  showDashboard: boolean = false;
  name!:string;

  ngOnInit(): void {
    this.name=String(localStorage.getItem('pharmacist'));
  }

  constructor(private router:Router){}


  update(){
    this.router.navigate(['pharmacist/updatePharmacist']);

  }

  statusQueue(){
    this.router.navigate(['queue/queueStatus']);
  }

  chooseStation(){
    this.router.navigate(['pharmacist/showStation'])
  }

  // dequeue(){
  //   this.router.navigate(['queue/dequeue'])
  // }


  openDashboard() {
    this.showDashboard = !this.showDashboard; 
  }


}
