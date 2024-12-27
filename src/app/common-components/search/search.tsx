"use client";
import useUsersList from "@/app/network/use-users-list";
import { Input } from "antd";
import { useEffect, useState } from "react";

const { Search: AntdSearch } = Input;

export interface ISeach {
  url: string;
  result: (data: any) => void | {};
}

export default function Search({ url, result }: ISeach) {
  const [searchKey, setSearchKey] = useState("");
  const { users, loading, error } = useUsersList(searchKey);
  useEffect(() => {
    result(users);
  }, [users]);
  return (
    <div>
      <AntdSearch
        placeholder="input search text"
        size="large"
        loading={loading}
        status={error ? "error" : ""}
        onSearch={setSearchKey}
      />
    </div>
  );
}
