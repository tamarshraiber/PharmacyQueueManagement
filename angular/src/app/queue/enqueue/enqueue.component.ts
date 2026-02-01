import { Component, OnInit } from '@angular/core';
import { PharmacyService } from '../../service/pharmacy.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';



@Component({
  selector: 'app-enqueue',
  templateUrl: './enqueue.component.html',
  styleUrl: './enqueue.component.css',
  standalone: false,
})
export class EnqueueComponent {
  pharmacyId = Number(localStorage.getItem("pharmacyId"));
  errorMessage = '';


  constructor(private _pharmacyServise: PharmacyService, private router: Router) { }

  regularQueue() {
    console.log('regularQueue');
    this._pharmacyServise.addRegularQueue(this.pharmacyId).subscribe({
      next: (res) => {
        console.log('res', res);
        Swal.fire({
          icon: 'info',
          title: 'Next in line:',
          text: `Your queue number is: R${String(res)}`,
          confirmButtonText: 'OK'
        });
        this.exportToPDF(`R${res}`);
      },
      error: (err) => {
        console.log('err', err);
        this.errorMessage = err;
      }
    })
  }


  specialQueue() {
    console.log('specialQueue');
    console.log('this.pharmacyId', this.pharmacyId);
    this._pharmacyServise.addSpecialQueue(this.pharmacyId).subscribe({

      next: (res) => {
        console.log('res', res);
        Swal.fire({
          icon: 'info',
          title: 'Next in line:',
          text: `Your queue number is: S${String(res)}`,
          confirmButtonText: 'OK'
        });
        this.exportToPDF(`S${res}`);

      },
      error: (err) => {
        console.log('err', err);
        this.errorMessage = err;
      }
    })
  }

  back() {
    this.router.navigate(['pharmacy/homeAdmin']);
  }


  exportToPDF(s: string) {
    const pdf = new jsPDF('p', 'mm', [100, 100]);
    pdf.setFontSize(24);
    pdf.text('your place in the turn: ', 10, 40);
    pdf.setFontSize(40);
    pdf.text(s, 34, 60);

    const pdfOutput = pdf.output('blob');
    saveAs(pdfOutput, 'your_report.pdf');
  }

}
