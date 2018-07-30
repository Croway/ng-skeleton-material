import { Injectable, ComponentFactoryResolver, Inject, ViewContainerRef } from '@angular/core';
import { SpinnerComponent } from './spinner.component';

@Injectable()
export class SpinnerService {

    factoryResolver: ComponentFactoryResolver;
    rootViewContainer: ViewContainerRef;
    component: any;

    constructor(@Inject(ComponentFactoryResolver) factoryResolver) {
        this.factoryResolver = factoryResolver;
    }

    setRootViewContainerRef(viewContainerRef) {
        this.rootViewContainer = viewContainerRef;
    }

    addLoader() {
        if (this.component) {
            return;
        }

        const factory = this.factoryResolver
            .resolveComponentFactory(SpinnerComponent);
        this.component = factory
            .create(this.rootViewContainer.parentInjector);
        this.rootViewContainer.insert(this.component.hostView);
    }

    removeLoader() {
        if (this.component) {
            const element = this.component.hostView.rootNodes[0];

            element.classList.remove('show');
            element.classList.remove('in');
            setTimeout(() => {
                element.remove();
            }, 10);
        }
    }

}
