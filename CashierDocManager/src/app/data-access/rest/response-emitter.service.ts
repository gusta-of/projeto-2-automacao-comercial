import { EventEmitter } from '@angular/core';

export class ResponseEmitterService {
    notifier = new EventEmitter();

    notify(value: boolean) {
        this.notifier.emit(value)
    }
}