import Link from "next/link";
import Container from "../components/Container";

export const metadata = {
  title: "Layne Uphostlery",
  description: "Get your upholstery work done!",
};

export default function Home() {
  return (
    <main>
      <Container>
        <h1>Welcome to Layne's Upholstery</h1>
        <p>A family owned business that has been taking care of the greater Lindale area for all of their upholstery needs. Taking great pride in all reupholstery of items ranging from furniture, boat seats and covers, vehicles and more!</p>
        <p>We have been in business since 1982 and are eager to continue providing our top quality craftsmanship to everyone in the surrounding areas of Tyler, Mineola and .... I dont know some where else too.</p>
        <p>There is no project too big or too small, so give us a call today and we can talk about your needs and get you an estimate on the repairs!</p>
        <p>
          <Link
            href="/about"
            className="button"
          >About</Link>
        </p>
      </Container>
    </main>
  );
}
