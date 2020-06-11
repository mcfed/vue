import { PK } from "@mcf/crud";

export interface IModel{
  id: number;
  name: string;
  title: string;
}

export interface IAction {
  fetchItem(id: PK): void;
}

export interface IReducer{
  getReducer():void
}

export interface IApi{
  fetchPage(params:any):void;
  fetchItem(params:any):void;
  fetchSave(params:any):void;
  fetchUpdate(params:any):void;
  fetchDelete(params:any):void;
}

export interface IReducerState{
  page?:{
    pageSize?:number,
    total?:number,
    current?: number
  };
  items?: any[];
  item?: any
}

export interface ICarReducer extends IReducer {
  saveItem():Object
}

export interface ICarAction extends IAction {
  stop(payload:{ a: string, b: number }):void;
  fetchPage(params:any):void;
  fetchSave(params: any):void;
  fetchDelete(ids:PK | PK[]):void
}

