import { useState, useEffect } from "react";
import Link from "next/link";
import MainContainer from "../components/MainContainer";

const Users = ({ users }) => {
  // const [users, setUsers] = useState([
  //   { id: 1, name: "petya" },
  //   { id: 2, name: "vasya" },
  // ]);

  // useEffect(async () => {
  // 	const response = await fetch("https://jsonplaceholder.typicode.com/users");
  // 	const data = await response.json();
  // 	setUsers(data);
  // }, [])

  return (
    <MainContainer keywords={"users next js "}>
      <h1>Список користувачів</h1>
      <ul>
        {users.map((el) => (
          <li key={el.id}>
            <Link href={`/users/${el.id}`}>{el.name}</Link>
          </li>
        ))}
      </ul>
    </MainContainer>
  );
};

export default Users;

export async function getStaticProps(context) {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return {
    props: { users },
  };
}
