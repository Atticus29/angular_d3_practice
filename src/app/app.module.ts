import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LineExampleComponent } from './line-example/line-example.component';
import { D3Service } from './d3/d3.service';

import { GraphComponent } from './visuals/graph/graph.component';
import { LinkVisualComponent } from './visuals/shared/link-visual.component';
import { nodeVisualComponent } from './visuals/shared/node-visual.component';

@NgModule({
  declarations: [
    AppComponent,
    LineExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [D3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
