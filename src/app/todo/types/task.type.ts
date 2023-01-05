export interface Task {
  id: number;
  title: string;
  description?: string;
  assignee: string;
  isUrgent: boolean;
  completed: boolean;
}
