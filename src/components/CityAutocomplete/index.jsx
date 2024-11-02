import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

function CityAutocomplete({ cities, setCity }) {
    return (
        <div className='flex justify-center flex-grow my-2 sm:my-2'>
            <Autocomplete
                disablePortal
                options={cities}
                getOptionLabel={(option) => option.name}
                sx={{ width: '100%', bgcolor: 'white', borderRadius: '4px', boxShadow: 1 }} // Change width to 100%
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Location"
                        variant="outlined"
                        sx={{borderRadius: '4px' }}
                    />
                )}
                isOptionEqualToValue={(option, value) => option.name === value.name}
                renderOption={(props, option) => (
                    <li {...props} key={`${option.name}-${option.id || option.index}`}>
                        {option.name}
                    </li>
                )}
                onChange={(event, value) => {
                    setCity(value);
                }}
            />
        </div>
    );
}

export default CityAutocomplete;


