import Link from 'next/link';
import Container from '../../components/Container';
import SideBySide from '../../components/SideBySide';

export const metadata = {
  title: 'Projects | Layne Uphostlery',
  description: 'Get your upholstery work done!',
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
        <SideBySide>
          <div>
            <img src='/images/upholstery/car-seats-2.jpg' alt='Car Seats 2' />
          </div>
          <div>
            <img src='/images/upholstery/car-seats-1.jpg' alt='Car seats' />
          </div>
        </SideBySide>
        <SideBySide>
          <div>
            <img src='/images/upholstery/car-seats-1.jpg' alt='Car seats' />
          </div>
          <div>
            <img src='/images/upholstery/car-seats-2.jpg' alt='Car Seats 2' />
          </div>
        </SideBySide>
      </Container>
    </main>
  );
}
