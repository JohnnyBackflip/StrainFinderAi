import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrainSearchComponent } from './strain-search';

describe('StrainSearch', () => {
  let component: StrainSearchComponent;
  let fixture: ComponentFixture<StrainSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StrainSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrainSearchComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
