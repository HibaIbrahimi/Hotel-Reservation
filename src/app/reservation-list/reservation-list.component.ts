import { Component , OnInit} from '@angular/core';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';
import { NgFor , NgIf} from '@angular/common';
import { RouterLink } from "@angular/router";
import { HomeComponent } from '../home/home.component';
@Component({
  selector: 'app-reservation-list',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink, HomeComponent],
  templateUrl: './reservation-list.component.html',
  styleUrl: './reservation-list.component.css'
})
export class ReservationListComponent implements OnInit{

  reservations: Reservation[] = [];

  constructor(private reservationService: ReservationService){}

  ngOnInit(): void{
    this.reservationService.getReservations().subscribe(reservations => {
      this.reservations = reservations
    });
  }

  deleteReservation(id: string){
    this.reservationService.deleteReservation(id).subscribe(()=>{
          console.log("Delete request processed")
        })
  }

}
