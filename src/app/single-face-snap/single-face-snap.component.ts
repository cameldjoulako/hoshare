import { Observable } from 'rxjs';
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
  faceSnap$!: Observable<FaceSnap>;
  buttonText!: string;

  constructor(private faceSnapsService: FaceSnapsService, private route: ActivatedRoute) {

   }

  ngOnInit() {
    this.buttonText = 'Oh Snap!';
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapsService.getFaceSnapById(faceSnapId);

  }

  onSnap() {
    /* if (this.buttonText === 'Oh Snap!') {
      this.faceSnapsService.snapfaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = 'Oops UnSnap';
    } else {

      this.faceSnapsService.snapfaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = 'Oh Snap!';
    } */
  }

}
