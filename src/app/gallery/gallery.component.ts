import { Component, OnInit } from '@angular/core';
import { Gallery } from 'angular-gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor(private gallery: Gallery) { }

  ngOnInit(): void {
  }

  showGallery(index: number, counter: boolean) {
    let prop = {
      images: [
        { path: '../../assets/img/gallery1.jpg' },
        { path: '../../assets/img/gallery2.jpg' },
        { path: '../../assets/img/gallery3.jpg' },
        { path: '../../assets/img/gallery4.jpg' },
        { path: '../../assets/img/gallery5.jpg' },
        { path: '../../assets/img/gallery6.jpg' },
        { path: '../../assets/img/gallery7.jpg' },
        { path: '../../assets/img/gallery8.jpg' },
      ],
      index,
      counter,
    };
    this.gallery.load(prop);
  }
}
