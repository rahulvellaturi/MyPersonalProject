export const fetchSpeciesData = () => {
  return fetch(
    "https://apiv3.iucnredlist.org/api/v3/country/getspecies/AZ?token=9bb4facb6d23f48efbf424bb05c0c1ef1cf6f468393bc745d42179ac4aca5fee"
  )
    .then((response) => response.json())
    .then((data) => data.result);
};
