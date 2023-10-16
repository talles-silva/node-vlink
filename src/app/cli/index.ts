import chalk from "chalk";
import fs from 'fs'
import { ListLink } from "../../@types";
import getFile from '../index.js'
import validator from "../http-validation/index.js";

const path = process.argv;

const printList = async (validate: boolean, result: string | ListLink[], index = '') => {

    if (validate) {
        console.log(
            chalk.yellow('Lista VALIDADA de links'),
            chalk.black.bgGreen(index),
            await validator(result))
    } else {
        console.log(
            chalk.yellow('Lista de links'),
            chalk.black.bgGreen(index),
            result)
    }
}

const processText = async (argument: string[]) => {
    const path = argument[2]
    const validate = argument[3] === '--validate'

    try {
        fs.lstatSync(path)
    } catch (error: any) {
        if (error.code === 'ENOENT') {
            console.log(chalk.red('Arquivo ou diretório não existe'))
            return
        }
    }

    if (fs.lstatSync(path).isFile()) {
        const result = await getFile(path)
        if (result) {
            printList(validate, result)
        }
    } else if (fs.lstatSync(path).isDirectory()) {
        const files = await fs.promises.readdir(path)
        files.forEach(async (fileName) => {
            const result = await getFile(`${path}/${fileName}`)
            if (result) {
                printList(validate, result, fileName)
            }
        })
    }

}

processText(path)