import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // ✅ Import FormsModule
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router'; // ✅ Import RouterModule
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DoctorListComponent } from './components/doctor-list/doctor-list.component';
import { AppointmentBookingComponent } from './components/appointment-booking/appointment-booking.component';
import { PatientDashboardComponent } from './components/patient-dashboard/patient-dashboard.component';
import { DoctorDashboardComponent } from './components/doctor-dashboard/doctor-dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AppointmentListComponent } from './components/appointment-list/appointment-list.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DoctorListComponent,
    AppointmentBookingComponent ,// ✅ Register the component
    AppointmentBookingComponent, PatientDashboardComponent, DoctorDashboardComponent, SidebarComponent, AppointmentListComponent // ✅ Register the component
  ],
  imports: [
    BrowserModule,
    FormsModule, // ✅ Add FormsModule here
    RouterModule, // ✅ Ensure RouterModule is here
    AppRoutingModule // ✅ Ensure AppRoutingModule is here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
