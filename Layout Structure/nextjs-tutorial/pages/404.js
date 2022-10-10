import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <>
      <Head>
        <title>Page Not found!</title>
      </Head>
      <div className="not-found">
        <h1>Oooops...</h1>
        <h2>That page connot be found.</h2>
        <p>
          Go back to the{" "}
          <Link href="/">
            <button>Home</button>
          </Link>
        </p>
      </div>
    </>
  );
};

export default NotFound;
