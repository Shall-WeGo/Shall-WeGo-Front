import NotLogin from "./NotLogin";
import SaveList from "./SaveList";
import * as M from "./MySavePlace.style"
const MySavePlace = () => {
  const token = window.localStorage.getItem("token");
  console.log(token);
  return <M.Container>{token ? <SaveList /> : <NotLogin />}</M.Container>;
};

export default MySavePlace;
