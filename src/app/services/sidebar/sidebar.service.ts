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
      avatarUrl: '../../../assets/avatrar.jpg',
      username: 'fenixbinario',
      nickname: '千乇几丨乂 乃丨几卂尺丨[]',
      isVerified: true
    },
    {
      avatarUrl: '../../../assets/avatrar.jpg',
      username: 'fenixbinario',
      nickname: '千乇几丨乂 乃丨几卂尺丨[]',
      isVerified: true
    },
    {
      avatarUrl: '../../../assets/avatrar.jpg',
      username: 'fenixbinario',
      nickname: '千乇几丨乂 乃丨几卂尺丨[]',
      isVerified: true
    },
    {
      avatarUrl: '../../../assets/avatrar.jpg',
      username: 'fenixbinario',
      nickname: '千乇几丨乂 乃丨几卂尺丨[]',
      isVerified: true
    }
  ];

  private discoverTags: DiscoverTag[] = [
    { name: '# Discover', isMusic: false },
    { name: '# Discover', isMusic: false },
    { name: '# Discover', isMusic: false },
    { name: 'Then Leave (feat. Queendom Come) - BeatKing', isMusic: true },
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