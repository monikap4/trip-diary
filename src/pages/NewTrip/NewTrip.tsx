const NewTrip = () => (
  <div className="mainContainer">
    <h2>Přidat novou trasu</h2>
    <form>
      <label>
        Název trasy:
        <input type="text" placeholder="Např. Šumava loop" />
      </label>

      <label>
        Délka trasy (km):
        <input type="number" placeholder="Zadej délku" />
      </label>

      <button type="submit">Uložit trasu</button>
    </form>
  </div>
);

export default NewTrip;
