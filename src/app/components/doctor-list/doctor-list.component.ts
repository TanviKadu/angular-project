import { Component } from '@angular/core';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent {
  doctors = [
    { name: 'Dr. Nidhi', specialty: 'Cardiologist', phone: '123-456-7890', email: 'nidhi@gmail.com' },
    { name: 'Dr. Tanvi', specialty: 'Dermatologist', phone: '987-654-3210', email: 'tanu@gmail.com' },
    { name: 'Dr. Mitali', specialty: 'Neurologist', phone: '555-666-7777', email: 'mitali@gmail.com' },
    { name: 'Dr. Riya', specialty: 'Endocrinologist ', phone:'555-666-7745', email: 'riya@gmail.com' },
   
    
  ];
}
