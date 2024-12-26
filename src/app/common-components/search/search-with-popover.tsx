// components/SearchWithPopover.tsx
import React, { useState } from "react";
import { Input, Popover, List } from "antd";
import styles from "./SearchWithPopover.module.scss";

const { Search } = Input;
export interface ISearchWithPopOver {
  resultHandler: (value: any) => {} | void;
}
function SearchWithPopover({ resultHandler }: ISearchWithPopOver) {
  const [visible, setVisible] = useState(false);
  const [options, setOptions] = useState<string[]>([]);
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (value: string) => {
    // Simulate fetching data from an API
    const newOptions = [value + " 1", value + " 2", value + " 3"];
    setOptions(newOptions);
    setVisible(true);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    if (event.target.value === "") {
      setVisible(false);
    }
  };

  const selectinHandler = (value: any) => {
    resultHandler(value);
    setSearchValue(value);
    setOptions([]);
  };

  return (
    <Popover
      content={
        <List
          dataSource={options}
          renderItem={(item) => (
            <List.Item onClick={() => handleInputChange}>{item}</List.Item>
          )}
          style={{ width: 300 }}
        />
      }
      title="Suggestions"
      trigger="click"
    >
      <Search
        value={searchValue}
        placeholder="Search here..."
        enterButton
        onSearch={handleSearch}
        onChange={handleInputChange}
        style={{ width: 300 }}
      />
    </Popover>
  );
}

export default SearchWithPopover;
