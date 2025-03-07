import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  FormControl,
  MenuItem,
  Select,
} from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import MarkdownEditor from "./components/MarkdownEditor";
import MarkdownPreview from "./components/MarkdownPreview";
import { convertMarkdownToHtml } from "./services/markdownConvertion";
import useDebounce from "./hooks/useDebounce";

const App = () => {
  const [markdown, setMarkdown] = useState("");
  const [html, setHtml] = useState("");
  const [delay, setDelay] = useState(300);
  const debouncedMarkdown = useDebounce(markdown, delay);

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
        <Grid2
          container
          alignItems="center"
          justifyContent="space-between"
          sx={{ mb: 2 }}
        >
          <Typography
            variant="h4"
            align="center"
            sx={{ mb: 1, fontWeight: "bold", color: "#1565c0" }}
          >
            Markdown Editor with Live Preview
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography variant="body1" fontWeight="bold">
              Preview Delay:
            </Typography>
            <FormControl size="small" sx={{ minWidth: 120 }}>
              <Select value={delay} onChange={(e) => setDelay(e.target.value)}>
                <MenuItem value={0}>0ms (Instant)</MenuItem>
                <MenuItem value={100}>100ms</MenuItem>
                <MenuItem value={200}>200ms</MenuItem>
                <MenuItem value={300}>300ms (Default)</MenuItem>
                <MenuItem value={500}>500ms</MenuItem>
                <MenuItem value={1000}>1000ms</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid2>
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
