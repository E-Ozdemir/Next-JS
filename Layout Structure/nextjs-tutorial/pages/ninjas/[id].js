export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  const paths = users.map((user) => {
    return { params: { id: user.id.toString() } };
  });

  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
}
export async function getStaticProps(context) {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const users = await res.json();
  return {
    props: {
      users,
    },
  };
}
const Details = ({ users }) => {
  return (
    <div>
      <h1>Details Page</h1>
      <h3>{users.name}</h3>
      <p>{users.website}</p>
    </div>
  );
};

export default Details;
