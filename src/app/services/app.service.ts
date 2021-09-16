import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AdminListUrl,
        DelegatorListUrl,
        IndependentListUrl,
        MissionListUrl,
        FamilyListUrl,HelpListAdminUrl,AdminFamilyReportUrl,
        AdminCreateUrl,
        DelegatorCreateUrl,IndependentCreateUrl,MissionCreateUrl,FamilyCreateUrl,
        AssignDonationFamilyUrl,AssignIndependentFamilyUrl,
        DelegatorMissionListUrl,DelegatorMissionUpdateUrl,
        IndependentHelpCreateUrl,IndependentFamilyListUrl,IndependentHelpListUrl,AssignHelpFamilyUrl,IndependentFamilyReportUrl,
        LoginUrl,
        DeleteDelegator,DeleteIndependent,DeleteFamily,DeleteMission,DeleteHelp} from '../constants/api-urls'

@Injectable()
export class AppService {
  headers = new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Request-Method':'GET POST',
      'Access-control-Allow-Headers':'Content-Type'});
  params;
  constructor(private httpClient: HttpClient){
  }

  listAdmins (){
    return this.httpClient.get(`${AdminListUrl}`,{headers: this.headers});
  }
  listDelegators(params){
    return this.httpClient.get(`${DelegatorListUrl}`,{headers: this.headers, params:params});
  }
  listIndependents(params){
    return this.httpClient.get(`${IndependentListUrl}`,{headers: this.headers, params:params});
  }
  listMissionAdmin(params){
    return this.httpClient.get(`${MissionListUrl}`,{headers: this.headers, params:params});
  }
  listFamilyAdmin(){
    return this.httpClient.get(`${FamilyListUrl}`,{headers: this.headers});
  }
  listHelpAdmin(){
    return this.httpClient.get(`${HelpListAdminUrl}`,{headers: this.headers});
  }
  getAdminFamilyReport(params){
   return this.httpClient.get(`${AdminFamilyReportUrl}`,{headers: this.headers, params:params});
  }


  createAdmins(body){
    return this.httpClient.post(`${AdminCreateUrl}`,body,{headers: this.headers});
  }
  createDelegator(body){
    return this.httpClient.post(`${DelegatorCreateUrl}`,body,{headers: this.headers});
  }
  createIndependent(body){
    return this.httpClient.post(`${IndependentCreateUrl}`,body,{headers: this.headers});
  }
  createMission(body){
    return this.httpClient.post(`${MissionCreateUrl}`,body,{headers: this.headers});
  }

  createFamily(body){
    return this.httpClient.post(`${FamilyCreateUrl}`,body,{headers: this.headers});
  }

  assignDonationToFamily(body){
    return this.httpClient.post(`${AssignDonationFamilyUrl}`,body,{headers: this.headers});
    }
  assignIndependentToFamily(body){
    return this.httpClient.post(`${AssignIndependentFamilyUrl}`,body,{headers: this.headers});
  }


  listDelegatorMission(params){
  // params is a json containing the delegator params = {d_id : 1}
    return this.httpClient.get(`${DelegatorMissionListUrl}`,{headers: this.headers, params:params});
  }
  updateDelegatorMissionStatus(body){
    return this.httpClient.post(`${DelegatorMissionUpdateUrl}`,body,{headers: this.headers});
  }


  createIndependentHelp(body){
    return this.httpClient.post(`${IndependentHelpCreateUrl}`,body,{headers: this.headers});
  }
  listIndependentFamily(params){
    return this.httpClient.get(`${IndependentFamilyListUrl}`,{headers: this.headers, params:params});
  }
  listIndependentHelp(params){
    return this.httpClient.get(`${IndependentHelpListUrl}`,{headers: this.headers, params:params});
  }
  assignHelpToFamily(body){
    return this.httpClient.post(`${AssignHelpFamilyUrl}`,body,{headers: this.headers});
  }
  getIndependentFamilyReport(params){
     return this.httpClient.get(`${IndependentFamilyReportUrl}`,{headers: this.headers, params:params});
  }

  //login function for the login page
  loginPage(body){
    return this.httpClient.post(`${LoginUrl}`,body,{headers: this.headers});
  }

  //delete methods to delete delegator independent family mission help
  deleteDelegator(body){
    return this.httpClient.post(`${DeleteDelegator}`,body,{headers: this.headers});
  }
  deleteIndependent(body){
    return this.httpClient.post(`${DeleteIndependent}`,body,{headers: this.headers});
  }
  deleteFamily(body){
    return this.httpClient.post(`${DeleteFamily}`,body,{headers: this.headers});
  }
  deleteMission(body){
    return this.httpClient.post(`${DeleteMission}`,body,{headers: this.headers});
  }
  deleteHelp(body){
    return this.httpClient.post(`${DeleteHelp}`,body,{headers: this.headers});
  }

}

