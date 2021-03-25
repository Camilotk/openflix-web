import nookies from 'nookies'

export const ACCESS_TOKEN_KEY = 'access_token'

export const getAccessToken = ctx => {
  const cookies = nookies.get(ctx, ACCESS_TOKEN_KEY)
  return cookies[ACCESS_TOKEN_KEY]
}

export const setAccessToken = accessToken => {
  nookies.set({}, ACCESS_TOKEN_KEY, accessToken, { path: '/' })
}

export const removeAccessToken = ctx => {
  nookies.destroy(ctx, ACCESS_TOKEN_KEY, { path: '/' })
}

export const frontendLogout = signOut => {
  signOut()
}

export const backendLogout = ctx => {
  removeAccessToken(ctx)
  nookies.destroy(ctx, 'user', { path: '/' })
  ctx.res.redirect('/login')
  ctx.res.end()
}
