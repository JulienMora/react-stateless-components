import React, { useState } from "react";
import ReactDOM from "react-dom";
import Client from "./Client";
import ClientForm from "./ClientForm";
import Counter from "./Counter";

import "./styles.css";

const App = () => {
  const [clients, setClients] = useState([
    { id: 1, nom: "Lior Chamla" },
    { id: 2, nom: "Magali Pernin" },
    { id: 3, nom: "Joseph Durand" }
  ]);

  const handleDelete = id => {
    const updateClients = [...clients];
    const index = updateClients.findIndex(client => client.id === id);

    updateClients.splice(index, 1);

    setClients(updateClients);
  };

  const handleAdd = client => {
    const updateClients = [...clients];
    updateClients.push(client);

    setClients(updateClients);
  };

  const title = "Liste des clients";

  return (
    <div>
      <h1>{title}</h1>
      <Counter />
      <ul>
        {clients.map(client => (
          <Client key={client.id} details={client} onDelete={handleDelete} />
        ))}
      </ul>
      <ClientForm onClientAdd={handleAdd} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
