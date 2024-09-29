export default function sortingPlayers(arrayOfPlayers) {
  if (!arrayOfPlayers) return null;
  const result = arrayOfPlayers.sort((a, b) => b.health - a.health);
  return result;
}