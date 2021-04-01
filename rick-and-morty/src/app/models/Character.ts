import { Episode } from "./Episode";

export class Character {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    origin: string;
    location: string;
    image: string;
    url: string;
    episode: string[];
    latestEpisode: Episode;
}