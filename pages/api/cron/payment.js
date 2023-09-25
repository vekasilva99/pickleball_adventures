import { axios } from '@octokit/rest'


// zod env type checking
import { env } from 'env'

export async function GET() {
  console.log("cronnnnnn") 
  console.log(env)
}
