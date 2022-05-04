import { Router } from '@angular/router';
import { FaceSnapsService } from './../services/face-snaps.service';
import { FaceSnap } from './../models/face-snap.models';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  @Input() faceSnap!: FaceSnap;

  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  snaped!: boolean;
  buttonText!: string;

  constructor(private faceSnapService: FaceSnapsService, private router: Router) {

   }

  ngOnInit(): void {
    /* this.title = 'Donald';
    this.description = 'Mon meilleur ami depuis l\'enfance';
    this.createdDate = new Date();
    this.snaps = 15;
    this.imageUrl = '/src/app/images/develope.jpg'; */
    this.buttonText = 'Oh Snap!';
  }

  onSnap() {
    if (this.buttonText === 'Oh Snap!') {
      this.faceSnapService.snapfaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = 'Oops UnSnap';
    } else {
      this.faceSnapService.snapfaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = 'Oh Snap!';
    }
  }

  onView(): void {
    this.router.navigateByUrl(`facesnap/${this.faceSnap.id}`);
  }


}
