const getCardFromLocalStorage = () => {
  const storedCardString = localStorage.getItem("card");
  if (storedCardString) {
    const storeCard = JSON.parse(storedCardString);
    return storeCard;
  }
  return [];
};
const SavecardToLocalStore = (card) => {
  const cardStringified = JSON.stringify(card);
  localStorage.setItem(cardStringified);
};

const addItemToLocalStored = (id) => {
  const card = getCardFromLocalStorage();
  const newCard = [...card, id];
  card.push(card);
};
export{addItemToLocalStored,getCardFromLocalStorage}