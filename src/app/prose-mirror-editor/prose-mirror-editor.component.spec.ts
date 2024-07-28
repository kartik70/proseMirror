import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProseMirrorEditorComponent } from './prose-mirror-editor.component';

describe('ProseMirrorEditorComponent', () => {
  let component: ProseMirrorEditorComponent;
  let fixture: ComponentFixture<ProseMirrorEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProseMirrorEditorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProseMirrorEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
