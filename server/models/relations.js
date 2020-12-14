const db = require('../database/db.connect');

db.comments = require('./commentModel');
db.posts = require('./postsModel');
db.users = require('./userModel');
db.roles = require('./roleModel');
db.subjects = require('./subjetModel');

// one post has one user (creator)
db.posts.belongsTo(db.users, {
    foreignKey: {
        name: 'id_user',
        allowNull: true
    },
    onDelete: 'SET NULL',
    onUpdate: 'SET NULL'
});

// one comment has one user (creator)
db.comments.belongsTo(db.users, {
    foreignKey: {
        name: 'id_user',
        allowNull: true
    },
    onDelete: 'SET NULL',
    onUpdate: 'SET NULL'
});

// one comment has one post as parent
db.comments.belongsTo(db.posts, {
    foreignKey: 'id_post'
});

// one post has one subject
db.posts.belongsTo(db.subjects, {
    foreignKey: 'id_subject'
});

// one user has one role
db.users.belongsTo(db.roles, {
    foreignKey: 'id_role'
});

module.exports = db;