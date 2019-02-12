import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentChangesComponent } from './content-changes.component';

describe('ContentChangesComponent', () => {
  let component: ContentChangesComponent;
  let fixture: ComponentFixture<ContentChangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentChangesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
