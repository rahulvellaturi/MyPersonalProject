import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Paper,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  TablePagination,
} from "@mui/material";
import "./Table.css";

const categoryMap = {
  EX: "Extinct",
  EW: "Extinct in the Wild",
  CR: "Critically Endangered",
  EN: "Endangered",
  VU: "Vulnerable",
  NT: "Near Threatened",
  LC: "Least Concern",
  DD: "Data Deficient",
  NE: "Not Evaluated",
};

const TableComponent = ({ species }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [categories, setCategories] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  React.useEffect(() => {
    const uniqueCategories = [
      ...new Set(species.map((specie) => specie.category)),
    ];
    setCategories(uniqueCategories);
  }, [species]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryFilter = (e) => {
    setCategoryFilter(e.target.value);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filteredSpecies = species
    .filter((specie) =>
      specie.scientific_name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((specie) =>
      categoryFilter ? specie.category === categoryFilter : true
    );

  const paginatedSpecies = filteredSpecies.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <div className="table-container">
      <TextField
        label="Search"
        onChange={handleSearch}
        variant="outlined"
        className="search-input"
        placeholder="Search species..."
      />

      <div className="filter-container">
        <FormControl variant="outlined" className="filter-dropdown">
          <InputLabel>Category</InputLabel>
          <Select
            value={categoryFilter}
            onChange={handleCategoryFilter}
            label="Category"
          >
            <MenuItem value="">All Categories</MenuItem>
            {categories.map((category, index) => (
              <MenuItem key={index} value={category}>
                {category} - {categoryMap[category]}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <TableContainer component={Paper} className="table-paper">
        <Table>
          <TableHead className="table-head">
            <TableRow>
              <TableCell className="table-cell">Scientific Name</TableCell>
              <TableCell className="table-cell">Category</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedSpecies.map((specie) => (
              <TableRow key={specie.taxonid} className="table-row">
                <TableCell>{specie.scientific_name}</TableCell>
                <TableCell>
                  {specie.category} - {categoryMap[specie.category]}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        component="div"
        count={filteredSpecies.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[10, 25, 50]}
      />
    </div>
  );
};

export default TableComponent;
