import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonHeaderbComponent } from './common-headerb.component';

describe('CommonHeaderbComponent', () => {
  let component: CommonHeaderbComponent;
  let fixture: ComponentFixture<CommonHeaderbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonHeaderbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonHeaderbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
