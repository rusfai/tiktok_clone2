import { AfterViewInit, Component, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-tiktok-embed',
  standalone: true,
  imports: [],
  templateUrl: './tiktok-embed.component.html',
  styleUrl: './tiktok-embed.component.css'
})
export class TiktokEmbedComponent implements AfterViewInit {
  @Input() videoId: string | undefined;
  @Input() username: string | undefined;

  get embedUrl(): string {
    return `https://www.tiktok.com/@${this.username}/video/${this.videoId}`;
  }

  get profileUrl(): string {
    return `https://www.tiktok.com/@${this.username}?refer=embed`;
  }

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    this.el.nativeElement.appendChild(script);
  }
}
