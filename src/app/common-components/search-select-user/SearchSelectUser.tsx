"use client";
import { useEffect, useState } from "react";
import Search from "../search/search";
import UserList, { IItem } from "../user-list/UserList";

const dummy: Array<IItem> = [
  { displayPicture: "sss", title: "some", description: "some", id: "1" },
  { displayPicture: "sss", title: "some", description: "some", id: "2" },
];

export interface ISearchSelectUser {
  result: (result: any) => {} | void;
}

export default function SearchSelectUser({ result }: ISearchSelectUser) {
  const [users, setUsers] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    result(selectedUser);
  }, [selectedUser]);
  return (
    <div>
      <Search url={""} result={(result) => setUsers(result)} />
      <UserList result={(user) => setSelectedUser(user)} list={dummy} />
    </div>
  );
}
