import { Injectable } from '@angular/core';
import { Post } from '../../models/posts/posts.models';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  
  private posts: Post[] = [
    {
      avatarUrl: '../../../assets/avatrar.jpg',
      username: 'fenixbinario',
      description: 'Despejar la mente en la naturaleza y desconectar de la tecnología es primordial para no entrar en <b>#burnout</b> , el síndrome del trabajador quemado. <br><b>#CapCut #avengers #startup #api #backend #frontend #website #Web3 #happyfan</b>',
      embedUrl: 'https://www.tiktok.com/@davay_obsudim/video/7417148731230850334',
      videoId: '7417148731230850334',
      embedContent: `
        <a target="_blank" title="@fenixbinario" href="https://www.tiktok.com/@fenixbinario?refer=embed">@fenixbinario</a>
        <a title="capcut" target="_blank" href="https://www.tiktok.com/tag/capcut?refer=embed">#CapCut</a>
        <a title="avengers" target="_blank" href="https://www.tiktok.com/tag/avengers?refer=embed">#avengers</a>
        <a title="startup" target="_blank" href="https://www.tiktok.com/tag/startup?refer=embed">#startup</a>
        <a title="api" target="_blank" href="https://www.tiktok.com/tag/api?refer=embed">#api</a>
        <a title="backend" target="_blank" href="https://www.tiktok.com/tag/backend?refer=embed">#backend</a>
        <a title="frontend" target="_blank" href="https://www.tiktok.com/tag/frontend?refer=embed">#frontend</a>
        <a title="website" target="_blank" href="https://www.tiktok.com/tag/website?refer=embed">#website</a>
        <a title="web3" target="_blank" href="https://www.tiktok.com/tag/web3?refer=embed">#Web3</a>
        <a title="happyfan" target="_blank" href="https://www.tiktok.com/tag/happyfan?refer=embed">#happyfan</a>
        Despejar la mente en la naturaleza y desconectar de la tecnología es primordial para no entrar en
        <a title="burnout" target="_blank" href="https://www.tiktok.com/tag/burnout?refer=embed">#burnout</a>
        <a target="_blank" title="♬ sonido original - 千乇几丨乂 乃丨几卂尺丨[]" href="https://www.tiktok.com/music/sonido-original-7181848346512132870?refer=embed">♬ sonido original - 千乇几丨乂 乃丨几卂尺丨[]</a>
      `
    }
  ];

  getPosts(): Post[] {
    return this.posts;
  }

  addPost(post: Post) {
    this.posts.unshift(post);
  }

  getEmbedUrl(url: string): string {
    return url;
  }

  getVideoId(url: string): string {
    const match = url.match(/video\/(\d+)/);
    return match ? match[1] : '';
  }

  generateEmbedContent(embedUrl: string, videoId: string): string {
    return `
      <blockquote class="tiktok-embed" cite="${embedUrl}" data-video-id="${videoId}" style="max-width: 605px;min-width: 325px;">
        <section>
          <a target="_blank" title="@username" href="https://www.tiktok.com/@username">@username</a>
        </section>
      </blockquote>
      <script async src="https://www.tiktok.com/embed.js"></script>
    `;
  }
}