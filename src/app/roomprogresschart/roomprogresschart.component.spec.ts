import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomprogresschartComponent } from './roomprogresschart.component';

describe('RoomprogresschartComponent', () => {
  let component: RoomprogresschartComponent;
  let fixture: ComponentFixture<RoomprogresschartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomprogresschartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomprogresschartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
