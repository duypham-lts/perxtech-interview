import octokit from "../octokit/octokit"

export const getOrganizationList = (username) => {
    return octokit.request(`GET /users/${username}/orgs`)
}