// app/providers.js (or components/providers.js)
'use client';

import Papa from "papaparse";
import { useEffect, useState } from "react";

export function DataProv() {
  const [products, setProducts] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [loading, setLoading] = useState(true);

  const CSV_URL = 'https://docs.google.com/spreadsheets/d/16C38VHAIzoLkbp8m2DYrvbTm7odgRv3dqcMYNeyPI7k/export?format=csv';

  // Helper function to safely parse stringified arrays/JSON from CSV columns
  const parseCSVArrayField = (fieldValue) => {
    const raw = (fieldValue || '').toString().trim();
    if (!raw) return [];

    try {
      // 1. Standard JSON parse
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [parsed];
    } catch {
      try {
        // 2. Unescape doubled CSV quotes ("" -> ") and convert single quotes to valid JSON double quotes
        const sanitized = raw.replace(/""/g, '"').replace(/'/g, '"');
        const parsed = JSON.parse(sanitized);
        return Array.isArray(parsed) ? parsed : [parsed];
      } catch {
        // 3. Robust regex fallback: extracts content inside quotes or between commas
        const matches = raw.match(/[^,\[\]"]+/g);
        if (matches) {
          return matches.map((m) => m.trim()).filter(Boolean);
        }
      }
    }
    return [raw];
  };

  useEffect(() => {
    let isMounted = true;

    Papa.parse(CSV_URL, {
      download: true,
      header: true,
      skipEmptyLines: true,
      transformHeader: (header) => header.trim().replace(/^\uFEFF/, ''), // Fix hidden BOM characters
      complete: (results) => {
        if (!isMounted) return;

        const parsedProducts = results.data.map((product) => {
          // Extract & parse additional photos
          const rawMorePhoto = product.morePhoto || product.morephoto || product.morePhotoUrl || '';
          const moreImages = parseCSVArrayField(rawMorePhoto);

          // Extract & parse materials
          const rawMaterials = product.Materials || product.materials || product.Material || '';
          const parsedMaterials = parseCSVArrayField(rawMaterials);

          return {
            ...product,
            materials: parsedMaterials,
            moreImages: moreImages,
          };
        });

        // Collect all unique materials across all products
        const allMaterials = Array.from(
          new Set(parsedProducts.flatMap((p) => p.materials))
        );

        setProducts(parsedProducts);
        setMaterials(allMaterials);
        setLoading(false);
      },

      error: (error) => {
        if (!isMounted) return;
        console.error('Error parsing CSV:', error);
        setLoading(false);
      },
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return { products, materials, loading };
}