import React, { useState } from "react";
import { Avatar, List, Radio, RadioChangeEvent, Space } from "antd";

export interface IItem {
  id: string;
  displayPicture: string;
  title: string;
  description: string;
}

export interface IUserList {
  result: (user: any) => {} | void;
  list: Array<IItem>;
}

export default function UserList({ result, list }: IUserList) {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const handleSelect = (userId: number) => {
    setSelectedUserId(userId);
    result(userId);
  };
  return (
    <Radio.Group
      onChange={(e: RadioChangeEvent) => handleSelect(e.target.value)}
      value={selectedUserId}
    >
      <Space direction="vertical">
        {list.map((item, index) => (
          <Radio key={item.id} value={item.id} style={{ margin: "0 10px" }}>
            <List.Item.Meta
              style={{ display: "flex", alignItems: "center" }}
              avatar={
                <Avatar
                  src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                />
              }
              title={item.title}
              description={item.description}
            />
          </Radio>
        ))}
      </Space>
    </Radio.Group>
  );
}
