import { NgModule }                          from '@angular/core';
import { BrowserModule }                     from '@angular/platform-browser';
import { FormsModule }                       from '@angular/forms';

//custom components
import { HeaderComponent }                   from './views/header/header.component';
import { AboutComponent }                    from './views/about/about.component';
import { AppComponent }                      from './app.component';

//material css
import { MaterialModule }                    from '@angular/material';
import { BrowserAnimationsModule }           from '@angular/platform-browser/animations';

import 'hammerjs';


@NgModule({
  imports: [ 
  	BrowserModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  declarations: [ 
  	HeaderComponent,
  	AboutComponent,
    AppComponent 
  ],
  bootstrap: [ 
    AppComponent 
  ],
  entryComponents: [
    HeaderComponent,
    AboutComponent,
    AppComponent
  ]
})
export class AppModule { }
