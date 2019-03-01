import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBookComponent } from './section-book.component';

describe('SectionBookComponent', () => {
  let component: SectionBookComponent;
  let fixture: ComponentFixture<SectionBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
