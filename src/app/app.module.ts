import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProseMirrorEditorComponent } from "./prose-mirror-editor/prose-mirror-editor.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProseMirrorEditorComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
