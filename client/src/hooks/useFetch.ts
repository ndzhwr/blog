
export const useFetch = async (url: string): Promise<any> => {
    let data
    fetch(url)
        .then((res) => {
            data = res
        }).catch((e) => {
            console.log(e)
        })
}



