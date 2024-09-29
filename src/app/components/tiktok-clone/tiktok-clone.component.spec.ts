import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiktokCloneComponent } from './tiktok-clone.component';

describe('TiktokCloneComponent', () => {
  let component: TiktokCloneComponent;
  let fixture: ComponentFixture<TiktokCloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TiktokCloneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiktokCloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
