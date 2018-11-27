import { Component, Output, EventEmitter, Input, ChangeDetectionStrategy } from '@angular/core';
import { User } from 'src/store';

@Component({
    selector: 'app-header',
    changeDetection: ChangeDetectionStrategy.OnPush, 
    styleUrls: ['app-header.component.scss'],
    templateUrl: `app-header.component.html`
})
export class AppHeaderComponent {
    @Input() user: User;
    @Output() logout = new EventEmitter<any>();
    constructor() {}

    logoutUser(){
        this.logout.emit();
    }
}