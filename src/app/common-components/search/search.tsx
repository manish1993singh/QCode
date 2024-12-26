import { Input } from "antd";
import { useState } from "react";

const { Search: AntdSearch } = Input;

export interface ISeach {
  url: string;
  onSearch: (data: any) => void | {};
}

export default function Search({ url, onSearch }: ISeach) {
  const [loading, setLoading] = useState(false);
  const search = async (value: String) => {
    console.log(value);
    setLoading(true);
    await fetch(url)
      .then((r) => r.json())
      .then((data) => onSearch(data))
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
