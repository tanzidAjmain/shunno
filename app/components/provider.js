// app/providers.js  (or components/providers.js)
'use client';
import Papa from "papaparse";
import { useEffect, useState } from "react";


// console.log(res)

// const data = await res.json();

  


//  const products = [
//     { id: 1, name: 'MONKEY FOR THE WILD', price: 2899, image: '/p1.png', description: 'A unique and captivating piece of art that embodies the spirit of the wild. This artwork features a monkey in its natural habitat, surrounded by lush greenery and vibrant colors. The intricate details and dynamic composition make it a standout addition to any collection.' , organicPercentage:'100' , date:'2024.09.01' , ml:15 ,qunatity: 1, Materials:["Cumin, Geranium, Bergamot, Indian Oud, Oakmoss, Juniper berries, In-House Co-Macerated Patchouli and Oud, Taifi rose, Deer Musk ( org. Nepal ) , Mysore Santal"], archive: false },
//     { id: 2, name: 'MONKEY FOR THE SEGS', price: 2899, image: '/p1.png', description: 'A unique and captivating piece of art that embodies the spirit of the wild. This artwork features a monkey in its natural habitat, surrounded by lush greenery and vibrant colors. The intricate details and dynamic composition make it a standout addition to any collection.' , organicPercentage:'100' , date:'2024.09.01' , ml:15 ,qunatity: 1, Materials:["Cumin, Geranium, Bergamot, Indian Oud, Oakmoss, Juniper berries, In-House Co-Macerated Patchouli and Oud, Taifi rose, Deer Musk ( org. Nepal ) , Mysore Santal"], archive: false },
//   ];

export function DataProv(){
  const [products, setProducts] = useState([]);
  const [materials,setMaterials] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log('products', products)

  const CSV_URL = 'https://docs.google.com/spreadsheets/d/16C38VHAIzoLkbp8m2DYrvbTm7odgRv3dqcMYNeyPI7k/export?format=csv';

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
        // Handle case-sensitivity or key mismatches
        const rawMaterials = (product.Materials || product.materials || product.Material || '').toString().trim();
        let parsedMaterials = [];

        if (rawMaterials) {
          try {
            // 1. Standard JSON parse
            parsedMaterials = JSON.parse(rawMaterials);
          } catch {
            try {
              // 2. Unescape doubled CSV quotes ("" -> ") and convert single quotes to valid JSON double quotes
              const sanitized = rawMaterials
                .replace(/""/g, '"')
                .replace(/'/g, '"');
              parsedMaterials = JSON.parse(sanitized);
            } catch {
              // 3. Robust regex fallback: extracts content inside quotes or between commas
              const matches = rawMaterials.match(/[^,\[\]"]+/g);
              if (matches) {
                parsedMaterials = matches
                  .map((m) => m.trim())
                  .filter(Boolean);
              }
            }
          }
        }

        return {
          ...product,
          materials: Array.isArray(parsedMaterials) ? parsedMaterials : [parsedMaterials],
        };
      });

      setProducts(parsedProducts);
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
