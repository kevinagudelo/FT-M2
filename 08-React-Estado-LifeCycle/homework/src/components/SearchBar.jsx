import React, { useState } from "react";

export default function SearchBar({onSearch}) {
  const [citi , setCitie] = useState('')
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      console.log()
      onSearch(citi);
    }}>
      <input onChange={(e) => setCitie(e.target.value)}
        type="text"
        value={citi}
        placeholder="Ciudad..."
      />
      <input type="submit" value="Agregar" />
    </form>
  );
}
