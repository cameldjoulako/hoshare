import { FaceSnapsService } from './../services/face-snaps.service';
import { FaceSnap } from './../models/face-snap.models';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;
  buttonText!: string;

  constructor(private faceSnapService: FaceSnapsService, private route: ActivatedRoute) {

   }

  ngOnInit(): void {
    this.buttonText = 'Oh Snap!';
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapService.getSnapfaceSnapById(faceSnapId);
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

}
