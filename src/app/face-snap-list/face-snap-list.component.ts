
import { FaceSnapsService } from './../services/face-snaps.service';
import { FaceSnap } from './../models/face-snap.models';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { tap, takeUntil , map} from 'rxjs/operators';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit, OnDestroy  {
  faceSnaps!: FaceSnap[];
  //private destroy$!: Subject<boolean>;

  constructor(private faceSnapsService: FaceSnapsService) { }

  ngOnInit(): void {
    this.faceSnaps = this.faceSnapsService.getAllFaceSnaps();

    //this.destroy$ = new Subject<boolean>();

    /* interval(1000).pipe(
      tap(console.log),
      takeUntil(this.destroy$)
    ).subscribe(); */
  }


  ngOnDestroy(): void {
    //this.destroy$.next(true);
  }

}
