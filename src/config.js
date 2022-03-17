const app = {
  version: '1.0.0',
  description: '',
  note: ''
}
const versionApp = app.version

const environments = {
  development: {
    baseUrl: 'http://example.abc-xyz',
    description: 'only for development',
    status: 'live'
  },
  test: {
    baseUrl: '',
    description: '',
    status: ''
  },
  production: {
    baseUrl: '',
    description: '',
    status: ''
  }
}
const baseUrlApi = environments.development.baseUrl

export { versionApp, baseUrlApi }
