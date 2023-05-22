// fonction pour mettre le fichier src comme fichier de ref avec le @ dans les appels d'imports
const path = require('path')
module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        }
    }
}