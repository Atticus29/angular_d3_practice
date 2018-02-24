import { Component, ChangeDetectorRef, ChangeDetectionStrategy, Input, OnInit, AfterViewInit, HostListener } from '@angular/core';
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

export class GraphComponent implements OnInit, AfterViewInit {
  @Input('nodes') nodes;
  @Input('links') links;

  graph: ForceDirectedGraph;
  private _options: {width, height } = { width: 800, height: 600 };

  @HostListener('window:resize', ['$event'])
  onResize(event){
    this.graph.initSimulation(this.options);
  }

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

  get options(){
    return this._options = {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }
}
