import { InjectFactory, Middleware, Decorator } from "@mcf/core";
import { PK } from "@mcf/crud";
import { ICarAction } from "./interface";
import Api from "./api";
import Reducer from "./reducer";

const { MiddlewareFactory } = Middleware;
const { Injectable } = InjectFactory;
const { param, loading } = Decorator;

@Injectable
class CarAction {
  //@ts-ignore
  constructor(
    public readonly reducer: Reducer,
    public readonly api: Api,
    public readonly middleware: Middleware.MiddlewareFactory
  ) {
    // super(reducer, api, middleware);
  }
}

export { CarAction };
