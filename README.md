# FTP Sync template

Project template with the GitHub Action script for sync of the static folder (./src/remote by default) with the remote host when pushing to the main branch.

### Installation

The template requires [Node.js](https://nodejs.org/) v18+ to run. (questionable, because I just have not tested with the older versions, lol)

Place the ftp_push.yaml file into .github/workflows 

```
mkdir -p .github/workflows && mv ftp_push.yaml .github/workflows 
```

Rename config_sample.js into config.js and provide the server credentials.
```
mv src/config_sample.js src/config.js
```

Install the dependencies and run the synchonization script forcibly.
```
npm i
node src/main.js
```


