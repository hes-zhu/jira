import React from "react";
import * as qs from 'qs';
import { useState, useEffect } from "react";
import { SearchPanel } from "./SearchPanel";
import { List } from "./List";
import { cleanObject } from "utils/index";

const apiUrl = process.env.REACT_APP_API_URL;
export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(
      `${apiUrl}/projects?${qs.stringify(cleanObject(param))}`
    ).then(async (resp) => {
      if (resp.ok) {
        setList(await resp.json());
      }
    });
  }, [param]);
  useEffect(() => {
    fetch(`${apiUrl}/users`).then(async (resp) => {
      if (resp.ok) {
        setUsers(await resp.json());
      }
    });
  }, []);

  return (
    <>
      <SearchPanel param={param} users={users} setParam={setParam} />
      <List list={list} users={users} />
    </>
  );
};
