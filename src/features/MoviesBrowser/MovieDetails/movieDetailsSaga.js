export const movieDetailsSaga = () => {
    const details = yield call(getMovieDetails, { movieId: movieId });
};
