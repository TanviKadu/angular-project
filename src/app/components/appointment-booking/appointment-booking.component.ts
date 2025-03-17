import { Component } from '@angular/core';

@Component({
  selector: 'app-appointment-booking',
  templateUrl: './appointment-booking.component.html',
  styleUrls: ['./appointment-booking.component.css']
})
export class AppointmentBookingComponent {
  doctors = [
    { id: 1, name: 'Dr. Nidhi', specialty: 'Cardiologist' },
    { id: 2, name: 'Dr. Tanvi', specialty: 'Dermatologist' },
    { id: 3, name: 'Dr. Mitali', specialty: 'Neurologist' },
    { id: 4, name: 'Dr. Riya', specialty: 'Endocrinologist' },
    
  ];

  appointment = {
    doctor: '',
    date: '',
    time: '',
    patientName: '',
    patientEmail: ''
  };

  onBookAppointment() {
    console.log('Appointment Details:', this.appointment);
    alert(`Appointment booked successfully with ${this.appointment.doctor} on ${this.appointment.date} at ${this.appointment.time}`);
  }
}
