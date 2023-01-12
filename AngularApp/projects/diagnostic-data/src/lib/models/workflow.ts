import { CompilationProperties } from "./compilation-properties";
import { DataTableResponseColumn } from "./detector";

export enum nodeStatus {
  Critical = 'Critical',
  Warning = 'Warning',
  Info = 'Info',
  Success = 'Success',
  Nodne = 'None'
}

export enum nodeType {
  detector = 'detector',
  kustoQuery = 'kustoQuery',
  markdown = 'markdown'
}

export enum promptType {
  automatic = 'automatic',
  onClick = 'onClick'
}

export class workflow {
  root: workflowNode;
}

export class workflowExecution {
  root: workflowNodeExecution;
}

export class workflowNodeExecution {
  id: string;
  type: string;
  data: workflowNodeResult;
  children: workflowNodeExecution[];
}

export class workflowNode {
  id: string;
  type: string;
  data: workflowNodeData;
  children: workflowNode[];
}

export class stepVariable {
  name: string = '';
  type: string = 'String';
  value: string = '';
  runtimeValue: any;
}

export class workflowNodeData {
  name: string = '';
  title: string = '';
  description: string = '';
  detectorId: string = '';
  isEditing: boolean = false;
  isEditingTitle: boolean = false;
  queryText: string = '';
  kustoQueryColumns: DataTableResponseColumn[] = [];
  variables: stepVariable[] = [];
  markdownText: string = '';
  completionOptions: stepVariable[] = [];
  promptType: promptType = promptType.automatic;
  status: string = 'Info';
  conditionValue: string;
  ifconditionLeftValue: string;
  ifconditionRightValue: string;
  ifconditionExpression: string;
  switchOnValue: string;
  switchCaseValue: string;
}

export class workflowPublishBody {
  Id: string;
  WorkflowName: string;
  Description: string;
  WorkflowJson: string;
  IsInternal: boolean;
  Author: string;
  CommittedByAlias: string;
  Platform: string;
  AppType: string;
  StackType: string;
  ResourceType: string;
  ResourceProvider: string;
}

export interface workflowNodeResult {
  id: string;
  workflowId: string;
  workflowExecutionId: string;
  type: string;
  name: string;
  title: string;
  description: string;
  markdownText: string;
  status: string;
  children: workflowNodeState[];
  executionTraces: workflowExecutionTrace[];
  isOnboardingMode: boolean;
  compilationProperties: CompilationProperties;
  workflowPublishBody: workflowPublishBody;
  succeeded: boolean;
  promptType: string;
}

export interface workflowExecutionTrace {
  timestamp: string;
  level: string;
  message: string;
}

export interface workflowNodeState {
  id: string;
  isActive: boolean;
}