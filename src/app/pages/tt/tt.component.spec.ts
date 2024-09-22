import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TTComponent } from './tt.component';

describe('TTComponent', () => {
  let component: TTComponent;
  let fixture: ComponentFixture<TTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TTComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
