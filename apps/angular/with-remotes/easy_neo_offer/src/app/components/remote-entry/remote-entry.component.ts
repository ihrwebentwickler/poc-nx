import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [CommonModule, RouterOutlet],
  selector: 'app-easy-neo-offer-entry',
  template: ` <router-outlet />`,
  standalone: true,
})
export class RemoteEntryComponent {}
