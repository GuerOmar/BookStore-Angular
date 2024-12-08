import { Component, ElementRef } from '@angular/core';

import { ShadowDirective } from './shadow.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-fake',
  template: '<div appShadow></div>'
})
export class FakeComponent {}

describe('ShadowDirective', () => {
  describe('static tests', () => {
    const el = {
      nativeElement: {
        style: {}
      }
    } as ElementRef;

    it('should create an instance', () => {
      const directive = new ShadowDirective(el);
      expect(directive).toBeTruthy();
    });

    it('should set or unset the shadow style', () => {
      const directive = new ShadowDirective(el);

      expect(el.nativeElement.style.boxShadow).toBeFalsy();

      directive.setShadow(true);
      expect(el.nativeElement.style.boxShadow).toBe(ShadowDirective.defaultShadow);

      directive.setShadow(false);
      expect(el.nativeElement.style.boxShadow).toBeFalsy();
    });
  });

  describe('dynamic tests', () => {
    let fixture: ComponentFixture<FakeComponent>;
    let component: FakeComponent;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [FakeComponent, ShadowDirective]
      }).compileComponents();

      fixture = TestBed.createComponent(FakeComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create the fake component', () => {
      expect(component).toBeTruthy();
    });

    it('should not display shadow by default', () => {
      const el = fixture.nativeElement.querySelector('[appShadow]');
      expect(el).toBeTruthy();
      expect(el.style.boxShadow).toBeFalsy();
    });

    it('should set or remove shadow when mouse enter or leave', () => {
      const el = fixture.nativeElement.querySelector('[appShadow]');
      expect(el).toBeTruthy();

      el.dispatchEvent(new Event('mouseenter'));
      expect(el.style.boxShadow).toBe(ShadowDirective.defaultShadow);

      el.dispatchEvent(new Event('mouseleave'));
      expect(el.style.boxShadow).toBeFalsy();
    });
  });
});
