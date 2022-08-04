import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParseFileService } from './services/parse-file.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [ParseFileService],
  bootstrap: [AppComponent],
})
export class AppModule {}
