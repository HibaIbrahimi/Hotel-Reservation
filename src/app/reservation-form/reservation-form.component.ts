import { Component , OnInit} from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule ],
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.css'
})
export class ReservationFormComponent {
  reservationForm: FormGroup = new FormGroup({});
  
  onSubmit(){
    if(this.reservationForm.valid){
      console.log("valid")
    }
    
  }
}
