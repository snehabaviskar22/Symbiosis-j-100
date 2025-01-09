import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddArtworksComponent } from './add-artworks.component';

describe('AddArtworksComponent', () => {
  let component: AddArtworksComponent;
  let fixture: ComponentFixture<AddArtworksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddArtworksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddArtworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
