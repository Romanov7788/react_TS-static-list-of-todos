import React from "react";
import { Todo } from "../../types/Todo";

type Props = {
  user: Todo;
}

export const UserInfo: React.FC<Props> = ({ user }) => (
  <a className="UserInfo" href={`mailto:${user.email}`}>
    {user.name}
  </a>
);
