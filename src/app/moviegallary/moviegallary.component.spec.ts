import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviegallaryComponent } from './moviegallary.component';

describe('MoviegallaryComponent', () => {
  let component: MoviegallaryComponent;
  let fixture: ComponentFixture<MoviegallaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviegallaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviegallaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
