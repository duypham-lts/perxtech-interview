import octokit from "../octokit/octokit"

export const getOrganizationList = (username, page) => {
    return octokit.request(`GET /users/${username}/orgs?page=${page}`)
}