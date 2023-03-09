import { Section } from 'shared/components/Section/Section';
import { QueryMovies } from 'modules/QueryMovies/QueryMovies';

export default function SearchPage() {
  return (
    <Section>
      <QueryMovies />
    </Section>
  );
}
