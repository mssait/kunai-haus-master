import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { isNumber } from "./util";

export const useQuery = (replace = false) => {
    const { search, pathname } = useLocation();
    const navigate = useNavigate()
    const setParams = params => {
        navigate(`${pathname}?${toQueryString(params)}`, { replace })
    }
    return useMemo(() => {
        const params = {}
        for (let [key, value] of new URLSearchParams(search).entries()) {
            if (isNumber(value)) {
                value = parseInt(value)
            }
            if (params[key] !== undefined) {
                if (Array.isArray(params[key])) {
                    params[key].push(value)
                } else {
                    params[key] = [params[key], value]
                }
            } else {
                params[key] = value
            }
        }
        return { params, setParams }

    }, [search]);
}

export const toQueryString = params => {
    let query = ''
    for (let k in params) {
        if (params.hasOwnProperty(k)) {
            const v = params[k]
            if (v !== undefined) {
                const isArray = Array.isArray(v);
                if (!isArray || (isArray && v.length > 0)) {
                    query += '&' + (isArray ?
                        v.map(i => encodeURIComponent(k) + '=' + encodeURIComponent(i)).join('&') :
                        encodeURIComponent(k) + '=' + encodeURIComponent(v));
                }
            }
        }
    }
    return query.substring(1)
}