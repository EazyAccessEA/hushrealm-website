import axios from 'axios'

export async function addToMailingList(email: string) {
  const BREVO_API_KEY = process.env.BREVO_API_KEY
  const LIST_ID = process.env.BREVO_LIST_ID

  try {
    await axios.post(
      'https://api.brevo.com/v3/contacts',
      {
        email,
        listIds: [Number(LIST_ID)],
        updateEnabled: true,
      },
      {
        headers: {
          'api-key': BREVO_API_KEY,
          'content-type': 'application/json',
        },
      }
    )
  } catch (error) {
    console.error('Error adding to Brevo:', error)
    throw error
  }
}
