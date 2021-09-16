import {environment} from '../../environments/environment';

//admin get Urls
export const AdminListUrl = `${environment.nodejsUrl}admin/list`;
export const FamilyListUrl = `${environment.nodejsUrl}admin/poor-family/list`;
export const DelegatorListUrl = `${environment.nodejsUrl}admin/municipal-member/list`;
export const IndependentListUrl = `${environment.nodejsUrl}admin/independent-member/list`;
export const MissionListUrl = `${environment.nodejsUrl}admin/mission/list`;
//must be add to the document
export const HelpListAdminUrl = `${environment.nodejsUrl}admin/help/list`;
// get report for admin about family
export const AdminFamilyReportUrl = `${environment.nodejsUrl}admin/family/report`;

//admin post Urls
export const AdminCreateUrl = `${environment.nodejsUrl}admin/create`;
export const FamilyCreateUrl = `${environment.nodejsUrl}admin/poor-family/create`;
export const DelegatorCreateUrl = `${environment.nodejsUrl}admin/municipal-member/create`;
export const IndependentCreateUrl = `${environment.nodejsUrl}admin/independent-member/create`;
export const MissionCreateUrl = `${environment.nodejsUrl}admin/mission/create`;
//must be add to the document
export const AssignDonationFamilyUrl = `${environment.nodejsUrl}admin/assign/don-pf`;
export const AssignIndependentFamilyUrl = `${environment.nodejsUrl}admin/assign/poor-family`;

//delegator get/post Urls
export const DelegatorMissionListUrl = `${environment.nodejsUrl}delegator/mission`;
export const DelegatorMissionUpdateUrl = `${environment.nodejsUrl}delegator/mission/update`;

//independent delegator get/post Urls
export const IndependentHelpCreateUrl = `${environment.nodejsUrl}independent/help/create`;
export const IndependentFamilyListUrl = `${environment.nodejsUrl}independent/family/list`;
export const IndependentHelpListUrl = `${environment.nodejsUrl}independent/help/list`;
export const AssignHelpFamilyUrl = `${environment.nodejsUrl}independent/assign/help-pf`;
// get report for independent about family
export const IndependentFamilyReportUrl = `${environment.nodejsUrl}independent/family/report`;
// delete help
export const DeleteHelp = `${environment.nodejsUrl}independent/delete/help`;

//login page
export const LoginUrl = `${environment.nodejsUrl}login/`;

//delete delegator independent mission family
export const DeleteDelegator = `${environment.nodejsUrl}admin/delete/delegator`;
export const DeleteIndependent = `${environment.nodejsUrl}admin/delete/independent`;
export const DeleteFamily = `${environment.nodejsUrl}admin/delete/family`;
export const DeleteMission = `${environment.nodejsUrl}admin/delete/mission`;

