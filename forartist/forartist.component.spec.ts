import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForartistComponent } from './forartist.component';

describe('ForartistComponent', () => {
  let component: ForartistComponent;
  let fixture: ComponentFixture<ForartistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForartistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForartistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
