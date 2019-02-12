import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CarComponent } from './car/car.component';
import { AnimalComponent } from './animal/animal.component';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent implements OnInit {
  @ViewChild('host', { read: ViewContainerRef }) host: ViewContainerRef;

  private component: CarComponent | AnimalComponent;
  private items: Array<any> = [
    {
      id: '1',
      name: 'Car',
      type: 'car'
    },
    {
      id: '2',
      name: 'Animal',
      type: 'animal'
    }
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      const item = this.items.find((item) => item.id === params.itemId)
      this.loadComponent(item);
    });
  }

  private getItemComponent(type) {
    switch(type) {
      case 'car':
        return CarComponent;

      case 'animal':
        return AnimalComponent;
    }
  }

  private loadComponent(item) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.getItemComponent(item.type));
    this.host.clear();

    const componentRef = this.host.createComponent(componentFactory);
    this.component = (<AnimalComponent| CarComponent>componentRef.instance);

    this.component.item = item;
  }
}
