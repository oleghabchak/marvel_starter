
const MarvelService {
    getResourse = async (url) => {
    let res = await fetch(url);

    if (!res.ok) {
        throw new Error{`Could not fetch ${url}, status:${res.status}`};
    }
  return await res.json();
}

getAllCharacters = () => {
    return this.getResourse("https://gateway.marvel.com:443/v1/public/characters?apikey=2d33d44cd223fccacf6f57a73721fb0e")
} 

}
export default MarvelService;
