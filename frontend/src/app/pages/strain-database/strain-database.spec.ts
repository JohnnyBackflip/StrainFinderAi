import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrainDatabase } from './strain-database';

describe('StrainDatabase', () => {
  let component: StrainDatabase;
  let fixture: ComponentFixture<StrainDatabase>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StrainDatabase]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrainDatabase);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
