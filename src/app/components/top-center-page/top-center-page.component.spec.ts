import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCenterPageComponent } from './top-center-page.component';

describe('TopCenterPageComponent', () => {
  let component: TopCenterPageComponent;
  let fixture: ComponentFixture<TopCenterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopCenterPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopCenterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
