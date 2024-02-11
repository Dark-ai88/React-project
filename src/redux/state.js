let state = {
    messagePage: {
        usersItem: [
            { id: 'sasha', name: 'Sasha' },
            { id: 'andrey', name: 'Andrey' },
            { id: 'leha', name: 'Leha' },
            { id: 'alex', name: 'Alex' },
            { id: 'misha', name: 'Misha' },
        ],
        messageItem: [
            { id: 1, message: 'Hi, my name is Alex' },
            { id: 2, message: 'I learn React.' },
            { id: 3, message: 'And this cool' },
        ]
    },
    profilePage: {
        postData: [
            { id: 1, postMessage: 'Hi, you learn React?', like: 12 },
            { id: 2, postMessage: 'Hi everyone, how are you doing?', like: 32 },
            { id: 3, postMessage: 'I want you to succeed.', like: 54, },
        ]
    }
};

export default state;