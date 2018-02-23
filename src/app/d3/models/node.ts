export class Node implements d3.SimulationNodeDatum { //should this be extends?
  index?: number;
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
  fx?: number | null;
  fy?: number | null;

  id: string;
  constructor(id){
    this.id = id;
  }

}
