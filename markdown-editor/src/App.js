import React, { useState } from "react";
import axios from "axios";
import {
  Grid2 as Grid,
  TextField,
  Typography,
  Container,
  Paper,
} from "@mui/material";
import ReactMarkdown from "react-markdown";

const App = () => {
  const [markdown, setMarkdown] = useState("");
  const [html, setHtml] = useState("");

  const handleMarkdownChange = async (event) => {
    const text = event.target.value;
    setMarkdown(text);

    try {
      const response = await axios.post(
        "http://localhost:5000/convertMarkdown",
        {
          markdown: text,
        }
      );
      setHtml(response.data.html);
    } catch (error) {
      console.error("Error converting markdown:", error);
    }
  };

  return (
    <Container sx={{ mt: 3 }}>
      <Typography variant="h4" align="center">
        Markdown Editor with Live Preview
      </Typography>
      <Grid container spacing={2}>
        <Grid size={6}>
          <Paper sx={{ p: 2, height: "80vh" }}>
            <Typography variant="h6">Editor</Typography>
            <TextField
              fullWidth
              rows={20}
              multiline
              value={markdown}
              onChange={handleMarkdownChange}
            />
          </Paper>
        </Grid>
        <Grid size={6}>
          <Paper sx={{ p: 2, height: "80vh" }}>
            <Typography variant="h6">Live Preview</Typography>
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
