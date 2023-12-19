import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLandingSectionComponent } from './home-landing-section.component';

describe('HomeLandingSectionComponent', () => {
  let component: HomeLandingSectionComponent;
  let fixture: ComponentFixture<HomeLandingSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeLandingSectionComponent]
    });
    fixture = TestBed.createComponent(HomeLandingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
