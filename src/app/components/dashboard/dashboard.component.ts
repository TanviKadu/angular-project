import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  doctors = [
    { name: 'John Doe', specialty: 'Cardiologist' },
    { name: 'Jane Smith', specialty: 'Neurologist' }
  ];

  constructor(private authService: AuthService) {}

  bookAppointment(doctor: any) {
    alert(`Appointment booked with Dr. ${doctor.name}`);
  }

  logout() {
    this.authService.logout();
  }
}
