module.exports = (path) => ({
    remote: {
        host: '1.1.1.1',
        port: 21,
        user: 'admin@admin.com',
        password: 'password',
        path: '/',
    },
    local: {
        path: path.join(__dirname, "./remote")
    },
    ignore: ["*sensitive*"]
});