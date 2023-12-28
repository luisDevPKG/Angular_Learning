import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoJuegosCardComponent } from './video-juegos-card.component';

describe('VideoJuegosCardComponent', () => {
  let component: VideoJuegosCardComponent;
  let fixture: ComponentFixture<VideoJuegosCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoJuegosCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoJuegosCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
