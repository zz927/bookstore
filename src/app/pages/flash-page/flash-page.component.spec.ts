import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashPageComponent } from './flash-page.component';

describe('FlashPageComponent', () => {
  let component: FlashPageComponent;
  let fixture: ComponentFixture<FlashPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlashPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
