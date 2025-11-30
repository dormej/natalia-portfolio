import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'natalia-portfolio';

@ViewChild('scrollList') scrollList!: ElementRef<HTMLDivElement>;
@ViewChild('scrollWrapper') scrollWrapper!: ElementRef<HTMLDivElement>;
@ViewChild('bgVideo') bgVideo!: ElementRef<HTMLVideoElement>;
@ViewChild('bgVideo2') bgVideo2!: ElementRef<HTMLVideoElement>;


  items = Array.from({ length: 20 }, (_, i) => i + 1);

  private docWidth = 0;
  private slidesWidth = 0;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.updateDimensions();

    this.renderer.listen('window', 'resize', () => {
      this.updateDimensions();
    });

    this.renderer.listen('document', 'mousemove', (event: MouseEvent) => {
      const mouseX = event.pageX;
      const offset =
        (mouseX / this.docWidth) * this.slidesWidth - mouseX / 2;

      this.renderer.setStyle(
        this.scrollList.nativeElement,
        'transform',
        `translate3d(${-offset}px, 0, 0)`
      );
    });

    const video = this.bgVideo.nativeElement;
    video.muted = true;
    video.play().catch(err => {
      console.warn('Autoplay failed:', err);
    });

    const video2 = this.bgVideo2.nativeElement;
    video2.muted = true;
    video2.play().catch(err => {
      console.warn('Autoplay failed:', err);
    });
  }

  private updateDimensions() {
    this.docWidth = this.scrollWrapper.nativeElement.offsetWidth;
    this.slidesWidth = this.scrollList.nativeElement.scrollWidth;
  }
}
