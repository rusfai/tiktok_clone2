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
      embedUrl: 'https://www.tiktok.com/@sport_lizz/video/7064533572694084866',
      videoId: '7064533572694084866',
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
    },
    {
      avatarUrl: '../../../assets/avatrar.jpg',
      username: 'fenixbinario',
      description: 'insta: conoralbert name vídeo: I made a web site 😎 <br> <b>#startup #fyp #backend #frontend #api #website #Web3 #song #bso</b>',
      embedUrl: 'https://www.tiktok.com/@too_simple_crafts/video/7048605023667768577',
      videoId: '7048605023667768577',
      embedContent: `
        <a target="_blank" title="@too_simple_crafts" href="https://www.tiktok.com/@too_simple_crafts?refer=embed">@fenixbinario</a>
        <a title="backend" target="_blank" href="https://www.tiktok.com/tag/backend?refer=embed">#backend</a>
        <a title="frontend" target="_blank" href="https://www.tiktok.com/tag/frontend?refer=embed">#frontend</a>
        <a title="api" target="_blank" href="https://www.tiktok.com/tag/api?refer=embed">#api</a>
        <a title="website" target="_blank" href="https://www.tiktok.com/tag/website?refer=embed">#website</a>
        <a title="web3" target="_blank" href="https://www.tiktok.com/tag/web3?refer=embed">#Web3</a>
        <a title="song" target="_blank" href="https://www.tiktok.com/tag/song?refer=embed">#song</a>
        <a title="bso" target="_blank" href="https://www.tiktok.com/tag/bso?refer=embed">#bso</a>
        insta: conoralbert name vídeo: I made a web site
        <a title="startup" target="_blank" href="https://www.tiktok.com/tag/startup?refer=embed">#startup</a>
        <a target="_blank" title="♬ sonido original - 千乇几丨乂 乃丨几卂尺丨[]" href="https://www.tiktok.com/music/sonido-original-7181366364777532165?refer=embed">♬ sonido original - 千乇几丨乂 乃丨几卂尺丨[]</a>
      `
    }
  ];

  constructor() { }

  getPosts(): Post[] {
    return this.posts;
  }
}