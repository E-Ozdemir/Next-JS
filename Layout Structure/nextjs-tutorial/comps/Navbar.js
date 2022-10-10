import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image
          src="/profile.jpg"
          width={64}
          height={64}
          className={styles.roundedFull}
        />
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/ninjas/">
        <a>Ninja Listing</a>
      </Link>
    </nav>
  );
};

export default Navbar;
