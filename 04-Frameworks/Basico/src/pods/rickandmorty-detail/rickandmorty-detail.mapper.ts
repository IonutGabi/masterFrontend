import * as ApiModel from "./api/api.model";
import * as ViewModel from "./rickandmorty-detail.vm";

export const mapCharacterFromVm = (
  data: ApiModel.CharacterDetailApiModel
): ViewModel.CharacterDetailVm => ({
  id: data.id ?? 0,
  name: data.name ?? "",
  gender: data.gender ?? "",
  image: data.image ?? "",
  species: data.species ?? "",
});
