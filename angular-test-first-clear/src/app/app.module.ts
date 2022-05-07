import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FlexCssComponent} from './components/flex-css/flex-css.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ContactListComponent} from './components/contact-list/contact-list.component';
import {MaterialModule} from './material.module';
import {IntroductionComponent} from './components/static/introduction/introduction.component';
import {NavBarComponent} from './components/static/nav-bar/nav-bar.component';
import { ContactComponent } from './components/contact-list/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    FlexCssComponent,
    ContactListComponent,
    IntroductionComponent,
    NavBarComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
