import { Component, OnInit } from '@angular/core';
import {Character} from "./../../models/Character";
import {Episode} from "./../../models/Episode";

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  characters:Character[];

  constructor() { }

  ngOnInit(): void {
    this.getCharacters()
    .then(charactersList => {
      charactersList.map((character) => {
        this.getCharacterEpisodes(character.episode.reverse())
          .then((res) => {
            this.characters = charactersList;
            this.characters[character.id - 1].latestEpisode = res
          })
      })
    })
  }

  getCharacters(): Promise<Character[]> {
    return fetch('https://rickandmortyapi.com/api/character')
      .then(res => res.json())
      .then(res => {
        return res.results as Character[]
      })
  }

  getCharacterEpisodes(episodes:string[] ): Promise<Episode> {
    return fetch(episodes[0])
      .then(res => res.json())
      .then(res => {
        return res as Episode
      })
  }
}
