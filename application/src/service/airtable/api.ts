import { APIClient } from "@/utils/api-client"
import { CreateContactRecordPayload, CreateGetStartedRecordPayload } from "./types"

const baseId = process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID;
const getStartedBaseId = process.env.NEXT_PUBLIC_AIRTABLE_GET_STARTED_BASE_ID;
const tableId = process.env.NEXT_PUBLIC_AIRTABLE_TABLE_ID;
const getStartedTableId = process.env.NEXT_PUBLIC_AIRTABLE_GET_STARTED_TABLE_ID;

const token = process.env.NEXT_PUBLIC_AIRTABLE_TOKEN;

const createContactRecord = async (payload: CreateContactRecordPayload) => {
  const response = await APIClient(`${baseId}/${tableId}`, {
    headers: {
      Authorization: `Bearer ${token}`
    },
    method: 'POST',
    data: payload
  })
  return response;
}

const createGetStartedRecord = async (payload: CreateGetStartedRecordPayload) => {
  console.log('Payload =>', payload)
  const response = await APIClient(`${getStartedBaseId}/${getStartedTableId}`, {
    headers: {
      Authorization: `Bearer ${token}`
    },
    method: 'POST',
    data: payload
  })
  console.log('RESPONSE =>', response);
  return response;
}

export const AirtableAPI = {
  createContactRecord,
  createGetStartedRecord
}