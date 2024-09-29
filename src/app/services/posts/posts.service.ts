import { Injectable } from '@angular/core';
import { Post } from '../../models/posts/posts.models';


@Injectable({
  providedIn: 'root'
})

export class PostsService {
  private links: string[] = [
    'https://www.tiktok.com/@sonyakisa8/video/7063064504250174721',
    'https://www.tiktok.com/@fashion_el/video/7033403756897209601',
    'https://www.tiktok.com/@batek.official/video/7033022988530355457',
    'https://www.tiktok.com/@german_ahmedov/video/7066043534196870401',
    'https://www.tiktok.com/@urla_murla/video/7060739694568426758',
    'https://www.tiktok.com/@protamedia/video/7024990212929424641',
    'https://www.tiktok.com/@alex_medved_/video/7029274470900600066',
    'https://www.tiktok.com/@igorian_today/video/7064498736013118722',
    'https://www.tiktok.com/@pandasakha/video/7053344571819904257',
    'https://www.tiktok.com/@music_of_top/video/7049822164777700609',
    'https://www.tiktok.com/@batek.official/video/7059385879227288833',
    'https://www.tiktok.com/@klikklaktv/video/7063982077435251970',
    'https://www.tiktok.com/@maxim_hollywood/video/7016681222625594626',
    'https://www.tiktok.com/@sekret675/video/7047467686405721346',
    'https://www.tiktok.com/@nagornyy.n/video/7026353130715761921',
    'https://www.tiktok.com/@winkrus/video/7058663883191389442',
    'https://www.tiktok.com/@igorian_today/video/7018869683134795010',
    'https://www.tiktok.com/@cool.baybay/video/7061626711607119106',
    'https://www.tiktok.com/@fashion_el/video/7033087719261736194',
    'https://www.tiktok.com/@lifegoodd/video/7047864170779266305',
    'https://www.tiktok.com/@kinoluv.official/video/7021934096565816577',
    'https://www.tiktok.com/@alex_medved_/video/7059402902204386562',
    'https://www.tiktok.com/@hoootdogs/video/7040788121662786817',
    'https://www.tiktok.com/@liudmila.olegovna/video/7045688213700087041',
    'https://www.tiktok.com/@igorian_today/video/7030371935338974465',
    'https://www.tiktok.com/@sonyakisa8/video/7026003999023238402',
    'https://www.tiktok.com/@ranfff/video/7018112817744071938',
    'https://www.tiktok.com/@tnt_online/video/7058299403878010113',
    'https://www.tiktok.com/@kham.michael/video/7056753930310585601',
    'https://www.tiktok.com/@katyanstrv/video/7054257626519031041',
    'https://www.tiktok.com/@perekusov/video/7061170184538639618',
    'https://www.tiktok.com/@kino_pes/video/7064914000609348865',
    'https://www.tiktok.com/@igorian_today/video/7060781965280070913',
    'https://www.tiktok.com/@tnt_online/video/7022189396010994946',
    'https://www.tiktok.com/@give_my_oscar/video/7053781294798458113',
    'https://www.tiktok.com/@dmitry_minskii/video/7059665521058385153',
    'https://www.tiktok.com/@sonyakisa8/video/7027853822663986434',
    'https://www.tiktok.com/@dacooker_/video/7062244569219435777',
    'https://www.tiktok.com/@skyorsk/video/7052376801401736449',
    'https://www.tiktok.com/@tnt_online/video/7019939142968577282',
    'https://www.tiktok.com/@nefrix.edits/video/7049672409955306754',
    'https://www.tiktok.com/@winkrus/video/7040350712907222273',
    'https://www.tiktok.com/@rish_art/video/7040059034514361602',
    'https://www.tiktok.com/@puzakovv/video/7066489015268035842',
    'https://www.tiktok.com/@kinoluv.official/video/7026761471237377282',
    'https://www.tiktok.com/@armvlad/video/7041805878038646018',
    'https://www.tiktok.com/@alliam.ru/video/7059762998331624705',
    'https://www.tiktok.com/@hoootdogs/video/7054885617166978305',
    'https://www.tiktok.com/@alex_medved_/video/7056425997356240130',
    'https://www.tiktok.com/@simoncarshop/video/7045531919014006021',
    'https://www.tiktok.com/@sofiadelmonstro/video/7056921713820372225',
    'https://www.tiktok.com/@batek.official/video/7030428675271036161',
    'https://www.tiktok.com/@dmitrievofficial/video/7023801931437182210'

  ];

  private posts: Post[] = [
    {
      avatarUrl: '../../../assets/avatar1.jpg',
      username: 'fenixbinario',
      description: '<b>#CapCut #Рек</b>',
      embedUrl: '',
      videoId: '',
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

  constructor() {
    const randomLink = this.getRandomLink();

    const videoId = this.getVideoId(randomLink);

    this.posts[0].embedUrl = randomLink;

    this.posts[0].videoId = videoId;
  }




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

  getRandomLink(): string {
    const randomIndex = Math.floor(Math.random() * this.links.length);
    return this.links[randomIndex]
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