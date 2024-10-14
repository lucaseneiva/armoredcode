import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteCardComponent } from './invite-card.component';

describe('InviteCardComponent', () => {
  let component: InviteCardComponent;
  let fixture: ComponentFixture<InviteCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InviteCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InviteCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
