import React from "react";
import { Typography, Paper, Box } from "@mui/material";
import PreviewIcon from "@mui/icons-material/Visibility";

const MarkdownPreview = ({ html }) => {
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
        <PreviewIcon sx={{ mr: 1, color: "#d32f2f" }} />
        <Typography variant="h6" fontWeight="bold">
          Preview
        </Typography>
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          overflowY: "auto",
          backgroundColor: "#ffffff",
          padding: "10px",
          borderRadius: "5px",
          minHeight: "75vh",
        }}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Paper>
  );
};

export default MarkdownPreview;
