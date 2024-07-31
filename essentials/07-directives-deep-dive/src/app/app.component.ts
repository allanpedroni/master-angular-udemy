
import { Component, computed } from '@angular/core';
import { AuthComponent } from './auth/auth.component';
import { LearningResourcesComponent } from './learning-resources/learning-resources.component';
import { AuthService } from './auth/auth.service';
import { CommonModule } from '@angular/common';
import { AuthDirective } from './auth/auth.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [AuthComponent, LearningResourcesComponent, CommonModule, AuthDirective],
})
export class AppComponent {

  isAdmin = computed(() => this.authService.activePermission() === 'admin');

  constructor(private authService: AuthService) {
    console.log('AppComponent created');
  }


}
