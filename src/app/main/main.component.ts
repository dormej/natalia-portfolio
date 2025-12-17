import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-main',
  imports: [RouterLink],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {


  @ViewChild('heroContent') heroContent!: ElementRef<HTMLDivElement>;
  @ViewChild('heroBg') heroBg!: ElementRef<HTMLDivElement>;

  heroHeight = window.innerHeight;

  ngAfterViewInit() {
    
    const video = document.getElementById('myVideo') as HTMLVideoElement;
    video.muted = true;       // wymagane dla autoplay desktop
    video.play().catch(() => {
      console.log('Autoplay zablokowane, trzeba kliknąć przycisk');
    });

  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    // fade-out hero-content
    let opacity = 1 - scrollY / this.heroHeight;
    opacity = opacity < 0 ? 0 : opacity;
    this.heroContent.nativeElement.style.opacity = opacity.toString();
    this.heroBg.nativeElement.style.opacity = opacity.toString();
  }

  
}
