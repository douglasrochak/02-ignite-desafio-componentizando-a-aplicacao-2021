import { GenreResponseProps } from '../@types';
import { Button } from './Button';
import '../styles/sidebar.scss';

interface SideBarProps {
  genres: GenreResponseProps[];
  selectedGenreId: number;
  onSelectedGenreId: (id: number) => void;
}

export function SideBar({
  genres,
  selectedGenreId,
  onSelectedGenreId,
}: SideBarProps) {
  // Complete aqui
  return (
    <nav className='sidebar'>
      <span>
        Watch<p>Me</p>
      </span>

      <div className='buttons-container'>
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => onSelectedGenreId(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
