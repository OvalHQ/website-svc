import { APIClient } from "@/utils/api-client"
import { CreateContactRecordPayload } from "./types"

const baseId = process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID
const tableId = process.env.NEXT_PUBLIC_AIRTABLE_TABLE_ID
const token = process.env.NEXT_PUBLIC_AIRTABLE_TOKEN

const createContactRecord = async (payload: CreateContactRecordPayload) => {
  const response = await APIClient(`${baseId}/${tableId}`, {
    headers: {
      Authorization: `Bearer ${token}`
    },
    method: 'POST',
    data: payload
  })
  console.log('RESPONSE =>', response)
  return response;
}

export const AirtableAPI = {
  createContactRecord,
}