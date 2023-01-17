import octokit from "../octokit/octokit"

export const getRepoList = (username) => {
    return octokit.request(`GET /users/${username}/repos`);
}