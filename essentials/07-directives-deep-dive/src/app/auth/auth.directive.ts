//directive is a class that can modify the structure or behavior of elements in the DOM.

import { Directive, effect, input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Permission } from './auth.model';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appAuth]',
  standalone: true
})
export class AuthDirective {
  userType = input.required<Permission>({alias: 'appAuth'});

  constructor(
    private authService: AuthService,

    //reference to the template that the directive is attached
    private templateRef: TemplateRef<any>,

    //reference to the DOM where the template will be rendered
    //give access to the element that the directive is attached to
    private viewContainerRef: ViewContainerRef) {
    console.log('AuthDirective created');

    //run some code whenever some signal values change
    effect(() => {
      console.log('User type:', this.userType());
      if (this.authService.activePermission() == this.userType()) {
        console.log('SHOW ELEMENT');
        //create a view from the template and insert it into the DOM
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      }
      else {
        this.viewContainerRef.clear();
        console.log('HIDE ELEMENT');
      }
    });
  }
}
