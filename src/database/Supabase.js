import axios from 'axios'

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY

const subjectTableEP = "/SUBJECT";
const classTableEP = "/CLASS";

const db = axios.create({
  baseURL: `${supabaseUrl}/rest/v1`,
  headers: {
    apikey: supabaseKey,
    Authorization: `Bearer ${supabaseKey}`, // Use the signed-in user's access token when applicable
    'Content-Type': 'application/json',
  },
});

export async function getSubjects() {
    let response = await db.get(subjectTableEP, {
        params:{ select: '*' },
    });
    return response.data;
}