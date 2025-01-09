import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistsignupComponent } from './artistsignup.component';

describe('ArtistsignupComponent', () => {
  let component: ArtistsignupComponent;
  let fixture: ComponentFixture<ArtistsignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtistsignupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
