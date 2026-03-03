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

const addItemToCardLocalStorage = (id) => {
  const card = getCardFromLocalStorage();
  const newCard = [...card, id];
  card.push(card);
};
export{addItemToCardLocalStorage,getCardFromLocalStorage}