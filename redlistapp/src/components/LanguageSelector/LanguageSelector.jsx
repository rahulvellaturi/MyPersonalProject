import React from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../Redux/actions/speciesActions";
import "./LanguageSelector.css";

const LanguageSelector = () => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language);

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    dispatch(setLanguage(selectedLanguage));
  };

  return (
    <div className="language-selector">
      <FormControl variant="outlined" className="form-control">
        <InputLabel>Language</InputLabel>
        <Select
          value={language}
          onChange={handleLanguageChange}
          label="Language"
        >
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="fr">French</MenuItem>
          <MenuItem value="es">Spanish</MenuItem>
          <MenuItem value="zh">Chinese</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default LanguageSelector;
