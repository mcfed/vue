
import * as Containers from "./container";
function computePath(context:string,path:string){

};
function routes(props: any): any {
  const path: any = props.path;
  return [
    {
      path: "/",
      // exact: true,
      component: Containers.ListContainer,
    }
  ];
}
export default routes;
