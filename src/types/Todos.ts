import { Todo } from "./Todo";

export interface Todos {
  id: number;
  userId: number;
  completed: boolean;
  title: string;
  user: Todo | null;
}
