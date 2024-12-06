export interface UserActionEvent {
  action: 'delete' | 'update';
  Id: number;
  Name: string;
}
