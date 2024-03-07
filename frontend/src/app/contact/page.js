// import Image from "next/image";

import Link from "next/link";
import Container from "../../components/Container";

export const metadata = {
  title: "Contact | Layne Uphostlery",
  description: "Get your upholstery work done!",
};

export default function Contact() {
  return (
    <main>
      <Container>
        <h1>Contact Layne's Upholstery</h1>
        <p>Get a hold of us to talk about your project and get estimates!</p>
        <p>Put some email form here probably</p>
        <p>Probably a business phone number too</p>
      </Container>
    </main>
  );
}
