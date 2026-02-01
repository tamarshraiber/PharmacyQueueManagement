import { NgModule } from "@angular/core";
import { DequeueComponent } from "./dequeue/dequeue.component";
import { EnqueueComponent } from "./enqueue/enqueue.component";
import { QueueStatusComponent } from "./queue-status/queue-status.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: 'dequeue', component: DequeueComponent },
  { path: 'enqueue', component: EnqueueComponent },
  { path: 'queueStatus', component: QueueStatusComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QueueRoutingModule { }
