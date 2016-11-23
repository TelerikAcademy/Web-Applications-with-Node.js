'use strict';

const db = [
    {
        id: 1,
        username: 'Cyki',
        password: 'linux'
    },
    {
        id: 2,
        username: 'Johny Cash',
        password: 'potato'
    }
];

module.exports = {
    findById(id) {
        const user = db.find(x => x.id === id);

        return Promise.resolve(user);
    },
    findByUsername(username) {
        const user = db.find(x => x.username === username);
        console.log(db);
        return Promise.resolve(user);
    },
    createUser(user) {
        const lastId = db[db.length - 1].id;

        user.id = lastId + 1;

        db.push(user);

        return Promise.resolve(user);
    },
    findByGithubId(githubId) {
        const user = db.find(x => x.github_id === githubId);

        return Promise.resolve(user);
    }
};