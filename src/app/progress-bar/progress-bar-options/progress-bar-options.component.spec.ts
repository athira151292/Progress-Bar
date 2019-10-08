import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarOptionsComponent } from './progress-bar-options.component';

describe('ProgressBarOptionsComponent', () => {
  let component: ProgressBarOptionsComponent;
  let fixture: ComponentFixture<ProgressBarOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressBarOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
