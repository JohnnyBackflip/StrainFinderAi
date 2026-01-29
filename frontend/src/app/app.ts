import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar color="tertiary">
      <a routerLink="/" class="logo">StrainBaseAi</a>
      <span class="spacer"></span>
      <a routerLink="/strain-search" class="nav-link">Strain Search</a>
      <a routerLink="/strain-database" class="nav-link">Strain Database</a>
    </mat-toolbar>
    <div class="content">
      <router-outlet />
    </div>
  `,
  styles: [`
    .content {
      padding: 24px;
    }
    .logo {
      text-decoration: none;
      color: inherit;
    }
    .spacer {
      flex: 1 1 auto;
    }
    .nav-link {
      margin-left: 16px;
      text-decoration: none;
      color: inherit;
    }
  `],
  standalone: true,
  imports: [CommonModule, MatToolbarModule, RouterModule],
})
export class AppComponent {
}