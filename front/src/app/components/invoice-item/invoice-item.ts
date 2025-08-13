import { Component, Input } from '@angular/core';
import { InvoiceItem } from '../../model/invoiceItem';

@Component({
  selector: 'tr[invoice-item]',
  imports: [],
  templateUrl: './invoice-item.html',
})
export class InvoiceItemview {
  @Input() item!: InvoiceItem;
}
export { InvoiceItem };
