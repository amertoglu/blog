import Container from "../components/container";
import Image from "next/image";

function HomePage() {
  return (
    <>
      <div>
        <Image
          src="/smart-1.jpg"
          alt="avatar"
          width="70"
          height="70"
          border-radius="50px"
        />
      </div>
      
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
    </>
  );
}

export default HomePage;
