import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

function CityAutocomplete({ cities, setSelectedCity }) {
    return (
        <Autocomplete
            disablePortal
            options={cities.reverse()}
            getOptionLabel={(option) => option.name}
            sx={{ width: '100%' }}
            renderInput={(params) => <TextField {...params} label="Location" className="border border-gray-300 rounded" />}
            isOptionEqualToValue={(option, value) => option.name === value.name}
            renderOption={(props, option) => (
                <li {...props} key={`${option.name}-${option.id || option.index}`} className="hover:bg-gray-100">
                    {option.name}
                </li>
            )}
            onChange={(event, value) => {
                setSelectedCity(value);
            }}
        />
    )
}

export default CityAutocomplete;
