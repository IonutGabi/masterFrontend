import * as ApiModel from "./api/api.model";
import * as ViewModel from "./member-detail.vm";

export const mapMemberDetailToVM = (
  data: ApiModel.MemberDetailApiModel
): ViewModel.MemberDetailEntity => ({
  id: data.id,
  login: data.login,
  avatar_url: data.avatar_url,
  company: data.company,
});
