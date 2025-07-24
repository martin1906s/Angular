import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { Learning } from './app/components/learning/learning';

bootstrapApplication(Learning, appConfig)
  .catch((err) => console.error(err));
