import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistdashboardComponent } from './artistdashboard.component';

describe('ArtistdashboardComponent', () => {
  let component: ArtistdashboardComponent;
  let fixture: ComponentFixture<ArtistdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtistdashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
