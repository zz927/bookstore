import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinePageComponent } from './mine-page.component';

describe('MinePageComponent', () => {
  let component: MinePageComponent;
  let fixture: ComponentFixture<MinePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
