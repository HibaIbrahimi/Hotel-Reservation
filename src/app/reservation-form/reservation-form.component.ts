import { Component , OnInit} from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reservation-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,CommonModule ],
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.css'
})
export class ReservationFormComponent implements OnInit {
  reservationForm: FormGroup = new FormGroup({

  });

  constructor(private formbuilder: FormBuilder){

  }
  ngOnInit(): void {
    this.reservationForm = this.formbuilder.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['',[Validators.required , Validators.email]],
      roomNumber: ['', Validators.required]
    })
  }
  
  onSubmit(){
    if(this.reservationForm.valid){
      console.log("valid")
    }
    
  }
}
