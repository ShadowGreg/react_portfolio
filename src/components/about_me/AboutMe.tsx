import * as React from 'react';
import Box from '@mui/material/Box';
import {DataGrid, GridToolbar, useGridApiRef} from '@mui/x-data-grid';
import {Typography} from '@mui/material';
import RecipeReviewCard from "./card/Card";
import Tecnology from "../tecnology/Tecnology";
import PlacesOfWork from "./places_of_work/PlacesOfWork";
import jsonData from './/aboutMeData.json'; // Import the JSON data

interface ColumnConfig {
    field: string;
    headerName: string;
    width?: number; // Add width property to ColumnConfig interface
    flex?: number; // Add flex property to ColumnConfig interface
}

interface DataItem {
    [key: string]: any;
}

export default function AboutMe() {
    const apiRef = useGridApiRef();

    const data: DataItem[] = jsonData; // Assign the JSON data to the data variable

    const columns: ColumnConfig[] = [
        { field: 'id', headerName: 'id', flex: 0.3 }, // Set flex property for each column
        { field: 'name', headerName: 'Наименование Учреждения', flex: 1 },
        { field: 'faculty', headerName: 'Факультет', flex: 1 },
        { field: 'date', headerName: 'Дата окончания', flex: 1 },
    ];

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{
                alignContent: 'center',
                height: 520,
                width: '80%',
                display: 'flex',
                flexDirection: 'column',
                marginTop: '100px',
                marginLeft: '7%',
                marginRight: '7%',
                borderRadius: 5,
            }}>
                <div>
                    <RecipeReviewCard />
                </div>
                <div>
                    <Tecnology />
                </div>
                <div>
                    <PlacesOfWork />
                </div>
                <Box sx={{
                    marginTop: '1rem',
                    backgroundColor: 'white',
                    opacity: 0.9,
                    padding: '2rem',
                }}>
                    <div>
                        <Typography variant="h4" sx={{
                            marginTop: '1rem',
                            marginInlineStart: '1rem'
                        }}>Образование и курсы</Typography>
                    </div>
                    <div style={{ width: '100%' }}>
                        <DataGrid
                            sx={{
                                marginTop: '1rem',
                            }}
                            rows={data}
                            columns={columns.map((column) => ({
                                field: column.field,
                                headerName: column.headerName,
                                flex: column.flex, // Pass the flex property to the DataGrid column
                            }))}
                            disableRowSelectionOnClick
                            apiRef={apiRef}
                            components={{
                                Toolbar: GridToolbar,
                            }}
                        />
                    </div>
                </Box>
            </Box>
        </div>
    );
}
