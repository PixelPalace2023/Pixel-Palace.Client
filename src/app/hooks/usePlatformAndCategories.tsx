import React, { useEffect, useState } from 'react'
import { getCategorias, getPlatforms } from '../servers/reques';

export default function usePlatformAndCategories() {
    
      const [plataformas, setPlataformas] = useState([]);
      const [categorias, setCategorias] = useState([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);
    
      useEffect(() => {
        const fetchData = async () => {
          try {
            const plataformasResponse = await getPlatforms();
            console.log(plataformasResponse, 'plataformasResponse');
            
            const categoriasResponse = await getCategorias();
            console.log(categoriasResponse, 'categoriasResponse');
    
            setPlataformas(plataformasResponse.data.platforms);
            setCategorias(categoriasResponse.data.categories);
          } catch (error: any) {
            setError(error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchData();
      }, []);
    
      return { plataformas, categorias, loading, error };
    };
    
    
