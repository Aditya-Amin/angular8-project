import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvshowsgallaryComponent } from './tvshowsgallary.component';

describe('TvshowsgallaryComponent', () => {
  let component: TvshowsgallaryComponent;
  let fixture: ComponentFixture<TvshowsgallaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvshowsgallaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvshowsgallaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
