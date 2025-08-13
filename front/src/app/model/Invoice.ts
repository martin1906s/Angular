import { company } from './company';
import { customers } from './customers';
import { InvoiceItem } from './invoiceItem';

export class Invoicemodel {
  id?: string;
  company!: company;
  customer!: customers;
  items!: InvoiceItem[];
}
