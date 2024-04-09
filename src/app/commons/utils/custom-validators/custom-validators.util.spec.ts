import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomValidatorsUtil } from './custom-validators.util';

describe('CustomValidatorsUtil', () => {
  let component: CustomValidatorsUtil;
  let fixture: ComponentFixture<CustomValidatorsUtil>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomValidatorsUtil]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomValidatorsUtil);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
