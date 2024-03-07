import Link from "next/link";
import Container from "../../components/Container";

export const metadata = {
  title: "Projects | Layne Uphostlery",
  description: "Get your upholstery work done!",
};

export default function Projects() {
  return (
    <main>
      <Container>
        <h1>Projects at Layne's Upholstery</h1>
        <p>Going to list out some cool projects here and show a few photos</p>
        <ul>
          <li>
            <p>Furniture</p>
          </li>
          <li>
            <p>Boats</p>
          </li>
          <li>
            <p>Trains</p>
          </li>
          <li>
            <p>Plains</p>
          </li>
          <li>
            <p>Automobiles</p>
          </li>
        </ul>
      </Container>
    </main>
  );
}
