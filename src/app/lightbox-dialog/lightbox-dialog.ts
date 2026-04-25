import { Component, viewChild, ElementRef } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-lightbox-dialog',
  imports: [FontAwesomeModule],
  templateUrl: './lightbox-dialog.html',
  styleUrl: './lightbox-dialog.scss',
})
export class LightboxDialog {
  dialogRef = viewChild<ElementRef<HTMLDialogElement>>('lightboxDialog');

  currentImageUrl: string = '';
  currentImageAlt: string = '';
  faTimes = faTimes;

  openLightbox(imageUrl: string, altText: string): void {
    this.currentImageUrl = imageUrl;
    this.currentImageAlt = altText;
    this.dialogRef()?.nativeElement.showModal();
  }

  closeLightbox(): void {
    this.dialogRef()?.nativeElement.close();
  }
}
