import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteuserComponent } from './quoteuser.component';

describe('QuoteuserComponent', () => {
  let component: QuoteuserComponent;
  let fixture: ComponentFixture<QuoteuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
