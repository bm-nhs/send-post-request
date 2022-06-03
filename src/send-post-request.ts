import { DeploymentInformationPayload, HTTPRequestResponse } from "./interfaces.ts"

function mapArguments(args: string[]): DeploymentInformationPayload {
  const mappedArgs: DeploymentInformationPayload = {
    project: args[1],
    commitHash: args[2],
    branch: args[3],
    version: args[4],
    jobId: args[5],
    status: args[6]
  }

  return mappedArgs
}

async function sendPostRequest(cliArguments: string[]): Promise<HTTPRequestResponse> {
  const payload: DeploymentInformationPayload = mapArguments(cliArguments)
  const url = cliArguments[0]
  let resp = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([payload])
  })
  console.log(resp)
  return {
    status: resp.status,
    body: await resp.json()
  }
}

const data = await sendPostRequest(Deno.args).then(data => {
  return data
})

console.log(data)