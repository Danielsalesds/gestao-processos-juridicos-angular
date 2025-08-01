import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

console.log('Bootstrap com appConfig providers:', appConfig.providers);
bootstrapApplication(App, appConfig).catch(console.error);

