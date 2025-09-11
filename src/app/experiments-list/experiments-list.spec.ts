import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperimentsList } from './experiments-list';

describe('ExperimentsList', () => {
  let component: ExperimentsList;
  let fixture: ComponentFixture<ExperimentsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperimentsList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperimentsList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
