export interface DeploymentInformationPayload {
  project: string
  commitHash: string
  branch: string
  version: string
  jobId: string
  status: string
}

export interface HTTPRequestResponse {
  status: number,
  body: any
}
