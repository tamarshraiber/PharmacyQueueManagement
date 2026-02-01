import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router) { }


  createPharmacy() {
    console.log('☀️');
    this.router.navigate(['/signup']);

  }

  loginPharmacist() {
    console.log('🐹☀️✏️');

    this.router.navigate(['/loginPhararmacist']);
  }

  loginPharmacy() {
    this.router.navigate(['/loginPharmacy']);

  }

}
