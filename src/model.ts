import { ORMModel, } from "@mcf/core";
//@ts-ignore
import { IModel } from "./interface";

const { attr, pk,BaseModel } = ORMModel;

export const namespace = "Demo";

export default class Abcd extends BaseModel implements IModel {
  constructor(props: any) {
    super(props);
    //@ts-ignore
    this.initFields(props);
  }
  static modelName: string = namespace;

  @pk()
  id!: number;
  @attr()
  name!: string;
  @attr()
  title!: string;

  getName() {}
}
