import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverageuserComponent } from './coverageuser.component';

describe('CoverageuserComponent', () => {
  let component: CoverageuserComponent;
  let fixture: ComponentFixture<CoverageuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoverageuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverageuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
