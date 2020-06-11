import { FetchUtils } from '@mcf/utils'; 
import { IApi } from './interface';

const API_PREFIX = "/usercenter"
export default class Api implements IApi{
  fetchPage(params:any) {
    return FetchUtils.fetchList(`${API_PREFIX}/api_prefix`, {
      body: params,
    });
  }
  fetchItem(params:any) {
    return FetchUtils.fetchGet(`${API_PREFIX}/api_prefix/:id`, {
      body: params,
    });
  }

  fetchSave(params:any) {
    return FetchUtils.fetchPost(`${API_PREFIX}/api_prefix/:id`, {
      body: params,
    });
  }

  fetchUpdate(params:any) {
    return FetchUtils.fetchPost(`${API_PREFIX}/api_prefix/:id`, {
      body: params,
    });
  }

  fetchDelete(params:any) {
    return FetchUtils.fetchPost(`${API_PREFIX}/api_prefix/:id`, {
      body: params,
    });
  }
}

export interface ResponsePage {
  pageSize?:number,
  total:number,
  currentPage?: number,
  list?: any[];
}