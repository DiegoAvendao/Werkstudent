import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

const MATERIAL_MODULES = [MatToolbarModule, MatIconModule, MatButtonModule];


@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [ MATERIAL_MODULES],
  template: `
    <mat-toolbar color="primary">
      <a mat-button routerLink="/" >
        <mat-icon>message</mat-icon>
        <span>Messages</span>
      </a>
        
      <a mat-button routerLink="/data" >
        <mat-icon>list_alt</mat-icon>
        <span>Information</span>
      </a>

      <span class="spacer"></span>
      <a mat-button routerLink="/" >
        <mat-icon>login</mat-icon>
        <span>Login</span>
      </a>

    </mat-toolbar>
  `,
  styles: ``
})
export class ToolbarComponent {

}
