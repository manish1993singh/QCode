import Search from "../search/search";
import UserList, { IItem } from "../user-list/UserList";

const dummy: Array<IItem> = [
  { displayPicture: "sss", title: "some", description: "some", id: "1" },
  { displayPicture: "sss", title: "some", description: "some", id: "2" },
];

export default function SearchSelectUser() {
  return (
    <div>
      <Search
        url={""}
        result={function (data: any): void | {} {
          throw new Error("Function not implemented.");
        }}
      />
      <UserList
        result={function (user: any): {} {
          throw new Error("Function not implemented.");
        }}
        list={dummy}
      />
    </div>
  );
}
