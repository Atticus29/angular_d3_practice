import { Injectable } from '@angular/core';
import { ForceDirectedGraph } from './models/force-directed-graph';
import * as d3 from 'd3';

@Injectable()
export class D3Service {

  constructor() { }

  applyDraggableBehavior(){}

  getForceDirectedGraph(nodes: Node[], links: Link[], options: {width, height}){
    let graph = new ForceDirectedGraph(nodes, links, options);
    return graph;
  }

}
