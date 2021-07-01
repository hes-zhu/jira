import React from "react";

export const SearchPanel = ({ param, setParam, users }) => {
  return (
    <form action="">
      <div>
        {/* ...param 的操作 等价于下面这行代码 */}
        {/* setParam(Object.assign({}, param, {name: evt.target.value})) */}
        <input
          type="text"
          value={param.name}
          onChange={(evt) =>
            setParam({
              ...param,
              name: evt.target.value,
            })
          }
        />
        <select
          value={param.value}
          onChange={(e) =>
            setParam({
              ...param,
              personId: e.target.value,
            })
          }
        >
          <option value={""}>负责人</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};
