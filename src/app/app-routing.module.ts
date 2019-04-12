import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'petprofile', component: PetprofileComponent},
  {path: 'nav', component: NavComponent},
  {path: 'login', component: LoginComponent},
  {path: 'coverage', component: CoverageComponent},
  {path: 'quote', component: QuoteComponent},
  {path: 'contactus', component: ContactusComponent},
  {path: 'userpage', component: UserpageComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'petprofileuser', component: PetprofileuserComponent},
  {path: 'coverageuser', component: CoverageuserComponent},
  {path: 'quoteuser', component: QuoteuserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
