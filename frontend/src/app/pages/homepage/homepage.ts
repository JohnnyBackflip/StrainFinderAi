import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss',
  standalone: true,
  imports: [CommonModule],
})
export class HomepageComponent {
  private readonly http = inject(HttpClient);
  backendMessage = '';

  constructor() {
    this.http.get<{ message: string }>('/api/hello').subscribe(res => {
      this.backendMessage = res.message;
    });
  }
}
