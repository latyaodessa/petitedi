import { AxiosRequestConfig } from 'axios';
import { IncomingFlow, OutgoingFlow } from './core';

export enum ActivityTypeEnum {
  REST = 'REST',
  SOAP = 'SOAP',
  MANUAL = 'MANUAL'
}

export interface Activity extends IncomingFlow, OutgoingFlow {
  type: ActivityTypeEnum;
  requestConfig: AxiosRequestConfig;
}
