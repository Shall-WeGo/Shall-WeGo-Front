import TitleIcon from "./TitleIcon";
import * as T from "./Title.style";
const Title = () => {
  return (
    <T.TitleContainer>
      <TitleIcon />
      <T.TitleText>한번가볼까</T.TitleText>
    </T.TitleContainer>
  );
};

export default Title;
