export interface CharacterViewModel {
  id: string;
  name: string;
  status: string;
  species: string;
  gender: string;
  bestSentences: string;
}

export const createEmptyCharacter = (): CharacterViewModel => ({
  id: '',
  name: '',
  status: '',
  species: '',
  gender: '',
  bestSentences: '',
});
