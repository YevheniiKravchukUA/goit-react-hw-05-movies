import { Section } from 'shared/components/Section/Section';
import { QueryMovies } from 'modules/QueryMovies/QueryMovies';

export function SearchPage() {
  return (
    <Section>
      <QueryMovies />
    </Section>
  );
}
