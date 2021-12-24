import moment from "moment";

const getTimeByDate = (date) => {
    return moment(date).format('HH:mm');
}

const getAmPmByDate = (date) => {
    return moment(date).format('A');
}

const getDateFromDate = (date) => {
    return moment(date).format('MMMM, DD YYYY').toUpperCase();
}

export {
    getTimeByDate,
    getAmPmByDate,
    getDateFromDate
}