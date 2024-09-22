import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tiktok-clone',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tiktok-clone.component.html',
  styleUrl: './tiktok-clone.component.css'
})
export class TiktokCloneComponent {
  @Input() avatarUrl: string = '';
  @Input() username: string = '';
  @Input() description: string = '';
  @Input() embedUrl: string = '';
  @Input() videoId: string = '';
  @Input() embedContent: string = '';
}
