import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilesComponent } from './files/files.component';
import { ShowFilesComponent } from './files/show-files/show-files.component';
import { AddFilesComponent } from './files/add-files/add-files.component';
import { DeleteFilesComponent } from './files/delete-files/delete-files.component';
import { ShareFilesComponent } from './files/share-files/share-files.component';
import { SharedService } from './shared.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FilesComponent,
    ShowFilesComponent,
    AddFilesComponent,
    DeleteFilesComponent,
    ShareFilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
