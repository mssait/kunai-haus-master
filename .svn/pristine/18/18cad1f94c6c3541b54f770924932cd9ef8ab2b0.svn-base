import { Box, Link } from "@mui/material";
import * as DataGrid from "@mui/x-data-grid-premium";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { useSnackbar } from "notistack";
import React, { useEffect, useRef, useState } from 'react';
import config from "../config";
import fetcher from "../util/fetcher";
import { toQueryString, useQuery } from "../util/useQuery";
import { link, toDate, toDateTime } from "../util/util";

const ServerDataGrid = ({
    render,
    datatype,
    ajax,
    customize,
    filter,
    sortable,
    client,
    rowsPerPageOptions = [10, 20, 50, 100, 500],
    componentsProps,
    refresh,
    Toolbar = DataGrid.GridToolbar,
    width,
    getDetailPanelContent,
    getDetailPanelHeight,
    columns = [],
    aggregation,
    experimentalFeatures,
    editable,
    processRowUpdate,
    checkboxSelection = false,
    onSelection,
    replace = true
}) => {
    const { enqueueSnackbar } = useSnackbar();
    const [data, setData] = useState({
        rows: [],
        columns,
        rowCount: 0
    });
    const { params, setParams } = useQuery(replace)
    const [loading, setLoading] = useState(false);
    const [selectionModel, setSelectionModel] = useState([]);

    const getSortModel = () => (
        params.sortColumn ? [{
            field: params.sortColumn,
            sort: params.sortDirection,
        }] : [])

    const getFilterModel = () => {
        const items = []
        if (columns.length > 0 && params.filterColumn) {
            if (Array.isArray(params.filterColumn)) {
                for (let i = 0; i < params.filterColumn.length; i++) {
                    if (columns.map(({ field }) => field).indexOf(params.filterColumn[i]) > -1) {
                        items.push({
                            id: i,
                            columnField: params.filterColumn[i],
                            operatorValue: params.filterOperator[i],
                            value: params.filterValue[i],
                        })
                    }
                }
            } else {
                items.push({
                    columnField: params.filterColumn,
                    operatorValue: params.filterOperator,
                    value: params.filterValue
                })
            }
        }
        return {
            items,
            quickFilterValues: [params.search]
        }
    }

    const getPagination = () => ({ page: (params.start || 0) / (params.length || 10) })


    const [sortModel, setSortModel] = useState(getSortModel());
    const [filterModel, setFilterModel] = useState(getFilterModel());
    const [pagination, setPagination] = useState(getPagination())

    const initialState = { filter: { filterModel }, sort: { sortModel }, pagination, aggregation }
    const controllerRef = useRef();

    useEffect(() => {
        setLoading(true)
        let url = client ? ajax.url : `${ajax.url}?${toQueryString(params)}`

        if (controllerRef.current) {
            controllerRef.current.abort();
        }

        const controller = new AbortController();
        controllerRef.current = controller;

        fetcher(url, {
            method: ajax.method || 'get',
            signal: controllerRef.current?.signal
        })
            .then(res => res.json())
            .then(data => {
                for (let i = 0; i < data.columns.length; i++) {
                    if (width?.[i]) {
                        data.columns[i].width = width[i]
                    }
                    if (render?.[i]) {
                        data.columns[i].renderCell = render[i]
                    }
                    if (editable?.[i]) {
                        data.columns[i].editable = editable[i]
                    }
                    if (datatype?.[i]) {
                        data.columns[i].type = datatype[i]
                        if (datatype?.[i] === 'dateTime') {
                            data.columns[i].renderCell = ({ value }) => toDateTime(value)
                        } else if (datatype?.[i] === 'date') {
                            data.columns[i].renderCell = ({ value }) => toDate(value)
                        } else if (datatype?.[i] === 'url') {
                            data.columns[i].renderCell = ({ value }) => <Link target="_blank" href={link(value)}>{value}</Link>
                        } else if (datatype?.[i] === 'email') {
                            data.columns[i].renderCell = ({ value }) => <Link target="_blank" href={`mailto://${value}`}>{value}</Link>
                        } else if (datatype?.[i] === 'phone') {
                            data.columns[i].renderCell = ({ value }) => <Link target="_blank" href={`tel://${value}`}>{value}</Link>
                        }
                    }
                    if (filter?.[i] === false) {
                        data.columns[i].filterable = false
                    }
                    if (sortable?.[i] === false) {
                        data.columns[i].sortable = false
                    }
                }
                setData(data)
                setSortModel(getSortModel())
                setFilterModel(getFilterModel())
                setPagination(getPagination());
                setLoading(false)
            })
            .catch(({ name }) => {
                if (name !== 'AbortError') {
                    enqueueSnackbar('Exception occurred while loading data', { variant: 'error' })
                    setLoading(false)
                }
            })
    }, [params, refresh])

    const formatQuickFilterValues = quickFilterValues => {
        if (quickFilterValues?.length === 0 ||
            quickFilterValues?.[0] === undefined ||
            quickFilterValues?.[0] === ''
        ) {
            return undefined
        }
        return quickFilterValues
    }

    const filterChange = filterModel => {
        setParams({
            ...params, ...{
                filterColumn: (filterModel.items?.map(({ columnField }) => columnField)) || [],
                filterOperator: (filterModel.items?.map(({ operatorValue }) => operatorValue)) || [],
                filterValue: (filterModel.items?.map(({ value }) => value || '')) || [],
                search: formatQuickFilterValues(filterModel.quickFilterValues)
            }
        })
    };

    const sortChange = data => {
        setParams({
            ...params,
            sortColumn: data[0]?.field || [],
            sortDirection: data[0]?.sort || []
        })
    }

    const pinnedColumns = {
        left: Array.isArray(params.pinLeft) ? params.pinLeft : [params.pinLeft],
        right: Array.isArray(params.pinRight) ? params.pinRight : [params.pinRight]
    }

    const setPinnedColumns = columns => {
        setParams({
            ...params,
            pinLeft: columns.left,
            pinRight: columns.right
        })
    }

    const setPageSize = length => {
        setParams({ ...params, length })
    }

    const setPage = page => {
        setParams({ ...params, start: page * (params.length || 10) })
    }

    const mode = client ? 'client' : 'server'

    return (
        <Box width="100%">
            <DataGrid.DataGridPremium
                disableRowGrouping
                disableChildrenSorting
                initialState={initialState}
                sortModel={sortModel}
                filterModel={filterModel}
                sx={{
                    bgcolor: 'white',
                    '& .MuiDataGrid-virtualScroller::-webkit-scrollbar': {
                        width: '0.4em',
                        height: '0.4em',
                        borderRadius: `${config.borderRadius}px`
                    },
                    '& .MuiDataGrid-virtualScroller::-webkit-scrollbar-track': {
                        background: '#f1f1f1',
                    },
                    '& .MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb': {
                        backgroundColor: '#888',
                    },
                    '& .MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb:hover': {
                        background: '#555',
                    },
                }}
                disableVirtualization
                disableSelectionOnClick
                rowCount={data.rowCount || 0}
                filterMode={mode}
                pagination={true}
                paginationMode={mode}
                sortingMode={mode}
                columns={data.columns}
                rows={data.rows}
                page={pagination.page}
                pageSize={params.length || 10}
                onPageSizeChange={setPageSize}
                rowsPerPageOptions={rowsPerPageOptions}
                onPageChange={setPage}
                onFilterModelChange={filterChange}
                onSortModelChange={sortChange}
                onSelectionModelChange={selected => {
                    onSelection && onSelection(selected)
                    setSelectionModel(selected)
                }}
                selectionModel={selectionModel}
                loading={loading}
                autoHeight={true}
                pinnedColumns={pinnedColumns}
                onPinnedColumnsChange={setPinnedColumns}
                components={{
                    Toolbar,
                    DetailPanelExpandIcon: IconChevronDown,
                    DetailPanelCollapseIcon: IconChevronUp
                }}
                componentsProps={{ ...componentsProps, filterPanel: { sx: { maxWidth: "100vw" } } }}
                getDetailPanelContent={getDetailPanelContent}
                getDetailPanelHeight={getDetailPanelHeight}
                experimentalFeatures={experimentalFeatures}
                processRowUpdate={processRowUpdate}
                checkboxSelection={checkboxSelection}
                {...customize}
            />
        </Box>
    )
}
export default ServerDataGrid;