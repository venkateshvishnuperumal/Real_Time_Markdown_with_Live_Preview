import React from "react";
import { TextField, Typography, Paper, Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const MarkdownEditor = ({ markdown, onChange }) => {
  return (
    <Paper
      sx={{
        p: 2,
        height: "100%",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f5f5f5",
        boxShadow: "3px 3px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
        <EditIcon sx={{ mr: 1, color: "#1976d2" }} />
        <Typography variant="h6" fontWeight="bold">
          Editor
        </Typography>
      </Box>

      <TextField
        fullWidth
        multiline
        rows={20}
        variant="standard"
        value={markdown}
        onChange={onChange}
        slotProps={{
          input: { disableUnderline: true },
        }}
        sx={{
          flexGrow: 1,
          backgroundColor: "#fff",
          borderRadius: "5px",
          padding: "10px",
        }}
      />
    </Paper>
  );
};

export default MarkdownEditor;
