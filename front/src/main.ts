import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { Invoice } from './app/components/invoice/invoice';

bootstrapApplication(Invoice, appConfig)
  .catch((err) => console.error(err));
