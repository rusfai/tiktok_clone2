import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiktokEmbedComponent } from './tiktok-embed.component';

describe('TiktokEmbedComponent', () => {
  let component: TiktokEmbedComponent;
  let fixture: ComponentFixture<TiktokEmbedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TiktokEmbedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiktokEmbedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
