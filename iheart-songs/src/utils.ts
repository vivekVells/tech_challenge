import { mockMusicDirectors } from "./mock/song-detail-data"

// @todo: can make this to be more dynamic to return random names of 'Music Director' or 'Artist Name'
export const getRandomMusicDirector = () => {
    return mockMusicDirectors[Math.floor((Math.random() * 10) + 1)]
}