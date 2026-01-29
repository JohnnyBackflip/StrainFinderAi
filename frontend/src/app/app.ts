import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar color="tertiary">
      <span>StrainBaseAi</span>
    </mat-toolbar>
    <div class="content">
      <h1>Hello World!</h1>
      <p>{{ backendMessage }}</p>
    </div>
  `,
  styles: [`
    .content {
      padding: 24px;
    }
  `],
  standalone: true,
  imports: [CommonModule, MatToolbarModule],
})
export class AppComponent {
  private readonly http = inject(HttpClient);
  backendMessage = '';

  constructor() {
    this.http.get<{ message: string }>('/api/hello').subscribe(res => {
      this.backendMessage = res.message;
    });
  }
}