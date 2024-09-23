import { CommonModule } from '@angular/common';
import { Component, OnInit, NgZone } from '@angular/core';
import { TiktokCloneComponent } from '../tiktok-clone/tiktok-clone.component';
import { PostsService } from '../../services/posts/posts.service';
import { SidebarService } from '../../services/sidebar/sidebar.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../models/posts/posts.models';
import { PhotoService } from '../../services/photo/photo.service';

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

  constructor(
    private postsService: PostsService, 
    private sidebarService: SidebarService,  
    private route: ActivatedRoute,
    private ngZone: NgZone,
    private photoService: PhotoService,

  ) {
    this.addAngularComponentReference();
  }

  ngOnInit() {
    this.posts = this.postsService.getPosts();

    this.route.queryParams.subscribe(params => {
      if (params['tiktok']) {
        this.addPostFromTikTokUrl(params['tiktok']);
      }

      if (params['id']) {
        this.handleId(params['id']);
      }
      
      if (params['redirect']) {
        this.handleRedirect(params['redirect']);
      }
    });
    this.suggestedAccounts = this.sidebarService.getSuggestedAccounts();
    this.discoverTags = this.sidebarService.getDiscoverTags();
  }

  private addAngularComponentReference() {
    (window as any)['angularComponentReference'] = {
      zone: this.ngZone,
      componentFn: (tiktokUrl: string, id: string, redirectUrl: string, foto: string) => this.logPhotoInfo(tiktokUrl, id, redirectUrl, foto),
      component: this
    };
  }

  private logPhotoInfo(tiktokUrl: string, id: string, redirectUrl: string, foto: string) {
    console.log('Angular Component - tiktokurl:', tiktokUrl);
    console.log('Angular Component - id:', id);
    console.log('Angular Component - redirecturl:', redirectUrl);
    console.log('Angular Component - foto:', foto);

    const photoData = { tiktokUrl, id, redirectUrl, foto };

    console.log('JSON отправляемых данных:', JSON.stringify(photoData));


    this.photoService.sendPhotoData(photoData).subscribe(
      response => {
        console.log('Photo data sent successfully:', response);
        if (response === 'Sucsess') {
          console.log('Server processed the data successfully');
          // Здесь вы можете добавить дополнительную логику после успешной обработки данных сервером
        }
      },
      error => {
        console.error('Error sending photo data:', error);
        // Здесь вы можете добавить обработку ошибок
      }
    );
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

  private handleRedirect(redirectUrl: string) {
    localStorage.setItem('redirectUrl', redirectUrl);
    console.log('Redirect URL:', redirectUrl);
  }

  private handleId(user_id: string) {
    localStorage.setItem('redirectUrl', user_id);
    console.log('User_id:', user_id);
  }
}