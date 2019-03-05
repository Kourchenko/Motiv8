const routes = {
    // Groups
    API_GET_GROUPS: '/:userId/groups',
    API_QUERY_GROUPS: '/:userId/groups/query',
    API_GET_GROUP_BY_ID: '/:userId/group/:groupId',
    API_GET_GROUP_ALL_USERS: '/:userId/group/:groupId/users',
    API_GET_GROUPS_BY_USER_ID: '/:userId/groups',
    API_CREATE_GROUP: '/:userId/groups',
    API_UPDATE_GROUP: '/:userId/group/:groupId',

    // Users
    API_GET_USER_BY_ID: '/:userId',
    API_CREATE_USER: '/user',
    API_UPDATE_USER: '/:userId',
    
    // Goals
    API_GET_GOALS_BY_GROUP_ID: '/:userId/group/:groupId/goals',
    API_GET_GOALS_BY_USER_ID: '/:userId/goals',
    API_QUERY_PREVIOUS_GOALS_USER_ID: '/:userId/goals',
    API_CREATE_GOAL: '/:userId/goal',
    API_UPDATE_GOAL: '/:userId/goal',

    // Messages
    API_GET_CHAT_MESSAGES_BY_GROUP_ID: '/:userId/group/:groupId/chat/messages',
    API_CREATE_CHAT_MESSAGE: '/:userId/group/:groupId/chat/messages',

};

module.exports = { routes };