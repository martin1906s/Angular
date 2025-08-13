import { Component, Input } from '@angular/core';
import { InvoiceItem, InvoiceItemview } from '../invoice-item/invoice-item';

@Component({
  selector: 'invoice-detail-view',
  imports: [InvoiceItemview],
  templateUrl: './invoice-detail-view.html',
})
export class InvoiceDetailView {
  @Input() items!: InvoiceItem[];
}
