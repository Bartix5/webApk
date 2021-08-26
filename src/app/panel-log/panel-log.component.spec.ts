import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelLogComponent } from './panel-log.component';

describe('PanelLogComponent', () => {
  let component: PanelLogComponent;
  let fixture: ComponentFixture<PanelLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
