import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerRandomComponent } from './beer-random.component';

describe('BeerRandomComponent', () => {
  let component: BeerRandomComponent;
  let fixture: ComponentFixture<BeerRandomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeerRandomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeerRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
