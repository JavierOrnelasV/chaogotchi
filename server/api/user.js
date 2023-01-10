import { serverSupabaseClient, serverSupabaseUser } from '#supabase/server'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { email, password } = body
  const supabase = serverSupabaseClient(event)

  console.log(email, password)

  let { data, error } = await supabase.auth.signUp({
    email: email,
    password: password
  })

  return await serverSupabaseUser(event)
})
