import moment from "moment/moment";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import config from "../config";

export const toWorkDriveLink = id => `https://download-accl.zoho.in/public/workdrive/previewdata/${id}?orig=true`
export const WorkDriveImage = ({ image, alt, auto, width }) => (
    <LazyLoadImage
        style={auto === 'width' ? { width: 'auto', height: '100%' } : { width: width || '100%', height: 'auto' }}
        src={toWorkDriveLink(image)}
        alt={alt || ""}
        loading="lazy" />
)
export const toDateTime = time => time ? moment(new Date(time)).utcOffset(config.defaultTimezone).format('DD MMM YY hh:mm:ss a') : time;
export const toDate = time => time ? moment(new Date(time)).utcOffset(config.defaultTimezone).format('DD MMM YY') : time;
export const toDateString = () => moment(new Date()).utcOffset(config.defaultTimezone).format('yyyy-MM-DD');
export const todayStart = () => moment().utcOffset(config.defaultTimezone).startOf('day').format('YYYY-MM-DDTHH:mm')
export const todayEnd = () => moment().utcOffset(config.defaultTimezone).endOf('day').format('YYYY-MM-DDTHH:mm')
export const addDays = (days) => moment().utcOffset(config.defaultTimezone).add(days, 'days').endOf('day').format('YYYY-MM-DDTHH:mm')
export const isNumber = number => number.match(/^\d+$/)
export const link = link => link === null || link.indexOf('http') === 0 ? link : `https://${link}`
export const findSum = (array, field) => array.map(element => element[field]).reduce((a, b) => a + b, 0)
export const constructFormData = values => {
    const formData = new FormData()
    for (let field in values) {
        let value = values[field]
        if (value !== null) {
            formData.set(field, value)
        }
    }
    return formData
}
export const nonull = json => JSON.parse(JSON.stringify(json, (_, value) => value === null ? '' : value));
export const openLink = (url, target) => {
    let a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display:none";
    a.href = url;
    if (target) {
        a.target = target;
    }
    a.click();
    document.body.removeChild(a);
}