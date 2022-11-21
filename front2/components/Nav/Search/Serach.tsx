import * as S from "./Search.style";
import SearchBar from "./SearchBar";
import Title from "./Title";
import SearchAndMyBtn from "./SearchAndMyBtn";
const Serach = () => {
  return (
    <S.SearchContainer>
      <Title />
      <SearchBar />
      <SearchAndMyBtn />
    </S.SearchContainer>
  );
};

export default Serach;
