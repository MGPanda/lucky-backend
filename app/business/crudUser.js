const User = require('../models/User');

/**
 * @param {String} username 
 * @param {String} email 
 * @param {String} password 
 * @param {String} social
 * @returns {Promise}
 */
function createUser(username, email, password, social) {
    const user = new User({ username, email, password, social });
    return user.save();
}

/**
 * @param {String} userId 
 * @returns {Promise}
 */
function getUser(userId) {
    return User.findById(userId);
}

/**
 * @param {String} userEmail 
 * @returns {Promise}
 */
function getUserByUsername(userName) {
    return User.findOne({ username: userName });
}

/**
 * @param {String} userEmail 
 * @returns {Promise}
 */
function getUserBySocialId(socialId) {
    return User.findOne({ social: socialId });
}

/**
 * @returns {Promise}
 */
function listUsers() {
    return User.find();
}

/**
 * @param {ObjectId} userId 
 * @param {User} doc 
 * @returns {Promise}
 */
function overwriteUser(userId, doc) {
    return User.findOneAndReplace({ _id: userId }, doc);
}

/**
 * @param {ObjectId} userId 
 * @param {User} doc 
 * @returns {Promise}
 */
function modifyUser(userId, doc) {
    return User.findOneAndUpdate({ _id: userId }, doc);
}

/**
 * @param {String} userId 
 * @returns {Promise}
 */
function deleteUser(userId) {
    return User.findOneAndDelete({ _id: userId });
}

module.exports = {
    createUser,
    listUsers,
    getUser,
    getUserByUsername,
    getUserBySocialId,
    overwriteUser,
    modifyUser,
    deleteUser,
};
