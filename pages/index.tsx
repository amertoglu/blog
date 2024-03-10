import Container from "../components/container";
import Image from "next/image";

function HomePage() {
  return (
    <>
      <Container>
        <div className="space-y-6">
          <h1 className="text-2xl font-bold">
            Hello there! 👋
          </h1>
          <p>
            I'm A Mertoğlu, a passionate web developer with a love for creativity and innovation. Welcome to my corner of the internet, where I bring ideas to life through code.
          </p>

          <p>Thanks for stopping by, and I hope you enjoy exploring my website!</p>
        </div>
      </Container>

      <div className="container max-w-4xl m-auto px-4 mt-20">
        <Image
          src="/smart-1.jpg"
          width="80"
          height="80"
        />
      </div>
    </>
  );
}

export default HomePage;
