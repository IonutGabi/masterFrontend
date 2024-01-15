import * as ApiModel from "./api/api.model";
import * as ViewModel from "./rickandmorty-list.vm";

export const mapCharacterListToVM = (
  characterList: ApiModel.CharacterApiModel[]
): ViewModel.CharacterListViewModel[] => characterList.map(mapCharacterToVm);

const mapCharacterToVm = (
  result: ApiModel.CharacterApiModel
): ViewModel.CharacterListViewModel => ({
  id: `${result.id}`,
  image: result.image,
  name: result.name,
  status: result.status,
});
