import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoommgmntComponent } from './roommgmnt.component';

describe('RoommgmntComponent', () => {
  let component: RoommgmntComponent;
  let fixture: ComponentFixture<RoommgmntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoommgmntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoommgmntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
