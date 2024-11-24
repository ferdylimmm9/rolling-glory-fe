const axios = require("axios");
const fs = require("fs");
const path = require("path");

// API URL
const BASE_URL = "https://recruitment.dev.rollingglory.com/api/v2/gifts";
const PAGE_SIZE = 20; // Number of items per page

// Function to get data from API
async function fetchData(page = 1) {
  try {
    const response = await axios.get(
      `${BASE_URL}?page[number]=${page}&page[size]=${PAGE_SIZE}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

// Function to generate sitemap XML
function generateSitemap(data) {
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  data.forEach((item) => {
    const url = `https://rolling-glory-fe.vercel.app/product/${item.id}`;
    sitemap += `  <url>\n`;
    sitemap += `    <loc>${url}</loc>\n`;
    sitemap += `  </url>\n`;
  });

  sitemap += `</urlset>`;
  return sitemap;
}

// Main function to handle pagination and file writing
async function generateSitemapFile() {
  let allData = [];
  let currentPage = 1;
  let totalPages = 1;

  try {
    do {
      console.log(`Fetching page ${currentPage}...`);
      const response = await fetchData(currentPage);

      if (response) {
        allData = allData.concat(response.data);
        currentPage = response.meta.currentPage + 1;
        totalPages = response.meta.totalPages;
      } else {
        break;
      }
    } while (currentPage <= totalPages);

    // Generate sitemap from collected data
    const sitemap = generateSitemap(allData);

    // Define the output path dynamically
    const publicPath = path.join(__dirname, "..", "public");
    const outputPath = path.join(publicPath, "sitemap.xml");

    // Write sitemap to file
    fs.writeFileSync(outputPath, sitemap, "utf8");
    console.log(`Sitemap generated successfully: ${outputPath}`);
  } catch (error) {
    console.error("Error generating sitemap:", error);
  }
}

// Run the script
generateSitemapFile();
