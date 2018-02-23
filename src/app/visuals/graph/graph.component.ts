import { Component, ChangeDetectorRef, ChangeDetectionStrategy, Input } from '@angular/core';
import { D3Service } from '../../d3/d3.service';
import { ForceDirectedGraph } from '../../d3/models/force-directed-graph';
import { Node } from '../../d3/models/node';

@Component ({
  selector: 'graph',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg #svg [attr.width]="_options.width" [attr.height]="_options.height">
      <g>
        <g [linkVisual]="link" *ngFor="let link of links"></g>
        <g [nodeVisual]="node" *ngFor="let node of nodes"></g>
      </g>
    </svg>
  `,
  styleUrls: ['./graph.component.css']
})

export class GraphComponent {
  @Input('nodes') nodes;
  @Input('links') links;

  graph: ForceDirectedGraph;

  constructor(private d3Service: D3Service, private ref: ChangeDetectorRef){}

  ngOnInit(){
    this.graph = this.d3Service.getForceDirectedGraph(this.nodes, this.links, this.options);

    this.graph.ticker.subscribe((d) => {
      this.ref.markForCheck();
    });
  }

  ngAfterViewInit(){
    this.graph.initSimulation(this.options);
  }

  private _options: {width, height} = {width: 800, height: 660};

  get options(){
    return this._options = {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }
}
