import React, { useState, useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import MarkdownEditor from "./components/MarkdownEditor";
import MarkdownPreview from "./components/MarkdownPreview";
import { convertMarkdownToHtml } from "./services/markdownConvertion";
import useDebounce from "./hooks/useDebounce";

const App = () => {
  const [markdown, setMarkdown] = useState("");
  const [html, setHtml] = useState("");
  const debouncedMarkdown = useDebounce(markdown, 300);

  useEffect(() => {
    const fetchConvertedMarkdown = async () => {
      if (debouncedMarkdown.trim() === "") {
        setHtml("");
        return;
      }
      const convertedHtml = await convertMarkdownToHtml(debouncedMarkdown);
      setHtml(convertedHtml);
    };

    fetchConvertedMarkdown();
  }, [debouncedMarkdown]);

  return (
    <Box sx={{ backgroundColor: "#e3f2fd" }}>
      <Container sx={{ p: 3, borderRadius: "10px" }}>
        <Typography
          variant="h4"
          align="center"
          sx={{ mb: 1, fontWeight: "bold", color: "#1565c0" }}
        >
          Markdown Editor with Live Preview
        </Typography>

        <Grid2 container spacing={2}>
          <Grid2 size={6}>
            <MarkdownEditor
              markdown={markdown}
              onChange={(e) => setMarkdown(e.target.value)}
            />
          </Grid2>
          <Grid2 size={6}>
            <MarkdownPreview html={html} />
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};

export default App;
