import Link from "next/link";
import Container from "../../components/Container";

export const metadata = {
  title: "About | Layne Uphostlery",
  description: "Get your upholstery work done!",
};

export default function About() {
  return (
    <main>
      <Container>
        <h1>About Layne's Upholstery</h1>
        <p>We have been in business since 1982 providing excellent quality upholstery work for almost anything you can think of. We have done boat covers, boat seats, church pews, car interior to atv seats!</p>
        <p>You name it, I will recover it!</p>
      </Container>
    </main>
  );
}
