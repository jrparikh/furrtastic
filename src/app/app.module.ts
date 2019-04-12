import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { PetprofileComponent } from './petprofile/petprofile.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { CoverageComponent } from './coverage/coverage.component';
import { QuoteComponent } from './quote/quote.component';
import { ContactusComponent } from './contactus/contactus.component';
import { UserpageComponent } from './userpage/userpage.component';
import { PaymentComponent } from './payment/payment.component';
import { PetprofileuserComponent } from './petprofileuser/petprofileuser.component';
import { CoverageuserComponent } from './coverageuser/coverageuser.component';
import { QuoteuserComponent } from './quoteuser/quoteuser.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    PetprofileComponent,
    NavComponent,
    LoginComponent,
    CoverageComponent,
    QuoteComponent,
    ContactusComponent,
    UserpageComponent,
    PaymentComponent,
    PetprofileuserComponent,
    CoverageuserComponent,
    QuoteuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
