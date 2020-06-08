import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

export abstract class BaseComponent implements OnDestroy {

    subscriptions: Subscription = new Subscription();

    ngOnDestroy() {

    }
}