//@ts-ignore
import { connect } from "redux-vue";
import { Selector, Container, InjectFactory } from "@mcf/core";
import { CarAction } from "./action";
import ListView from "./views/app";
// import FormView from "./views/Form.view";
// import DetailView from "./views/Detail.view";
import { namespace } from "./model";
import { Dispatch } from "redux";

const { defaultMergeProps } = Container;
const { reducerItemSelector, reducerListSelector, fetchingSelector,reducerSelector,appSelector } = Selector;

export const mapStateToProps = (state: any, props: any) => {
  return {
    // intl: props.intl,
    // messages: defineMessages(messages),
    appReducer: appSelector(state),
    fetchingReducer: fetchingSelector(state),
    reducer: reducerSelector(state, namespace),
    items: reducerListSelector(state, namespace),
    item: reducerItemSelector(state, namespace, props.match.params.id),
  };
};
export const dispatchToProps = (dispatch: Dispatch, props: object) => {
  return {
    dispatch,
    actions: InjectFactory.ActionFactory(CarAction, dispatch, namespace),
  };
};
export const ListContainer = connect(
         mapStateToProps,
         dispatchToProps,
         defaultMergeProps
       )(ListView);

