import * as ApiModel from "./api/api.model";
import * as ViewModel from "./member-list.vm";

export const mapMemberListToVM = (
  memberList: ApiModel.MemberListApiModel[]
): ViewModel.MemberListViewModel[] => memberList.map(mapMemberToVm);

const mapMemberToVm = (
  data: ApiModel.MemberListApiModel
): ViewModel.MemberListViewModel => ({
  id: data.id ?? 0,
  login: data.login ?? "",
  avatar_url: data.avatar_url ?? "",
});
