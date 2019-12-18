import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-image-cropping',
  templateUrl: './image-cropping.component.html',
  styleUrls: ['./image-cropping.component.css']
})
export class ImageCroppingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  profileChangedEvent: any = '';
  croppedImage: any = '';

  fileChangeEvent(event: any): void {
      this.profileChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
     const Blob =  this.dataURItoBlob(event.base64);
     //this.dataURItoBlob(this.croppedImage);
      
      var fd=new FormData();
      fd.append('image','profile.png');
      console.log(fd);
  }
  dataURItoBlob(dataURI) {
    console.log(dataURI);
    
    const binary = atob(dataURI.split(',')[1]);
    const array = [];
    for (let i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], {
      type: 'image/png'
    });
  }
}
