import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { DoctorListComponent } from './components/doctor-list/doctor-list.component';
import { AppointmentBookingComponent } from './components/appointment-booking/appointment-booking.component';
import { PatientDashboardComponent } from './components/patient-dashboard/patient-dashboard.component';
import { DoctorDashboardComponent } from './components/doctor-dashboard/doctor-dashboard.component';



const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'doctors', component: DoctorListComponent },
  { path: 'book-appointment', component: AppointmentBookingComponent },
  { path: 'patient-dashboard', component: PatientDashboardComponent },
  { path: 'doctor-dashboard', component: DoctorDashboardComponent },
  { path: '', redirectTo: '/patient-dashboard', pathMatch: 'full' } // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
