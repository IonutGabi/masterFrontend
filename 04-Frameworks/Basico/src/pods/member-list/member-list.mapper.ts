import * as ApiModel from "./api/api.model";
import * as ViewModel from "./member-list.vm";

export const mapMemberListToVM = (
  memberList: ApiModel.MemberApiModel[]
): ViewModel.MemberViewModel[] => memberList.map(mapMemberToVm);

const mapMemberToVm = (
  data: ApiModel.MemberApiModel
): ViewModel.MemberViewModel => ({
  id: data.id,
  login: data.login,
  avatar_url: data.avatar_url,
});
