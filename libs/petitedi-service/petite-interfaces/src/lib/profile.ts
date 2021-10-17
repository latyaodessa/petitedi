import { AxiosRequestConfig } from 'axios';

export interface Profile {
  triggers: Array<any>,
  tasks: Array<ApiCallTask>

}

export interface ApiCallTask extends FlowId, Flow {
  requestConfig: AxiosRequestConfig;
}

interface FlowId {
  id: string;
}

interface Flow {
  incoming: string,
  outgoing: string
}

