import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {


  @ViewChild('heroContent') heroContent!: ElementRef<HTMLDivElement>;
  @ViewChild('heroBg') heroBg!: ElementRef<HTMLDivElement>;

  heroHeight = window.innerHeight;

  ngAfterViewInit() {}

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
