import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonNavComponent } from './common-nav.component';

describe('CommonNavComponent', () => {
  let component: CommonNavComponent;
  let fixture: ComponentFixture<CommonNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
