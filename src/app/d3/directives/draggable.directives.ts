import { Directive, Input, ElementRef } from '@angular/core';
import { Node, ForceDirectedGraph } from '../models';
import { D3Service } from '../d3.service';

@Directive({
  selector: '[draggableNode]'
})

export class DraggableDirective {
  @Input('draggableNode') draggableNode: Node;
  @Input('draggableInGraph') draggableInGraph: ForceDirectedGraph;

  constructor(private d3Service: D3Service, private _element: ElementRef){}

  ngOnInit(){
    this.d3Service.applyDraggableBehavior(this._element.nativeElement, this.draggableNode, this.draggableInGraph);
  }
}
