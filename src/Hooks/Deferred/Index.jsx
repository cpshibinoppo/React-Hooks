import React, { useDeferredValue, useState } from "react";
// import SearchInput from "./Search";

function Index() {
  const items = [
    {
      name: "shibin",
      id: 1,
    },
    {
      name: "oppo",
      id: 1,
    },
    {
      name: "mi",
      id: 1,
    },
    {
      name: "apple",
      id: 1,
    },
  ];
  const [search, setSearch] = useState("");
  const defferredSearch = useDeferredValue(search, { timeoutMs: 50000 });
  const searchResults = items.filter((item) =>
    item.name.toLowerCase().includes(defferredSearch.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {searchResults.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      {/* <SearchInput value={defferredSearch}/> */}
    </div>
  );
}

export default Index;
