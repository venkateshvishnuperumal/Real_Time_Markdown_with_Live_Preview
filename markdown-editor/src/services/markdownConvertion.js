import axios from "axios";

const API_URL = "http://localhost:5000/convertMarkdown";

export const convertMarkdownToHtml = async (markdown) => {
  try {
    const response = await axios.post(API_URL, { markdown: markdown });
    return response.data.html;
  } catch (error) {
    console.error("Error converting markdown:", error);
    return "";
  }
};
