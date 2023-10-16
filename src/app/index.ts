import chalk from "chalk"
import fs from 'fs'

const handleError = (err: any) => {
    throw new Error(chalk.red(err.code, 'não há arquivo no caminho especificado'))
}

const extractLinks = (text: string) => {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm
    const captures = [...text.matchAll(regex)]

    const results = captures.map((capture) => ({ [capture[1]]: capture[2] }))
    return results.length ? results : chalk.red('não há links no arquivo')
}

// Promises com then e catch

// const getFile: (path: string) => void = (path) => {
//     const enconding = 'utf-8'
//     fs.promises.readFile(path, enconding)
//         .then((data)=> {
//             console.log(chalk.green(data))
//         })
//         .catch(handleError)
// }

// Async/await

const getFile = async (path: string) => {
    const encoding = 'utf-8';
    try {
        const text = await fs.promises.readFile(path, encoding)
        return extractLinks(text)
    } catch (err) {
        handleError(err);
    }/* finally {
        console.log(chalk.yellow('operação concluída'));
    }*/
}

export default getFile;