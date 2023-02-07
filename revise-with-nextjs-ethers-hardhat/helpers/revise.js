import { Revise } from 'revise-sdk'

const AUTH_TOKEN = process.env.REVISE_AUTH_TOKEN //this needs to be replaced by the AUTH TOKEn you generate

const reviseInitiated = new Revise({ auth: AUTH_TOKEN })

export default reviseInitiated
