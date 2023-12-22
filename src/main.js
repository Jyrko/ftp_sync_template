// const fs = require("fs");
const path = require("path");
const ftp = require('basic-ftp');
const config = require('./config.js')(path);

console.log(config.local.path);
async function upload() {
    const client = new ftp.Client();
    client.ftp.verbose = true;
    try {
        await client.access({
            host: config.remote.host,
            user: config.remote.user,
            password: config.remote.password,
            secure: config.remote.secure
        });
        console.log('Connected to FTP server');
        // client.trackProgress(info => console.log(info.bytesOverall))
        await client.uploadFromDir(config.local.path, config.remote.path);

        // const localFiles = fs.readdirSync(config.local.path);
        // for (const file of localFiles) {
        //     const localFilePath = path.join(config.local.path, file);
        //     const remoteFilePath = path.join(config.remote.path, file);

        //     const localFileStat = fs.statSync(localFilePath);
        //     const remoteFileStat = await client.size(remoteFilePath);

        //     if (!remoteFileStat || localFileStat.mtime > new Date(remoteFileStat.mtime)) {
        //         await client.uploadFrom(localFilePath, remoteFilePath);
        //     }
        // }
    } catch(err) {
        console.error('FTP error:', err);
    }
    client.close();
}

upload();