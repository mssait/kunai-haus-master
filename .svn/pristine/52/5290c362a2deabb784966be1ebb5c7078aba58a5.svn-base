import PROXY from "./proxy"

const fetcher = (url, options) => {
    const headers = options?.headers || {}
    const update = {
        ...options,
        credentials: 'include',
        mode: 'cors',
        headers
    }
    return fetch(PROXY + url, update)
}
export default fetcher;