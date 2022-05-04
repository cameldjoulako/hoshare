import { Injectable } from '@angular/core';
import { FaceSnap } from './../models/face-snap.models';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {

  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: 'Donald Z',
      description: 'Mon meilleur ami depuis tout petit',
      createdDate: new Date(),
      snaps: 140,
      imageUrl: './assets/images/developer.jpg',
      location: 'Nkongsamba'
    },
    {
      id: 2,
      title: 'Camel D',
      description: 'Mon meilleur ami depuis tout petit',
      createdDate: new Date(),
      snaps: 20,
      imageUrl: './assets/images/developer.jpg',
    },
    {
      id: 3,
      title: 'Daniel S',
      description: 'Mon meilleur ami depuis tout petit',
      createdDate: new Date(),
      snaps: 30,
      imageUrl: './assets/images/developer.jpg'
    },
    {
      id: 4,
      title: 'Idriss M',
      description: 'Mon meilleur partenaire depuis la fac',
      createdDate: new Date(),
      snaps: 0,
      imageUrl: './assets/images/developer.jpg',
      location: 'Douala'
    },
    {
      id: 5,
      title: 'Donald z',
      description: 'Mon meilleur ami depuis tout petit',
      createdDate: new Date(),
      snaps: 10,
      imageUrl: './assets/images/developer.jpg',
      location: 'Nkongsamba'
    },
    {
      id: 6,
      title: 'Camel L',
      description: 'Mon meilleur ami depuis tout petit',
      createdDate: new Date(),
      snaps: 0,
      imageUrl: './assets/images/developer.jpg',
    },
    {
      id: 7,
      title: 'Daniel s',
      description: 'Mon meilleur ami depuis tout petit',
      createdDate: new Date(),
      snaps: 30,
      imageUrl: './assets/images/developer.jpg'
    },
    {
      id: 8,
      title: 'Idriss M',
      description: 'Mon meilleur partenaire depuisla fac',
      createdDate: new Date(),
      snaps: 10,
      imageUrl: './assets/images/developer.jpg',
      location: 'Douala'
    },
  ];

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  getSnapfaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find( faceSnap => faceSnap.id === faceSnapId);
    if (!faceSnap) {
      throw new Error('Facesnap not found');
    } else {
      return faceSnap;
    }

  }

  snapfaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
    const faceSnap = this.getSnapfaceSnapById(faceSnapId);

    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;

  }


}
