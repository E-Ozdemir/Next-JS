import styles from "../../styles/Ninjas.module.css";
import Link from "next/link";

//Use effectin next js muadili getStaticProps özel fonksiyonudur.
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return {
    props: {
      users,
    },
  };
}
const Ninjas = ({ users }) => {
  return (
    <div>
      <h1>All Ninjas</h1>
      {users.map((user) => (
        <Link
          href={"/ninjas/" + user.id}
          key={user.id}
          className={styles.single}
        >
          <a>
            <h3>{user.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Ninjas;
