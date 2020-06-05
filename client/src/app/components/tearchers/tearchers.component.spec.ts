import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TearchersComponent } from './tearchers.component';

describe('TearchersComponent', () => {
  let component: TearchersComponent;
  let fixture: ComponentFixture<TearchersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TearchersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TearchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
