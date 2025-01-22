import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSpecies } from "../../Redux/actions/speciesActions";
import { fetchSpeciesData } from "../../api/api";
import Table from "../Table/Table";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import { Typography, Box, CircularProgress, Paper } from "@mui/material";
import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();
  const species = useSelector((state) => state.species);
  const language = useSelector((state) => state.language);

  useEffect(() => {
    fetchSpeciesData().then((data) => dispatch(setSpecies(data)));
  }, [dispatch]);

  const translate = (key) => {
    const translations = {
      en: {
        title: "Species based on Categories",
      },
      fr: {
        title: "Espèces basées sur les catégories",
      },
      es: {
        title: "Especies basadas en categorías",
      },
      zh: {
        title: "基于类别的物种",
      },
    };

    return translations[language][key] || key;
  };

  return (
    <Box className="home-container">
      <Paper elevation={3} className="home-content">
        <Typography variant="h4" className="home-title" gutterBottom>
          {translate("title")}
        </Typography>
        <LanguageSelector />
        {species.length > 0 ? (
          <Table species={species} />
        ) : (
          <Box className="loading-container">
            <CircularProgress />
            <Typography variant="body1" className="loading-text">
              Loading species data...
            </Typography>
          </Box>
        )}
      </Paper>
    </Box>
  );
};

export default Home;
