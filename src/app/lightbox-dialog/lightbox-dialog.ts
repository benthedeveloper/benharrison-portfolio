import {
  Component,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-lightbox-dialog',
  imports: [FontAwesomeModule],
  templateUrl: './lightbox-dialog.html',
  styleUrl: './lightbox-dialog.scss',
})
export class LightboxDialog {
  @ViewChild('lightboxDialog') dialogRef?: ElementRef<HTMLDialogElement>;

  currentImageUrl: string = '';
  currentImageAlt: string = '';
  faTimes = faTimes;

  constructor(private cd: ChangeDetectorRef) {}

  openLightbox(imageUrl: string, altText: string): void {
    this.currentImageUrl = imageUrl;
    this.currentImageAlt = altText;

    // Ensure bindings are applied before opening
    this.cd.detectChanges();
    requestAnimationFrame(() => {
      this.dialogRef?.nativeElement.showModal();
    });
  }

  closeLightbox(): void {
    this.dialogRef?.nativeElement.close();
  }
}
