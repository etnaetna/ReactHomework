import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavItmComponent } from './fav-itm.component';

describe('FavItmComponent', () => {
  let component: FavItmComponent;
  let fixture: ComponentFixture<FavItmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavItmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavItmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
