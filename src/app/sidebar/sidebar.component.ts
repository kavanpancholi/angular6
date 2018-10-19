import {Component, OnInit} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',

    styleUrls: ['./sidebar.component.scss', '../../../node_modules/font-awesome/scss/font-awesome.scss']
})
export class SidebarComponent implements OnInit {

    currentUrl: String;

    constructor(private router: Router) {
        // this.currentUrl = router.url;
        router.events.subscribe((_: NavigationEnd) => this.currentUrl = this.router.url);
    }

    ngOnInit() {
    }

}
