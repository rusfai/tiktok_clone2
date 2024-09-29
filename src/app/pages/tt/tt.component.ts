import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { TiktokCloneComponent } from '../../components/tiktok-clone/tiktok-clone.component';

@Component({
  selector: 'app-tt',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, TiktokCloneComponent],
  templateUrl: './tt.component.html',
  styleUrl: './tt.component.css'
})
export class TTComponent {

}
