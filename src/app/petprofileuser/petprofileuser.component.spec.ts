import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetprofileuserComponent } from './petprofileuser.component';

describe('PetprofileuserComponent', () => {
  let component: PetprofileuserComponent;
  let fixture: ComponentFixture<PetprofileuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetprofileuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetprofileuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
