import { Button } from "./Button";

import '../styles/sidebar.scss'
import { useState } from "react";
interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface GenresProps {
  listGenres: Array<GenreResponseProps>
  selectedGenreId: number
  onSelectedGenreId: (id: number) => void
}

export function SideBar({ listGenres, selectedGenreId, onSelectedGenreId }: GenresProps) {
  // Complete aqui

  function handleClickButton(id: number) {
    onSelectedGenreId(id);
  }

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {listGenres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}