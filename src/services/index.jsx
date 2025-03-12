
const BASE_URL = "https://arequipa.tecomsg.com.pe/";

const getData = async (vista,filtro) => {
    try {
      let url =
      BASE_URL + "getData.php?vista=" + vista+"&filtro="+filtro;
      const response = await fetch(url, {
        method: "GET",
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      return null; // Devuelve null o maneja el error de alguna otra manera.
    }
  };


  export {
    getData  
  };