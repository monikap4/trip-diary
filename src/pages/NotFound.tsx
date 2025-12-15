import { Heading } from '../components/Heading';
import { Button } from '../components/Button';

export const NotFound = () => (
  <div>
    <Heading size="h1">404</Heading>
    <p>Stránka nebyla nalezena</p>
    <Button to="/" label="Zpět na hlavní stránku" />
  </div>
);
