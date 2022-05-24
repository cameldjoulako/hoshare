import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FaceSnap } from './../models/face-snap.models';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {

  constructor(private http: HttpClient) {}

  faceSnaps: FaceSnap[] = [];

  /* getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  } */

  getAllFaceSnaps(): Observable<FaceSnap[]> {
    return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
  }


    getFaceSnapById(faceSnapId: number): Observable<FaceSnap> {
      return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`);
    }

    snapfaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
      //const faceSnap = this.getFaceSnapById(faceSnapId);

      //snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;

    }

  addFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string }) {
    const faceSnap: FaceSnap = {
        ...formValue,
        snaps: 0,
        createdDate: new Date(),
        id: this.faceSnaps[this.faceSnaps.length - 1].id + 1
    };
    this.faceSnaps.push(faceSnap);
}


}
