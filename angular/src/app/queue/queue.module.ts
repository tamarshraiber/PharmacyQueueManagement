import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnqueueComponent } from './enqueue/enqueue.component';
import { QueueStatusComponent } from './queue-status/queue-status.component';
import { DequeueComponent } from './dequeue/dequeue.component';
import { QueueRoutingModule } from './queue-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SsymbolPipe } from './queue-status/SsymbolPipe';
import { RsymbolPipe } from './queue-status/RsymbolPipe';



@NgModule({
  declarations: [EnqueueComponent, QueueStatusComponent,DequeueComponent,SsymbolPipe,RsymbolPipe],
  imports: [
    CommonModule,
    QueueRoutingModule,
    MatCardModule,
    MatExpansionModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class QueueModule { }
