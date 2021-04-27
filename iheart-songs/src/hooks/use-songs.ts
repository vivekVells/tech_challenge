import { GET_SONGS } from '../graphql/queries';
import { useQuery } from '@apollo/react-hooks';
import { GetSongsQuery, Song } from '../API';

type UseSongs = [
    loading: boolean,
    error: any,
    songs?: Song[]
]

// custom hook to fetch songs data 
const useSongs = (): UseSongs => {
    const { loading, error, data } = useQuery<GetSongsQuery>(GET_SONGS, {fetchPolicy: 'cache-first'});
    let songs: any[] = [];

    if(data) {
        songs = data?.getSongs || [];
    }

    return [loading, error, songs]
}

export default useSongs;