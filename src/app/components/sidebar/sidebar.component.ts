import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TiktokCloneComponent } from '../tiktok-clone/tiktok-clone.component';
import { PostsService } from '../../services/posts/posts.service';
import { SidebarService } from '../../services/sidebar/sidebar.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, TiktokCloneComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  suggestedAccounts: any[] = [];
  discoverTags: any[] = [];
  posts: any[] | undefined;

  constructor(private postsService: PostsService, private sidebarService: SidebarService) {}

  ngOnInit() {
    this.posts = this.postsService.getPosts();
    this.suggestedAccounts = this.sidebarService.getSuggestedAccounts();
    this.discoverTags = this.sidebarService.getDiscoverTags();
  }
}