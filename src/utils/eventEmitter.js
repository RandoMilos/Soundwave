const listeners = {};

export const eventEmitter = {
    on: (event, callback) => {
        if (!listeners[event]) listeners[event] = [];
        listeners[event].push(callback);
    },
    off: (event, callback) => {
        if (!listeners[event]) return;
        listeners[event] = listeners[event].filter(cb => cb !== callback);
    },
    emit: (event, data) => {
        if (!listeners[event]) return;

        if (event === 'libraryUpdated') {
        console.log('La biblioteca se actualizó.');
    }

    listeners[event].forEach(callback => callback(data));
    },
};