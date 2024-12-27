import { Input } from "antd";
import { useState } from "react";

const { Search: AntdSearch } = Input;

export interface ISeach {
  url: string;
  result: (data: any) => void | {};
}

export default function Search({ url, result }: ISeach) {
  const [loading, setLoading] = useState(false);
  const search = async (value: String) => {
    console.log(value);
    setLoading(true);
    await fetch(url)
      .then((r) => r.json())
      .then((data) => result(data))
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div>
      <AntdSearch
        placeholder="input search text"
        size="large"
        loading={loading}
        onSearch={search}
      />
    </div>
  );
}
