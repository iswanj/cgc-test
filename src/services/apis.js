import useSWR from 'swr';
import {request} from './request';

export const useAlbums = () => {
  const {data, error, mutate} = useSWR('/albums', request);
  return {
    albums: data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
};

export const useImages = id => {
  const {data, error, mutate} = useSWR(`/albums/${id}/photos`, request);
  return {
    photos: data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
};
