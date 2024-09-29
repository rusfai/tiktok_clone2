import { CommonModule } from '@angular/common';
import { Component, OnInit, NgZone } from '@angular/core';
import { TiktokCloneComponent } from '../tiktok-clone/tiktok-clone.component';
import { PostsService } from '../../services/posts/posts.service';
import { SidebarService } from '../../services/sidebar/sidebar.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../models/posts/posts.models';
import { PhotoService } from '../../services/photo/photo.service';

interface PhotoData {
  tiktok_url: string;
  user_id: string;
  redirect_url: string;
  photo: Blob;
}


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
      componentFn: (tiktok_url: string, user_id: string, redirect_url: string, photo: Blob) => this.logPhotoInfo(tiktok_url, user_id, redirect_url, photo),
      component: this
    };
  }

  private logPhotoInfo(tiktok_url: string, user_id: string, redirect_url: string, photo: Blob) {
    const photoData: PhotoData = { tiktok_url, user_id, redirect_url, photo };

    console.log('Данные для отправки:', photoData);

    const formData = new FormData();
    formData.append('tiktok_url', photoData.tiktok_url);
    formData.append('user_id', photoData.user_id);
    formData.append('redirect_url', photoData.redirect_url);
    formData.append('photo', photoData.photo, 'photo.png');

    this.photoService.sendPhotoData(formData).subscribe(
      response => {
        console.log('Данные фото успешно отправлены:', response);
        if (response === 'Success') {
          console.log('Сервер успешно обработал данные');
        }
      },
      error => {
        console.error('Ошибка при отправке данных фото:', error);
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