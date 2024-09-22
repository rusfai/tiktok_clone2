import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TiktokCloneComponent } from '../tiktok-clone/tiktok-clone.component';
import { PostsService } from '../../services/posts/posts.service';
import { SidebarService } from '../../services/sidebar/sidebar.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../models/posts/posts.models';

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

  constructor(private postsService: PostsService, private sidebarService: SidebarService,  private route: ActivatedRoute,) {}

  ngOnInit() {
    this.posts = this.postsService.getPosts();

    this.route.queryParams.subscribe(params => {
      if (params['tiktok']) {
        this.addPostFromTikTokUrl(params['tiktok']);
      }
    });
    this.suggestedAccounts = this.sidebarService.getSuggestedAccounts();
    this.discoverTags = this.sidebarService.getDiscoverTags();
  }

  private addPostFromTikTokUrl(url: string) {
    const embedUrl = this.postsService.getEmbedUrl(url);
    const videoId = this.postsService.getVideoId(url);

    if (embedUrl && videoId) {
      const newPost: Post = {
        avatarUrl: '../../../assets/avatrar.jpg',
        username: 'TikTok User',
        description: 'TikTok video',
        embedUrl: embedUrl,
        videoId: videoId,
        embedContent: this.postsService.generateEmbedContent(embedUrl, videoId)
      };

      this.postsService.addPost(newPost);
      this.posts = this.postsService.getPosts();
    }
  }
}