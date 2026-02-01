import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { PharmacyModule } from './pharmacy/pharmacy.module';
import { PharmacistModule } from './pharmacist/pharmacist.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, HeaderComponent, PharmacyModule,PharmacistModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project2';

  // handlePharmacistId(id: number) {
  //   console.log('ה-id של הרוקח שנמחק:', id);
  //   // כאן את יכולה לבצע פעולה עם ה-id, לדוגמה קריאה ל- API למחיקת הרוקח
  // }

}
