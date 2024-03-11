import Link from "next/link";
import Container from "../components/container";

export default function Header() {
  return (
    <header className="py-6">
      <Container>
        <nav className="flex space-x-4">
          <Link href="/">/</Link>
          <Link href="/posts">Posts</Link>
          <Link href="https://github.com/amertoglu">Github</Link>
        </nav>
      </Container>
    </header>
  );
}
