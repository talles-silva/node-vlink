import chalk from "chalk";
import { ListLink } from "../../@types";

const extractLinks = (list: ListLink[]) => {

    return list.map((item: ListLink) => {
        return Object.values(item)[0]
    })
}

const checkStatus = async (URLsList: string[]) => {

    const arrStatus = await Promise
        .all(
            URLsList.map(async (url) => {
                try {
                    const response = await fetch(url);
                    return response.status
                } catch (err) {
                    return handleError(err)
                }
            })
        )

    return arrStatus
}

const handleError = (err: any) => {
    if (err.cause.code === 'ENOTFOUND') {
        return 'Link não encontrado'
    } else {
        return 'Ocorreu um erro inesperado'
    }
}

const validator = async (item: string | ListLink[]) => {

    const itemList = item as ListLink[]

    const links = extractLinks(itemList)

    const status = await checkStatus(links)

    return itemList.map((object, index) => {
        return {
            ...object,
            status: status[index]
        }
    })
}

export default validator;
