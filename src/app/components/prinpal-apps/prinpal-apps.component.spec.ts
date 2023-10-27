import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinpalAppsComponent } from './prinpal-apps.component';

describe('PrinpalAppsComponent', () => {
  let component: PrinpalAppsComponent;
  let fixture: ComponentFixture<PrinpalAppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrinpalAppsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrinpalAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
