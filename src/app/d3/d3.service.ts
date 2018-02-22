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

  applyZoomableBehavior(svgElement, containerElement){
    let svg, container, zoomed, zoom;

    svg = d3.select(svgElement);
    container = d3.select(containerElement);

    zoomed = () => {
      const transform = d3.event.transform;
      container.attr("transform", "translate(" + transform.x + "," + transform.y + ") scale(" + transform.k + ")");
    }

    zoom = d3.zoom().on("zoom", zoomed);
    svg.call(zoom);
  }

}
