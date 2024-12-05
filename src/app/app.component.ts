import { Component } from '@angular/core';
import { RouterOutlet ,RouterLink,RouterLinkActive,RouterModule } from '@angular/router';
import { NgbdAlertSelfclosing } from './alert-popup/alert-popup.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive,RouterModule,NgbdAlertSelfclosing],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'student-management-1';
}
