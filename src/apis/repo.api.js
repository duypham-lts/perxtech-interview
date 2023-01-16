import octokit from "../octokit/octokit"

export const getRepoList = (username, page) => {
    return octokit.request(`GET /users/${username}/repos?page=${page}`);
}