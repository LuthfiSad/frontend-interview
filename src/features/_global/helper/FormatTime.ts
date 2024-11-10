interface IFormatDate {
    year: "numeric" | "2-digit"
    month: "numeric" | "2-digit" | "long" | "short" | "narrow"
    day: "numeric" | "2-digit",
    timeZone?: string

}

// interface IFormatTime {
//     hour: "numeric" | "2-digit"
//     minute: "numeric" | "2-digit",
//     timeZone: string
// }



export function formatDate(isoDate: Date) {
    const date = new Date(isoDate);
    console.log({ isoDate })

    const optionsDate: IFormatDate = {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
        timeZone: 'UTC'
    };

    // const optionsTime: IFormatTime = {
    //     hour: '2-digit',
    //     minute: '2-digit',
    //     timeZone: 'UTC'
    // };
    // console.log(new Date(isoDate).toLocaleString('id-ID', { ...optionsDate, timeZone: 'UTC', hour: '2-digit', minute: '2-digit' }))
    const formattedDate = date.toLocaleDateString('id-ID', optionsDate);
    // const formattedTime = date.toLocaleString('id-ID', optionsTime);

console.log(formattedDate, 'tes')
    // return `${formattedDate}, ${formattedTime}`;
    return formattedDate;
}