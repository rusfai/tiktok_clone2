import { Injectable } from '@angular/core';

interface SuggestedAccount {
  avatarUrl: string;
  username: string;
  nickname: string;
  isVerified: boolean;
}

interface DiscoverTag {
  name: string;
  isMusic: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private suggestedAccounts: SuggestedAccount[] = [
    {
      avatarUrl: '../../../assets/avatar5.jpg',
      username: 'pinnaclemortal',
      nickname: 'Matt',
      isVerified: true
    },
    {
      avatarUrl: '../../../assets/avatar4.jpg',
      username: 'nogomuch_official',
      nickname: 'nogomuch',
      isVerified: false
    },
    {
      avatarUrl: '../../../assets/avatar3.jpg',
      username: 't_i_b_e_r_i_u_s',
      nickname: 'Флэш арм',
      isVerified: false
    },
    {
      avatarUrl: '../../../assets/avatar2.jpg',
      username: 'Superfirstgirl',
      nickname: 'Superfirstgirl',
      isVerified: true
    }
  ];

  private discoverTags: DiscoverTag[] = [
    { name: '# Discover', isMusic: false },
    { name: '# Play', isMusic: false },
    { name: '# Req', isMusic: false },
    { name: 'Qeen - Show Must Go', isMusic: true },
    { name: 'Then Leave (feat. Queendom Come) - BeatKing', isMusic: true }
  ];

  constructor() { }

  getSuggestedAccounts(): SuggestedAccount[] {
    return this.suggestedAccounts;
  }

  getDiscoverTags(): DiscoverTag[] {
    return this.discoverTags;
  }

  addSuggestedAccount(account: SuggestedAccount): void {
    this.suggestedAccounts.push(account);
  }

  addDiscoverTag(tag: DiscoverTag): void {
    this.discoverTags.push(tag);
  }
}