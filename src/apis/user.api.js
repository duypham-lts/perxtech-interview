import octokit from "../octokit/octokit"

export const getUserInfo = (username) => {
    return octokit.request(`GET /users/${username}`)
}